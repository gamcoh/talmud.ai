import { describe, it, expect, beforeAll, afterAll, beforeEach, vi } from 'vitest';
import { db } from '~/server/db';
import { awardPoints, getUserStats } from '~/server/gamification/service';
import { addStudiedText } from '~/server/actions/dashboard';
import { gradeReview } from '~/server/flashcards/service';

// Mock auth
vi.mock('~/lib/auth', () => ({
  auth: vi.fn().mockResolvedValue({
    user: {
      id: 'test-user-points-gamification',
      email: 'test@example.com',
    },
  }),
}));

describe.sequential('Points Attribution Integration Tests', () => {
  const testUserId = 'test-user-points-gamification';

  beforeAll(async () => {
    // Create test user
    await db.user.upsert({
      where: { id: testUserId },
      update: {},
      create: {
        id: testUserId,
        email: 'test-points-gamification@example.com',
        name: 'Test User',
      },
    });
  });

  beforeEach(async () => {
    // Clean up test data
    await db.studiedText.deleteMany({
      where: { userId: testUserId },
    });
    await db.points.deleteMany({
      where: { userId: testUserId },
    });
    await db.level.deleteMany({
      where: { userId: testUserId },
    });
    await db.streak.deleteMany({
      where: { userId: testUserId },
    });

    // Initialize user state (user already exists from beforeAll)
    // Use upsert to avoid unique constraint errors
    await db.streak.upsert({
      where: { userId: testUserId },
      update: { currentStreak: 0, longestStreak: 0, lastStudyDate: null },
      create: { userId: testUserId },
    });
    
    await db.level.upsert({
      where: { userId: testUserId },
      update: { totalPoints: 0, currentLevel: 1 },
      create: {
        userId: testUserId,
        totalPoints: 0,
        currentLevel: 1,
      },
    });
  });

  afterAll(async () => {
    // Cleanup - don't delete user, it doesn't interfere between test runs
    await db.points.deleteMany({
      where: { userId: testUserId },
    });
    await db.level.deleteMany({
      where: { userId: testUserId },
    });
    await db.streak.deleteMany({
      where: { userId: testUserId },
    });
    await db.studiedText.deleteMany({
      where: { userId: testUserId },
    });
    // Don't delete user - keep for consistency
  });

  describe('Points for studying texts', () => {
    it('should award 10 points when user adds a studied text', async () => {
      await addStudiedText({
        ref: 'Genesis 1:1',
        heRef: 'בראשית א:א',
      });

      const pointsRecord = await db.points.findFirst({
        where: {
          userId: testUserId,
          action: 'STUDY_TEXT',
        },
      });

      expect(pointsRecord).toBeDefined();
      expect(pointsRecord?.points).toBe(10);
    });

    it('should update total points in user level', async () => {
      await addStudiedText({ ref: 'Genesis 1:1' });

      const level = await db.level.findUnique({
        where: { userId: testUserId },
      });

      expect(level?.totalPoints).toBe(10);
    });

    it('should accumulate points from multiple texts', async () => {
      await addStudiedText({ ref: 'Genesis 1:1' });
      await addStudiedText({ ref: 'Genesis 1:2' });
      await addStudiedText({ ref: 'Genesis 1:3' });

      const level = await db.level.findUnique({
        where: { userId: testUserId },
      });

      expect(level?.totalPoints).toBe(30);
    });

    it('should track individual point transactions', async () => {
      await addStudiedText({ ref: 'Genesis 1:1' });
      await addStudiedText({ ref: 'Genesis 1:2' });

      const pointsRecords = await db.points.findMany({
        where: {
          userId: testUserId,
          action: 'STUDY_TEXT',
        },
        orderBy: { earnedAt: 'asc' },
      });

      expect(pointsRecords).toHaveLength(2);
      expect(pointsRecords[0]?.points).toBe(10);
      expect(pointsRecords[1]?.points).toBe(10);
    });

    it('should store metadata with point records', async () => {
      const testRef = 'Genesis 1:1';
      await addStudiedText({ ref: testRef });

      const pointsRecord = await db.points.findFirst({
        where: {
          userId: testUserId,
          action: 'STUDY_TEXT',
        },
      });

      expect(pointsRecord?.metadata).toBeDefined();
      // @ts-ignore - metadata is JSON
      expect(pointsRecord?.metadata?.ref).toBe(testRef);
    });
  });

  describe('Points for answering flashcards', () => {
    let testReviewId: string;
    let testFlashcardId: string;

    beforeEach(async () => {
      // Create a test flashcard
      const flashcard = await db.flashcard.create({
        data: {
          portionType: 'Daf',
          portionLabel: 'Berakhot 2a',
          prompt: 'Test question?',
          answer: 'Test answer',
        },
      });
      testFlashcardId = flashcard.id;

      // Create a review for it
      const review = await db.flashcardReview.create({
        data: {
          flashcardId: testFlashcardId,
          dueAt: new Date(),
          intervalDays: 0,
          ease: 2.5,
          reps: 0,
        },
      });
      testReviewId = review.id;
    });

    it('should award points when user answers flashcard correctly', async () => {
      const result = await gradeReview(testReviewId, 'Good');

      expect(result.pointsEarned).toBeGreaterThan(0);
      expect(result.pointsEarned).toBe(10); // Good = 10 points
    });

    it('should award different points based on grade', async () => {
      // Test Again grade
      const review1 = await db.flashcardReview.create({
        data: {
          flashcardId: testFlashcardId,
          dueAt: new Date(),
          intervalDays: 0,
          ease: 2.5,
          reps: 0,
        },
      });
      const result1 = await gradeReview(review1.id, 'Again');
      expect(result1.pointsEarned).toBe(1);

      // Test Hard grade
      const review2 = await db.flashcardReview.create({
        data: {
          flashcardId: testFlashcardId,
          dueAt: new Date(),
          intervalDays: 0,
          ease: 2.5,
          reps: 0,
        },
      });
      const result2 = await gradeReview(review2.id, 'Hard');
      expect(result2.pointsEarned).toBe(5);

      // Test Good grade
      const review3 = await db.flashcardReview.create({
        data: {
          flashcardId: testFlashcardId,
          dueAt: new Date(),
          intervalDays: 0,
          ease: 2.5,
          reps: 0,
        },
      });
      const result3 = await gradeReview(review3.id, 'Good');
      expect(result3.pointsEarned).toBe(10);

      // Test Easy grade
      const review4 = await db.flashcardReview.create({
        data: {
          flashcardId: testFlashcardId,
          dueAt: new Date(),
          intervalDays: 0,
          ease: 2.5,
          reps: 0,
        },
      });
      const result4 = await gradeReview(review4.id, 'Easy');
      expect(result4.pointsEarned).toBe(15);
    });
  });

  describe('Level progression', () => {
    it('should start at level 1 with 0 points', async () => {
      const level = await db.level.findUnique({
        where: { userId: testUserId },
      });

      expect(level?.currentLevel).toBe(1);
      expect(level?.totalPoints).toBe(0);
    });

    it('should level up when reaching point threshold', async () => {
      // Level 2 requires 100 points
      // Add 10 texts = 100 points
      for (let i = 1; i <= 10; i++) {
        await addStudiedText({ ref: `Genesis ${i}:1` });
      }

      const level = await db.level.findUnique({
        where: { userId: testUserId },
      });

      expect(level?.currentLevel).toBeGreaterThan(1);
      expect(level?.totalPoints).toBeGreaterThanOrEqual(100);
    });

    it('should award bonus points for leveling up', async () => {
      // Add enough texts to level up
      for (let i = 1; i <= 10; i++) {
        await addStudiedText({ ref: `Genesis ${i}:1` });
      }

      const levelUpBonus = await db.points.findFirst({
        where: {
          userId: testUserId,
          action: 'LEVEL_UP',
        },
      });

      expect(levelUpBonus).toBeDefined();
      expect(levelUpBonus?.points).toBe(100); // Level up bonus
    });

    it('should reach higher levels with more points', async () => {
      // Level 3 requires 300 points
      // Add 30 texts = 300 points
      for (let i = 1; i <= 30; i++) {
        await addStudiedText({ ref: `Genesis ${i}:1` });
      }

      const level = await db.level.findUnique({
        where: { userId: testUserId },
      });

      expect(level?.currentLevel).toBeGreaterThanOrEqual(2);
      expect(level?.totalPoints).toBeGreaterThanOrEqual(300);
    });
  });

  describe('Point actions and types', () => {
    it('should support STUDY_TEXT action', async () => {
      const result = await awardPoints(testUserId, 'STUDY_TEXT', { ref: 'Genesis 1:1' });

      expect(result).toBeDefined();
      
      const pointsRecord = await db.points.findFirst({
        where: {
          userId: testUserId,
          action: 'STUDY_TEXT',
        },
      });

      expect(pointsRecord?.points).toBe(10);
    });

    it('should support COMPLETE_FLASHCARD action', async () => {
      const result = await awardPoints(testUserId, 'COMPLETE_FLASHCARD');

      expect(result).toBeDefined();
      
      const pointsRecord = await db.points.findFirst({
        where: {
          userId: testUserId,
          action: 'COMPLETE_FLASHCARD',
        },
      });

      expect(pointsRecord?.points).toBe(5);
    });

    it('should support STREAK_BONUS action', async () => {
      const result = await awardPoints(testUserId, 'STREAK_BONUS', { streakDays: 7 });

      expect(result).toBeDefined();
      
      const pointsRecord = await db.points.findFirst({
        where: {
          userId: testUserId,
          action: 'STREAK_BONUS',
        },
      });

      expect(pointsRecord?.points).toBe(25);
    });

    it('should support FIRST_STUDY_TODAY action', async () => {
      const result = await awardPoints(testUserId, 'FIRST_STUDY_TODAY');

      expect(result).toBeDefined();
      
      const pointsRecord = await db.points.findFirst({
        where: {
          userId: testUserId,
          action: 'FIRST_STUDY_TODAY',
        },
      });

      expect(pointsRecord?.points).toBe(15);
    });

    it('should support GOAL_COMPLETED action', async () => {
      const result = await awardPoints(testUserId, 'GOAL_COMPLETED', { goalType: 'daily' });

      expect(result).toBeDefined();
      
      const pointsRecord = await db.points.findFirst({
        where: {
          userId: testUserId,
          action: 'GOAL_COMPLETED',
        },
      });

      expect(pointsRecord?.points).toBe(50);
    });
  });

  describe('State consistency', () => {
    it('should keep points and level in sync', async () => {
      // Award various points
      await addStudiedText({ ref: 'Genesis 1:1' }); // +10
      await awardPoints(testUserId, 'COMPLETE_FLASHCARD'); // +5
      await awardPoints(testUserId, 'FIRST_STUDY_TODAY'); // +15

      const pointsSum = await db.points.aggregate({
        where: { userId: testUserId },
        _sum: { points: true },
      });

      const level = await db.level.findUnique({
        where: { userId: testUserId },
      });

      expect(level?.totalPoints).toBe(pointsSum._sum.points ?? 0);
    });

    it('should persist points across sessions', async () => {
      // Award points
      await addStudiedText({ ref: 'Genesis 1:1' });
      await addStudiedText({ ref: 'Genesis 1:2' });

      const level1 = await db.level.findUnique({
        where: { userId: testUserId },
      });

      const initialPoints = level1?.totalPoints ?? 0;

      // Simulate new session - award more points
      await addStudiedText({ ref: 'Genesis 1:3' });

      const level2 = await db.level.findUnique({
        where: { userId: testUserId },
      });

      expect(level2?.totalPoints).toBe(initialPoints + 10);
    });

    it('should track point history chronologically', async () => {
      await addStudiedText({ ref: 'Genesis 1:1' });
      await new Promise((resolve) => setTimeout(resolve, 10)); // Small delay
      await addStudiedText({ ref: 'Genesis 1:2' });
      await new Promise((resolve) => setTimeout(resolve, 10));
      await addStudiedText({ ref: 'Genesis 1:3' });

      const history = await db.points.findMany({
        where: { userId: testUserId },
        orderBy: { earnedAt: 'asc' },
      });

      expect(history).toHaveLength(3);
      
      // Verify chronological order
      for (let i = 1; i < history.length; i++) {
        expect(history[i]!.earnedAt.getTime()).toBeGreaterThanOrEqual(
          history[i - 1]!.earnedAt.getTime()
        );
      }
    });
  });

  describe('User stats integration', () => {
    it('should include points in user stats', async () => {
      await addStudiedText({ ref: 'Genesis 1:1' });
      await addStudiedText({ ref: 'Genesis 1:2' });

      const stats = await getUserStats(testUserId);

      expect(stats.level?.totalPoints).toBe(20);
      expect(stats.level?.currentLevel).toBe(1);
    });

    it('should update stats after awarding points', async () => {
      const statsBefore = await getUserStats(testUserId);
      
      await addStudiedText({ ref: 'Genesis 1:1' });
      
      const statsAfter = await getUserStats(testUserId);

      expect(statsAfter.level?.totalPoints).toBe((statsBefore.level?.totalPoints ?? 0) + 10);
    });
  });
});
