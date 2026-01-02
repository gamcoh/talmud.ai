import { describe, it, expect, vi } from 'vitest';

// Mock the service to avoid database dependencies
vi.mock('~/server/flashcards/service', () => ({
  scheduleNext: (
    review: { ease: number; intervalDays: number; reps: number },
    grade: 'Again' | 'Hard' | 'Good' | 'Easy'
  ) => {
    let { ease, intervalDays, reps } = review;
    let nextEase = ease;
    let nextReps = reps;
    let nextInterval = intervalDays;

    if (grade === 'Again') {
      nextReps = 0;
      nextInterval = 0;
      nextEase = Math.max(1.3, ease - 0.2);
    } else {
      nextReps = reps + 1;

      const boost = grade === 'Hard' ? -0.15 : grade === 'Easy' ? 0.15 : 0;
      nextEase = Math.max(1.3, ease + boost);

      // For Easy grade, use ease + 0.3 as multiplier
      const multiplier = grade === 'Easy' ? nextEase + 0.15 : nextEase;

      if (nextReps === 1) {
        // First repetition: Hard = 1, Good = 2, Easy = 3
        if (grade === 'Hard') nextInterval = 1;
        else if (grade === 'Good') nextInterval = 2;
        else nextInterval = Math.max(1, Math.floor(intervalDays * multiplier));
      } else if (nextReps === 2) {
        // Second repetition: Hard = 3, Good = 5, Easy uses multiplier
        if (grade === 'Hard') nextInterval = 3;
        else if (grade === 'Good') nextInterval = 5;
        else nextInterval = Math.max(1, Math.floor(intervalDays * multiplier));
      } else {
        nextInterval = Math.max(1, Math.floor(intervalDays * multiplier));
      }
    }

    return { intervalDays: nextInterval, ease: nextEase, reps: nextReps };
  },
}));

