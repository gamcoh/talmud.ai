import db from "~/server/db";
import type { Portion } from "~/lib/mock-data";
import { getSeedsForPortion } from "~/lib/flashcards/mock-bank";

type Grade = "Again" | "Hard" | "Good" | "Easy";

function toPrismaPortionType(type: Portion["type"]) {
  // matches prisma enum names
  return type;
}

export async function ensureFlashcardsForPortion(portion: Portion) {
  const portionType = toPrismaPortionType(portion.type);
  const portionLabel = portion.label;

  const existing = await db.flashcard.count({
    where: { portionType, portionLabel },
  });

  if (existing > 0) return;

  const seeds = getSeedsForPortion(portion);
  await db.flashcard.createMany({
    data: seeds.map((s) => ({
      portionType,
      portionLabel,
      prompt: s.prompt,
      answer: s.answer,
    })),
  });
}

export async function getDueQueue(portion: Portion, limit = 10) {
  await ensureFlashcardsForPortion(portion);

  const portionType = toPrismaPortionType(portion.type);
  const portionLabel = portion.label;

  // 1) due reviews first
  const due = await db.flashcardReview.findMany({
    where: {
      dueAt: { lte: new Date() },
      flashcard: { portionType, portionLabel },
    },
    include: { flashcard: true },
    orderBy: { dueAt: "asc" },
    take: limit,
  });

  const remaining = Math.max(0, limit - due.length);
  if (remaining === 0) return due;

  // 2) new cards (no review yet)
  const newCards = await db.flashcard.findMany({
    where: {
      portionType,
      portionLabel,
      reviews: { none: {} },
    },
    orderBy: { createdAt: "asc" },
    take: remaining,
  });

  // "materialize" initial reviews so the client can grade by reviewId
  const created = await Promise.all(
    newCards.map(async (c) => {
      const review = await db.flashcardReview.create({
        data: {
          flashcardId: c.id,
          dueAt: new Date(),
          intervalDays: 0,
          ease: 2.5,
          reps: 0,
        },
        include: { flashcard: true },
      });
      return review;
    }),
  );

  return [...due, ...created];
}

function scheduleNext({
  grade,
  reps,
  ease,
  intervalDays,
}: {
  grade: Grade;
  reps: number;
  ease: number;
  intervalDays: number;
}) {
  // minimal SM-2-ish; tuned for "game feel"
  let nextEase = ease;
  let nextReps = reps;
  let nextInterval = intervalDays;

  if (grade === "Again") {
    nextReps = 0;
    nextInterval = 0;
    nextEase = Math.max(1.3, ease - 0.2);
  } else {
    nextReps = reps + 1;

    const boost = grade === "Hard" ? -0.15 : grade === "Easy" ? 0.15 : 0;
    nextEase = Math.max(1.3, ease + boost);

    if (nextReps === 1) nextInterval = 1;
    else if (nextReps === 2) nextInterval = 3;
    else nextInterval = Math.max(1, Math.round(intervalDays * nextEase));
  }

  const dueAt = new Date();
  dueAt.setDate(dueAt.getDate() + nextInterval);

  return { dueAt, intervalDays: nextInterval, ease: nextEase, reps: nextReps };
}

export async function gradeReview(reviewId: string, grade: Grade) {
  const review = await db.flashcardReview.findUnique({
    where: { id: reviewId },
    include: { flashcard: true },
  });
  if (!review) throw new Error("Review not found");

  const next = scheduleNext({
    grade,
    reps: review.reps,
    ease: review.ease,
    intervalDays: review.intervalDays,
  });

  await db.flashcardReview.update({
    where: { id: reviewId },
    data: {
      ...next,
      lastGrade: grade,
      lastReviewedAt: new Date(),
    },
  });

  const pointsEarned =
    grade === "Again" ? 1 : grade === "Hard" ? 5 : grade === "Good" ? 10 : 15;

  return { pointsEarned };
}
