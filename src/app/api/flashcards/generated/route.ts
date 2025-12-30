import { NextResponse } from "next/server";
import { z } from "zod";
import { revalidatePath } from "next/cache";
import db from "~/server/db";
import { requireUser } from "~/server/auth-helpers";

/**
 * GET: Fetch generated flashcards for a user
 * Query params:
 * - limit: Number of flashcards to return (default 10)
 * - difficulty: Filter by difficulty (optional)
 */
export async function GET(request: Request) {
  try {
    const user = await requireUser();
    
    const { searchParams } = new URL(request.url);
    const limit = Math.min(50, Math.max(1, parseInt(searchParams.get("limit") ?? "10")));
    const difficulty = searchParams.get("difficulty");

    // Get flashcards the user hasn't completed yet
    const where = {
      isActive: true,
      userCompletions: {
        none: {
          userId: user.id,
        },
      },
    } as const;

    if (difficulty && ["EASY", "MEDIUM", "HARD"].includes(difficulty)) {
      (where as any).difficulty = difficulty as "EASY" | "MEDIUM" | "HARD";
    }

    // Fetch more flashcards than needed to allow for random selection
    const allFlashcards = await db.generatedFlashcard.findMany({
      where: where as any,
      take: limit * 3, // Fetch 3x more to have a good pool for randomization
      select: {
        id: true,
        ref: true,
        heRef: true,
        question: true,
        options: true,
        correctAnswer: true,
        difficulty: true,
        points: true,
      },
    });

    // Shuffle and take the requested limit
    const shuffled = allFlashcards
      .map(card => ({ card, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ card }) => card)
      .slice(0, limit);

    const flashcards = shuffled;

    return NextResponse.json({
      flashcards,
      count: flashcards.length,
    });
  } catch (error) {
    if (error instanceof Error && error.message === "Unauthorized") {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }
    console.error("Error fetching generated flashcards:", error);
    return NextResponse.json(
      { error: "Failed to fetch flashcards" },
      { status: 500 }
    );
  }
}

const SubmitSchema = z.object({
  flashcardId: z.string().min(1),
  selectedAnswer: z.string().min(1),
});

/**
 * POST: Submit an answer to a flashcard
 * Body:
 * - flashcardId: ID of the flashcard
 * - selectedAnswer: The answer the user selected
 */
export async function POST(request: Request) {
  try {
    const user = await requireUser();
    
    const json = await request.json();
    const validation = SubmitSchema.safeParse(json);

    if (!validation.success) {
      return NextResponse.json(
        { error: "Invalid request body", details: validation.error },
        { status: 400 }
      );
    }

    const { flashcardId, selectedAnswer } = validation.data;

    // Get the flashcard
    const flashcard = await db.generatedFlashcard.findUnique({
      where: { id: flashcardId },
    });

    if (!flashcard) {
      return NextResponse.json(
        { error: "Flashcard not found" },
        { status: 404 }
      );
    }

    // Check if already completed
    const existing = await db.userFlashcardCompletion.findUnique({
      where: {
        userId_flashcardId: {
          userId: user.id,
          flashcardId,
        },
      },
    });

    if (existing) {
      return NextResponse.json(
        { error: "Flashcard already completed" },
        { status: 400 }
      );
    }

    // Check if answer is correct
    const wasCorrect = selectedAnswer === flashcard.correctAnswer;
    const pointsEarned = wasCorrect ? flashcard.points : 0;

    // Create completion record
    await db.userFlashcardCompletion.create({
      data: {
        userId: user.id,
        flashcardId,
        wasCorrect,
        pointsEarned,
      },
    });

    // Award points if correct
    let updatedLevel = null;
    if (wasCorrect && pointsEarned > 0) {
      await db.points.create({
        data: {
          userId: user.id,
          action: "COMPLETE_FLASHCARD",
          points: pointsEarned,
          metadata: {
            ref: flashcard.ref,
            difficulty: flashcard.difficulty,
            flashcardId,
          },
        },
      });

      // Update user's level and get the new total
      updatedLevel = await db.level.upsert({
        where: { userId: user.id },
        create: {
          userId: user.id,
          currentLevel: 1,
          totalPoints: pointsEarned,
        },
        update: {
          totalPoints: { increment: pointsEarned },
        },
      });
    }

    // Revalidate dashboard cache
    revalidatePath("/dashboard");

    return NextResponse.json({
      success: true,
      wasCorrect,
      correctAnswer: flashcard.correctAnswer,
      pointsEarned,
      difficulty: flashcard.difficulty,
      newTotalPoints: updatedLevel?.totalPoints,
      currentLevel: updatedLevel?.currentLevel,
    });
  } catch (error) {
    if (error instanceof Error && error.message === "Unauthorized") {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }
    console.error("Error submitting flashcard answer:", error);
    return NextResponse.json(
      { error: "Failed to submit answer" },
      { status: 500 }
    );
  }
}