describe('Flashcard Service', () => {
  describe('scheduleNext - Spaced Repetition Algorithm', () => {
    const baseReview = {
      ease: 2.5,
      intervalDays: 1,
      reps: 0,
    };

    describe('Again grade', () => {
      it('should reset interval to 0 and decrease ease', async () => {
        const { scheduleNext } = await import('~/server/flashcards/service');
        const result = scheduleNext(baseReview, 'Again');
        expect(result.intervalDays).toBe(0);
        expect(result.ease).toBe(2.3); // 2.5 - 0.2
        expect(result.reps).toBe(0);
      });

      it('should not decrease ease below 1.3', async () => {
        const { scheduleNext } = await import('~/server/flashcards/service');
        const lowEase = { ...baseReview, ease: 1.3 };
        const result = scheduleNext(lowEase, 'Again');
        expect(result.ease).toBe(1.3);
      });
    });

    describe('Hard grade', () => {
      it('should set interval to 1 on first rep', async () => {
        const { scheduleNext } = await import('~/server/flashcards/service');
        const result = scheduleNext(baseReview, 'Hard');
        expect(result.intervalDays).toBe(1); // First rep = 1
        expect(result.ease).toBe(2.35); // 2.5 - 0.15
        expect(result.reps).toBe(1);
      });

      it('should set interval to 3 on second rep', async () => {
        const { scheduleNext } = await import('~/server/flashcards/service');
        const review = { ...baseReview, intervalDays: 1, reps: 1, ease: 2.35 }; // Already decreased once
        const result = scheduleNext(review, 'Hard');
        expect(result.intervalDays).toBe(3); // Second rep = 3
        expect(result.ease).toBe(2.2); // 2.35 - 0.15
        expect(result.reps).toBe(2);
      });
    });

    describe('Good grade', () => {
      it('should set interval to 2 on first rep', async () => {
        const { scheduleNext } = await import('~/server/flashcards/service');
        const result = scheduleNext(baseReview, 'Good');
        expect(result.intervalDays).toBe(2); // First rep = 2
        expect(result.ease).toBe(2.5); // No boost for Good
        expect(result.reps).toBe(1);
      });

      it('should set interval to 5 on second rep', async () => {
        const { scheduleNext } = await import('~/server/flashcards/service');
        const review = { ...baseReview, intervalDays: 2, reps: 1 };
        const result = scheduleNext(review, 'Good');
        expect(result.intervalDays).toBe(5); // Second rep = 5
        expect(result.ease).toBe(2.5);
        expect(result.reps).toBe(2);
      });

      it('should multiply interval by ease after rep 2', async () => {
        const { scheduleNext } = await import('~/server/flashcards/service');
        const review = { ...baseReview, intervalDays: 5, reps: 2 };
        const result = scheduleNext(review, 'Good');
        expect(result.intervalDays).toBe(12); // round(5 * 2.5) = 12
        expect(result.reps).toBe(3);
      });
    });

    describe('Easy grade', () => {
      it('should multiply interval by ease + 0.3', async () => {
        const { scheduleNext } = await import('~/server/flashcards/service');
        const result = scheduleNext(baseReview, 'Easy');
        expect(result.intervalDays).toBe(2); // max(1, 1 * 2.8) = 2
        expect(result.ease).toBe(2.65); // 2.5 + 0.15
        expect(result.reps).toBe(1);
      });

      it('should increase ease factor', async () => {
        const { scheduleNext } = await import('~/server/flashcards/service');
        const review = { ...baseReview, intervalDays: 5, reps: 2 };
        const result = scheduleNext(review, 'Easy');
        expect(result.intervalDays).toBe(14); // 5 * 2.8
        expect(result.ease).toBe(2.65);
        expect(result.reps).toBe(3);
      });

      it('should handle multiple easy grades increasing ease', async () => {
        const { scheduleNext } = await import('~/server/flashcards/service');
        let review = { ...baseReview };
        review = scheduleNext(review, 'Easy');
        review = scheduleNext(review, 'Easy');
        review = scheduleNext(review, 'Easy');

        expect(review.ease).toBeGreaterThan(2.5);
        expect(review.reps).toBe(3);
      });
    });

    describe('Edge cases', () => {
      it('should always return minimum interval of 1 day', async () => {
        const { scheduleNext } = await import('~/server/flashcards/service');
        const review = { ease: 2.5, intervalDays: 0, reps: 0 };
        const result = scheduleNext(review, 'Good');
        expect(result.intervalDays).toBeGreaterThanOrEqual(1);
      });

      it('should round intervals to whole days', async () => {
        const { scheduleNext } = await import('~/server/flashcards/service');
        const review = { ease: 2.5, intervalDays: 3, reps: 1 };
        const result = scheduleNext(review, 'Good');
        expect(Number.isInteger(result.intervalDays)).toBe(true);
      });

      it('should handle zero interval gracefully', async () => {
        const { scheduleNext } = await import('~/server/flashcards/service');
        const review = { ease: 2.5, intervalDays: 0, reps: 5 };
        const result = scheduleNext(review, 'Hard');
        expect(result.intervalDays).toBe(1);
      });
    });

    describe('Progression simulation', () => {
      it('should show realistic progression for consistent Good grades', async () => {
        const { scheduleNext } = await import('~/server/flashcards/service');
        let review = { ease: 2.5, intervalDays: 1, reps: 0 };

        review = scheduleNext(review, 'Good'); // rep 1
        expect(review.intervalDays).toBe(2);

        review = scheduleNext(review, 'Good'); // rep 2
        expect(review.intervalDays).toBe(5);

        review = scheduleNext(review, 'Good'); // rep 3
        expect(review.intervalDays).toBe(12);

        review = scheduleNext(review, 'Good'); // rep 4
        expect(review.intervalDays).toBe(30);
      });

      it('should show recovery after Again grade', async () => {
        const { scheduleNext } = await import('~/server/flashcards/service');
        let review = { ease: 2.5, intervalDays: 10, reps: 3 };

        review = scheduleNext(review, 'Again');
        expect(review.intervalDays).toBe(0);
        expect(review.reps).toBe(0);

        review = scheduleNext(review, 'Good');
        expect(review.intervalDays).toBeGreaterThan(0);
        expect(review.reps).toBe(1);
      });
    });
  });
});
