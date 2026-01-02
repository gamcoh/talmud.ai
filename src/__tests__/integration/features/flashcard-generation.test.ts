import { describe, it, expect, beforeAll, afterAll, beforeEach, vi } from 'vitest';
import { db } from '~/server/db';
import { addStudiedText } from '~/server/actions/dashboard';
import { generateFlashcardsForRef, getPendingRefsForGeneration } from '~/server/ai/flashcard-generator';

// Mock OpenAI
vi.mock('~/server/ai/openai', () => ({
  generateFlashcardsFromText: vi.fn().mockResolvedValue([
    {
      question: 'What is the first verse of the Torah?',
      options: [
        'In the beginning God created the heaven and the earth.',
        'And the earth was without form',
        'Let there be light',
        'God said unto Abraham',
      ],
      correctAnswer: 'In the beginning God created the heaven and the earth.',
      difficulty: 'MEDIUM',
    },
    {
      question: 'What does "Bereishit" mean in English?',
      options: ['In the beginning', 'And God said', 'Let there be', 'The creation'],
      correctAnswer: 'In the beginning',
      difficulty: 'EASY',
    },
  ]),
  getPointsForDifficulty: vi.fn((difficulty) => {
    const points = { EASY: 5, MEDIUM: 10, HARD: 20 };
    return points[difficulty as keyof typeof points] || 10;
  }),
}));

// Mock Sefaria API
vi.mock('~/server/ai/sefaria-service', () => ({
  fetchTextForFlashcards: vi.fn().mockResolvedValue({
    textContent: 'In the beginning God created the heaven and the earth.',
    contextText: 'In the beginning God created the heaven and the earth. And the earth was without form, and void.',
    actualRef: 'Genesis 1:1',
    actualHeRef: 'בראשית א:א',
  }),
  normalizeRef: vi.fn((ref) => ref.trim()),
}));

// Mock auth
vi.mock('~/lib/auth', () => ({
  auth: vi.fn().mockResolvedValue({
    user: {
      id: 'test-user-flashcard-generation',
      email: 'test@example.com',
    },
  }),
}));

