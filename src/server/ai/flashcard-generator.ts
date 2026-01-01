import db from "~/server/db";
import { generateFlashcardsFromText, getPointsForDifficulty } from "./openai";
import { fetchTextForFlashcards, normalizeRef } from "./sefaria-service";

/**
 * Main service for generating AI flashcards from studied texts
 */

/**
 * Get unique refs from studied texts that need flashcard generation
 * Only returns refs that don't already have flashcards
 */
export async function getPendingRefsForGeneration(limit = 50): Promise<string[]> {
  // Get distinct refs from StudiedText table
  const studiedTexts = await db.studiedText.findMany({
    select: { ref: true },
    distinct: ["ref"],
    orderBy: { createdAt: "desc" },
    take: limit * 2, // Get more than needed to filter
  });

  const refs = studiedTexts.map((t) => normalizeRef(t.ref));

  // Check which ones already have flashcards generated
  const existingFlashcards = await db.generatedFlashcard.findMany({
    where: {
      ref: { in: refs },
    },
    select: { ref: true },
    distinct: ["ref"],
  });

  const existingRefs = new Set(existingFlashcards.map((f) => f.ref));
  const pendingRefs = refs.filter((ref) => !existingRefs.has(ref));

  return pendingRefs.slice(0, limit);
}

/**
 * Generate flashcards for a single ref (shared across all users who studied it)
 */
export async function generateFlashcardsForRef(ref: string): Promise<{
  success: boolean;
  flashcardsCreated: number;
  error?: string;
}> {
  const normalizedRef = normalizeRef(ref);

  try {
    // Get a studied text to find heRef (any user's version is fine)
    const studiedText = await db.studiedText.findFirst({
      where: { ref },
      select: { heRef: true },
    });

    // Fetch text content from Sefaria
    const { textContent, contextText, actualRef, actualHeRef } = await fetchTextForFlashcards(
      ref,
      studiedText?.heRef ?? null
    );

    // Generate questions using OpenAI
    const questions = await generateFlashcardsFromText(
      actualRef,
      actualHeRef ?? null,
      textContent,
      contextText
    );

    // Save flashcards to database (shared across all users)
    const createdFlashcards = await Promise.all(
      questions.map((q) =>
        db.generatedFlashcard.create({
          data: {
            ref: normalizedRef,
            heRef: actualHeRef ?? null,
            question: q.question,
            options: q.options,
            correctAnswer: q.correctAnswer,
            difficulty: q.difficulty,
            points: getPointsForDifficulty(q.difficulty),
            contextText: contextText ?? null,
          },
        })
      )
    );

    console.log(`✅ Generated ${createdFlashcards.length} flashcards for ref ${ref}`);

    return {
      success: true,
      flashcardsCreated: createdFlashcards.length,
    };
  } catch (error) {
    console.error(`❌ Error generating flashcards for ref ${ref}:`, error);

    return {
      success: false,
      flashcardsCreated: 0,
      error: error instanceof Error ? error.message : String(error),
    };
  }
}

/**
 * Batch process multiple refs for flashcard generation
 * Used by the cron job
 */
export async function batchGenerateFlashcards(
  batchSize = 10
): Promise<{
  processed: number;
  succeeded: number;
  failed: number;
  errors: Array<{ ref: string; error: string }>;
}> {
  const pendingRefs = await getPendingRefsForGeneration(batchSize);

  if (pendingRefs.length === 0) {
    console.log("No pending refs for flashcard generation");
    return { processed: 0, succeeded: 0, failed: 0, errors: [] };
  }

  console.log(`Starting batch generation for ${pendingRefs.length} refs`);

  const errors: Array<{ ref: string; error: string }> = [];
  let succeeded = 0;

  // Process refs sequentially to avoid rate limiting
  for (const ref of pendingRefs) {
    const result = await generateFlashcardsForRef(ref);

    if (result.success) {
      succeeded++;
    } else {
      errors.push({ ref, error: result.error ?? "Unknown error" });
    }

    // Small delay to avoid rate limiting
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }

  return {
    processed: pendingRefs.length,
    succeeded,
    failed: errors.length,
    errors,
  };
}
