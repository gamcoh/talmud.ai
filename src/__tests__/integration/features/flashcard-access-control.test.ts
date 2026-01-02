import { describe, it, expect, beforeAll, afterAll, beforeEach, vi } from 'vitest';
import { db } from '~/server/db';
import { addStudiedText } from '~/server/actions/dashboard';
import { generateFlashcardsForRef } from '~/server/ai/flashcard-generator';

// Mock OpenAI
vi.mock('~/server/ai/openai', () => ({
  generateFlashcardsFromText: vi.fn().mockResolvedValue([
    {
      question: 'Test question 1?',
      options: ['Test answer 1', 'Wrong 1', 'Wrong 2', 'Wrong 3'],
      correctAnswer: 'Test answer 1',
      difficulty: 'MEDIUM',
    },
    {
      question: 'Test question 2?',
      options: ['Test answer 2', 'Wrong A', 'Wrong B', 'Wrong C'],
      correctAnswer: 'Test answer 2',
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
    textContent: 'Test text content',
    contextText: 'Test context text',
    actualRef: 'Genesis 1:1',
    actualHeRef: 'בראשית א:א',
  }),
  normalizeRef: vi.fn((ref) => ref.trim()),
}));

// Mock auth - will be modified per test
const mockAuth = vi.fn();
vi.mock('~/lib/auth', () => ({
  auth: mockAuth,
}));

describe.sequential('Flashcard Access Control Integration Tests', () => {
  const user1Id = 'test-user-1';
  const user2Id = 'test-user-2';
  const sharedRef = 'Genesis 1:1';
  const user1OnlyRef = 'Exodus 20:1';
  const user2OnlyRef = 'Berakhot 2a';

  beforeAll(async () => {
    // Create test users
    await db.user.upsert({
      where: { id: user1Id },
      update: {},
      create: {
        id: user1Id,
        email: 'user1@example.com',
        name: 'Test User 1',
      },
    });

    await db.user.upsert({
      where: { id: user2Id },
      update: {},
      create: {
        id: user2Id,
        email: 'user2@example.com',
        name: 'Test User 2',
      },
    });

    // Initialize user states
    for (const userId of [user1Id, user2Id]) {
      await db.streak.upsert({
        where: { userId },
        update: {},
        create: { userId },
      });

      await db.level.upsert({
        where: { userId },
        update: {},
        create: {
          userId,
          totalPoints: 0,
          currentLevel: 1,
        },
      });
    }
  });

  beforeEach(async () => {
    // Wait a bit to avoid race conditions
    await new Promise(resolve => setTimeout(resolve, 100));
    
    // Ensure users still exist (in case another test deleted them)
    for (const userId of [user1Id, user2Id]) {
      await db.user.upsert({
        where: { id: userId },
        update: {},
        create: {
          id: userId,
          email: `${userId}@example.com`,
          name: `Test User ${userId}`,
        },
      });
    }
    
    // Wait for users to be fully committed
    await new Promise(resolve => setTimeout(resolve, 100));
    
    // Clean up only THIS test's data - don't delete all flashcards
    await db.generatedFlashcard.deleteMany({
      where: {
        ref: {
          in: [sharedRef, user1OnlyRef, user2OnlyRef],
        },
      },
    });
    await db.studiedText.deleteMany({
      where: {
        userId: {
          in: [user1Id, user2Id],
        },
      },
    });
    await db.points.deleteMany({
      where: {
        userId: {
          in: [user1Id, user2Id],
        },
      },
    });

    // Reset Level and Streak for both users
    for (const userId of [user1Id, user2Id]) {
      await db.level.upsert({
        where: { userId },
        update: { totalPoints: 0, currentLevel: 1 },
        create: {
          userId,
          totalPoints: 0,
          currentLevel: 1,
        },
      });

      await db.streak.upsert({
        where: { userId },
        update: { currentStreak: 0, longestStreak: 0, lastStudyDate: null },
        create: { userId },
      });
    }
    
    // Wait again after cleanup
    await new Promise(resolve => setTimeout(resolve, 50));
  });

  afterAll(async () => {
    // Cleanup - don't delete users, they don't interfere between test runs
    await db.generatedFlashcard.deleteMany({
      where: {
        ref: {
          in: [sharedRef, user1OnlyRef, user2OnlyRef],
        },
      },
    });
    await db.studiedText.deleteMany({
      where: {
        userId: {
          in: [user1Id, user2Id],
        },
      },
    });
    await db.points.deleteMany({
      where: {
        userId: {
          in: [user1Id, user2Id],
        },
      },
    });
    await db.level.deleteMany({
      where: {
        userId: {
          in: [user1Id, user2Id],
        },
      },
    });
    await db.streak.deleteMany({
      where: {
        userId: {
          in: [user1Id, user2Id],
        },
      },
    });
    // Don't delete users - keep them for consistency
  });

  describe('Users can only see flashcards for sources they have studied', () => {
    it('should allow user to see flashcards for sources they studied', async () => {
      // User 1 adds and studies a source
      mockAuth.mockResolvedValue({
        user: { id: user1Id, email: 'user1@example.com' },
      });
      await addStudiedText({ ref: sharedRef });
      await generateFlashcardsForRef(sharedRef);

      // Get flashcards for sources user 1 has studied
      const user1StudiedRefs = await db.studiedText.findMany({
        where: { userId: user1Id },
        select: { ref: true },
      });

      const availableFlashcards = await db.generatedFlashcard.findMany({
        where: {
          ref: {
            in: user1StudiedRefs.map((s) => s.ref),
          },
        },
      });

      expect(availableFlashcards.length).toBeGreaterThan(0);
      availableFlashcards.forEach((flashcard) => {
        expect(flashcard.ref).toBe(sharedRef);
      });
    });

    it('should not show flashcards for sources user has not studied', async () => {
      // User 1 adds a source
      mockAuth.mockResolvedValue({
        user: { id: user1Id, email: 'user1@example.com' },
      });
      await addStudiedText({ ref: user1OnlyRef });
      await generateFlashcardsForRef(user1OnlyRef);

      // User 2 tries to get flashcards (but hasn't studied this source)
      mockAuth.mockResolvedValue({
        user: { id: user2Id, email: 'user2@example.com' },
      });

      const user2StudiedRefs = await db.studiedText.findMany({
        where: { userId: user2Id },
        select: { ref: true },
      });

      const availableFlashcards = await db.generatedFlashcard.findMany({
        where: {
          ref: {
            in: user2StudiedRefs.map((s) => s.ref),
          },
        },
      });

      // User 2 should not see flashcards for user1OnlyRef
      expect(availableFlashcards).toHaveLength(0);
    });

    it('should show shared flashcards to both users if both studied the source', async () => {
      // User 1 adds and studies source
      mockAuth.mockResolvedValue({
        user: { id: user1Id, email: 'user1@example.com' },
      });
      await addStudiedText({ ref: sharedRef });
      await generateFlashcardsForRef(sharedRef);

      // User 2 adds same source
      mockAuth.mockResolvedValue({
        user: { id: user2Id, email: 'user2@example.com' },
      });
      await addStudiedText({ ref: sharedRef });

      // Both users should see flashcards
      const user1StudiedRefs = await db.studiedText.findMany({
        where: { userId: user1Id },
        select: { ref: true },
      });

      const user1Flashcards = await db.generatedFlashcard.findMany({
        where: {
          ref: {
            in: user1StudiedRefs.map((s) => s.ref),
          },
        },
      });

      const user2StudiedRefs = await db.studiedText.findMany({
        where: { userId: user2Id },
        select: { ref: true },
      });

      const user2Flashcards = await db.generatedFlashcard.findMany({
        where: {
          ref: {
            in: user2StudiedRefs.map((s) => s.ref),
          },
        },
      });

      expect(user1Flashcards.length).toBeGreaterThan(0);
      expect(user2Flashcards.length).toBeGreaterThan(0);
      // They should see the same flashcards
      expect(user1Flashcards.length).toBe(user2Flashcards.length);
    });

    it('should only show flashcards from user-specific studied sources', async () => {
      // User 1 studies source A
      mockAuth.mockResolvedValue({
        user: { id: user1Id, email: 'user1@example.com' },
      });
      await addStudiedText({ ref: user1OnlyRef });
      await generateFlashcardsForRef(user1OnlyRef);

      // User 2 studies source B
      mockAuth.mockResolvedValue({
        user: { id: user2Id, email: 'user2@example.com' },
      });
      await addStudiedText({ ref: user2OnlyRef });
      await generateFlashcardsForRef(user2OnlyRef);

      // User 1 should only see flashcards for source A
      const user1StudiedRefs = await db.studiedText.findMany({
        where: { userId: user1Id },
        select: { ref: true },
      });

      const user1Flashcards = await db.generatedFlashcard.findMany({
        where: {
          ref: {
            in: user1StudiedRefs.map((s) => s.ref),
          },
        },
      });

      expect(user1Flashcards.every((f) => f.ref === user1OnlyRef)).toBe(true);

      // User 2 should only see flashcards for source B
      const user2StudiedRefs = await db.studiedText.findMany({
        where: { userId: user2Id },
        select: { ref: true },
      });

      const user2Flashcards = await db.generatedFlashcard.findMany({
        where: {
          ref: {
            in: user2StudiedRefs.map((s) => s.ref),
          },
        },
      });

      expect(user2Flashcards.every((f) => f.ref === user2OnlyRef)).toBe(true);
    });

    it('should update available flashcards when user adds new sources', async () => {
      mockAuth.mockResolvedValue({
        user: { id: user1Id, email: 'user1@example.com' },
      });

      // User initially has no sources
      let user1StudiedRefs = await db.studiedText.findMany({
        where: { userId: user1Id },
        select: { ref: true },
      });

      let availableFlashcards = await db.generatedFlashcard.findMany({
        where: {
          ref: {
            in: user1StudiedRefs.map((s) => s.ref),
          },
        },
      });

      expect(availableFlashcards).toHaveLength(0);

      // User adds first source
      await addStudiedText({ ref: user1OnlyRef });
      await generateFlashcardsForRef(user1OnlyRef);

      user1StudiedRefs = await db.studiedText.findMany({
        where: { userId: user1Id },
        select: { ref: true },
      });

      availableFlashcards = await db.generatedFlashcard.findMany({
        where: {
          ref: {
            in: user1StudiedRefs.map((s) => s.ref),
          },
        },
      });

      expect(availableFlashcards.length).toBeGreaterThan(0);

      // User adds second source
      await addStudiedText({ ref: sharedRef });
      await generateFlashcardsForRef(sharedRef);

      user1StudiedRefs = await db.studiedText.findMany({
        where: { userId: user1Id },
        select: { ref: true },
      });

      availableFlashcards = await db.generatedFlashcard.findMany({
        where: {
          ref: {
            in: user1StudiedRefs.map((s) => s.ref),
          },
        },
      });

      // Should now have flashcards from both sources
      const uniqueRefs = new Set(availableFlashcards.map((f) => f.ref));
      expect(uniqueRefs.size).toBe(2);
      expect(uniqueRefs.has(user1OnlyRef)).toBe(true);
      expect(uniqueRefs.has(sharedRef)).toBe(true);
    });
  });

  describe('Query patterns for flashcard access', () => {
    it('should efficiently query flashcards for user studied sources', async () => {
      mockAuth.mockResolvedValue({
        user: { id: user1Id, email: 'user1@example.com' },
      });

      // Add multiple sources for user
      await addStudiedText({ ref: 'Genesis 1:1' });
      await addStudiedText({ ref: 'Genesis 1:2' });
      await addStudiedText({ ref: 'Genesis 1:3' });

      await generateFlashcardsForRef('Genesis 1:1');
      await generateFlashcardsForRef('Genesis 1:2');
      await generateFlashcardsForRef('Genesis 1:3');

      // Single query to get all available flashcards
      const studiedRefs = await db.studiedText.findMany({
        where: { userId: user1Id },
        select: { ref: true },
      });

      const flashcards = await db.generatedFlashcard.findMany({
        where: {
          ref: {
            in: studiedRefs.map((s) => s.ref),
          },
        },
      });

      expect(flashcards.length).toBeGreaterThan(0);
      
      // All flashcards should be from studied refs
      const studiedRefSet = new Set(studiedRefs.map((s) => s.ref));
      flashcards.forEach((flashcard) => {
        expect(studiedRefSet.has(flashcard.ref)).toBe(true);
      });
    });

    it('should support pagination of user flashcards', async () => {
      mockAuth.mockResolvedValue({
        user: { id: user1Id, email: 'user1@example.com' },
      });

      // Add sources
      for (let i = 1; i <= 5; i++) {
        await addStudiedText({ ref: `Genesis 1:${i}` });
        await generateFlashcardsForRef(`Genesis 1:${i}`);
      }

      const studiedRefs = await db.studiedText.findMany({
        where: { userId: user1Id },
        select: { ref: true },
      });

      // Get first page (5 flashcards)
      const page1 = await db.generatedFlashcard.findMany({
        where: {
          ref: {
            in: studiedRefs.map((s) => s.ref),
          },
        },
        take: 5,
        skip: 0,
        orderBy: { generatedAt: 'desc' },
      });

      // Get second page (remaining flashcards)
      const page2 = await db.generatedFlashcard.findMany({
        where: {
          ref: {
            in: studiedRefs.map((s) => s.ref),
          },
        },
        take: 5,
        skip: 5,
        orderBy: { generatedAt: 'desc' },
      });

      expect(page1.length).toBeGreaterThan(0);
      expect(page2.length).toBeGreaterThanOrEqual(0);
      
      // Pages should not overlap
      const page1Ids = new Set(page1.map((f) => f.id));
      const page2Ids = new Set(page2.map((f) => f.id));
      page1Ids.forEach((id) => {
        expect(page2Ids.has(id)).toBe(false);
      });
    });
  });
});