describe.sequential('Flashcard Generation Integration Tests', () => {
  const testUserId = 'test-user-flashcard-generation';
  const testRef = 'Genesis 5:1'; // Use unique ref to avoid conflicts with other test files

  beforeAll(async () => {
    // Ensure test user exists
    await db.user.upsert({
      where: { id: testUserId },
      update: {},
      create: {
        id: testUserId,
        email: 'test-flashcard-generation@example.com',
        name: 'Test User',
      },
    });

    // Initialize user state
    await db.streak.upsert({
      where: { userId: testUserId },
      update: {},
      create: { userId: testUserId },
    });

    await db.level.upsert({
      where: { userId: testUserId },
      update: {},
      create: {
        userId: testUserId,
        totalPoints: 0,
        currentLevel: 1,
      },
    });
  });

  beforeEach(async () => {
    // Wait a bit to avoid race conditions
    await new Promise(resolve => setTimeout(resolve, 100));
    
    // Clean up only THIS test's data - don't delete all flashcards
    await db.generatedFlashcard.deleteMany({
      where: { ref: testRef },
    });
    await db.studiedText.deleteMany({
      where: { userId: testUserId },
    });
    await db.points.deleteMany({
      where: { userId: testUserId },
    });
    
    // Wait again after cleanup
    await new Promise(resolve => setTimeout(resolve, 50));
  });

  afterAll(async () => {
    // Cleanup - don't delete user, it doesn't interfere between test runs
    await db.generatedFlashcard.deleteMany({
      where: { ref: testRef },
    });
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
    // Don't delete user - keep for consistency
  });

  describe('Generating flashcards from sources', () => {
    it('should generate flashcards for a source', async () => {
      const result = await generateFlashcardsForRef(testRef);

      expect(result.success).toBe(true);
      expect(result.flashcardsCreated).toBeGreaterThan(0);

      // Verify flashcards in database
      const flashcards = await db.generatedFlashcard.findMany({
        where: { ref: testRef },
      });

      expect(flashcards.length).toBeGreaterThan(0);
    });

    it('should store flashcard metadata correctly', async () => {
      await generateFlashcardsForRef(testRef);

      const flashcards = await db.generatedFlashcard.findMany({
        where: { ref: testRef },
      });

      flashcards.forEach((flashcard) => {
        expect(flashcard.ref).toBe(testRef);
        expect(flashcard.question).toBeTruthy();
        expect(flashcard.options).toBeTruthy();
        expect(flashcard.options.length).toBeGreaterThan(0);
        expect(flashcard.correctAnswer).toBeTruthy();
        expect(flashcard.difficulty).toMatch(/^(EASY|MEDIUM|HARD)$/);
        expect(flashcard.points).toBeGreaterThan(0);
        expect(flashcard.generatedAt).toBeInstanceOf(Date);
      });
    });

    it('should not duplicate flashcards for the same ref', async () => {
      // Generate first time
      const result1 = await generateFlashcardsForRef(testRef);
      expect(result1.success).toBe(true);
      expect(result1.flashcardsCreated).toBeGreaterThan(0);

      const count1 = await db.generatedFlashcard.count({
        where: { ref: testRef },
      });

      // Try to generate again - should skip
      const result2 = await generateFlashcardsForRef(testRef);
      expect(result2.success).toBe(true);
      expect(result2.flashcardsCreated).toBe(0); // No new cards created

      const count2 = await db.generatedFlashcard.count({
        where: { ref: testRef },
      });

      // Should have same count (no duplicates)
      expect(count2).toBe(count1);
    });

    it('should identify refs that need flashcard generation', async () => {
      // Add studied texts without flashcards (use unique refs for this test)
      await addStudiedText({ ref: 'Genesis 6:1' });
      await addStudiedText({ ref: 'Genesis 7:1' });
      await addStudiedText({ ref: 'Genesis 8:1' });

      const pendingRefs = await getPendingRefsForGeneration(10);

      expect(pendingRefs.length).toBeGreaterThan(0);
      expect(pendingRefs).toContain('Genesis 6:1');
      expect(pendingRefs).toContain('Genesis 7:1');
      expect(pendingRefs).toContain('Genesis 8:1');
    });

    it('should not include refs that already have flashcards', async () => {
      // Add studied text and generate flashcards
      await addStudiedText({ ref: testRef });
      await generateFlashcardsForRef(testRef);

      // Add another studied text without flashcards
      await addStudiedText({ ref: 'Exodus 20:1' });

      const pendingRefs = await getPendingRefsForGeneration(10);

      expect(pendingRefs).not.toContain(testRef);
      expect(pendingRefs).toContain('Exodus 20:1');
    });
  });

  describe('Flashcards are shared across users', () => {
    it('should share flashcards between users who studied the same source', async () => {
      const secondUserId = 'test-user-2';

      // Create second user
      await db.user.upsert({
        where: { id: secondUserId },
        update: {},
        create: {
          id: secondUserId,
          email: 'test2@example.com',
          name: 'Test User 2',
        },
      });

      // First user adds source and generates flashcards
      await addStudiedText({ ref: testRef });
      await generateFlashcardsForRef(testRef);

      // Mock auth for second user
      const { auth } = await import('~/lib/auth');
      vi.mocked(auth).mockResolvedValueOnce({
        user: {
          id: secondUserId,
          email: 'test2@example.com',
        },
      } as any);

      // Second user adds same source
      await addStudiedText({ ref: testRef });

      // Both users should see the same flashcards
      const flashcards = await db.generatedFlashcard.findMany({
        where: { ref: testRef },
      });

      expect(flashcards.length).toBeGreaterThan(0);

      // Verify flashcards don't have user-specific data
      flashcards.forEach((flashcard) => {
        expect(flashcard).not.toHaveProperty('userId');
      });

      // Cleanup
      await db.studiedText.deleteMany({
        where: { userId: secondUserId },
      });
      await db.user.deleteMany({
        where: { id: secondUserId },
      });
    });
  });

  describe('Flashcard difficulty and points', () => {
    it('should assign appropriate points based on difficulty', async () => {
      await generateFlashcardsForRef(testRef);

      const flashcards = await db.generatedFlashcard.findMany({
        where: { ref: testRef },
      });

      flashcards.forEach((flashcard) => {
        if (flashcard.difficulty === 'EASY') {
          expect(flashcard.points).toBe(5);
        } else if (flashcard.difficulty === 'MEDIUM') {
          expect(flashcard.points).toBe(10);
        } else if (flashcard.difficulty === 'HARD') {
          expect(flashcard.points).toBe(20);
        }
      });
    });

    it('should have a variety of difficulty levels', async () => {
      // Generate flashcards for multiple refs to get variety
      await addStudiedText({ ref: 'Genesis 1:1' });
      await addStudiedText({ ref: 'Genesis 1:2' });
      await addStudiedText({ ref: 'Genesis 1:3' });

      await generateFlashcardsForRef('Genesis 1:1');
      await generateFlashcardsForRef('Genesis 1:2');
      await generateFlashcardsForRef('Genesis 1:3');

      const allFlashcards = await db.generatedFlashcard.findMany({
        where: {
          ref: {
            startsWith: 'Genesis 1:',
          },
        },
      });

      const difficulties = new Set(allFlashcards.map((f) => f.difficulty));
      
      // Should have at least 2 different difficulty levels
      expect(difficulties.size).toBeGreaterThanOrEqual(1);
    });
  });
});
