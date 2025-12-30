import db from "~/server/db";
import { generateFlashcardsFromText, getPointsForDifficulty } from "./openai";
import { fetchTextForFlashcards, normalizeRef } from "./sefaria-service";

/**
 * Main service for generating AI flashcards from studied texts
 */

/**
 * Get unique refs from studied texts that need flashcard generation
 * Only returns refs that haven't been processed or failed
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

  // Check which ones don't have flashcards or generation jobs
  let existingJobRefs = new Set<string>();
  try {
    if (db && (db as any).flashcardGenerationJob && typeof (db as any).flashcardGenerationJob.findMany === "function") {
      const existingJobs = await (db as any).flashcardGenerationJob.findMany({
        where: {
          ref: { in: refs },
          status: { in: ["COMPLETED", "PROCESSING"] },
        },
        select: { ref: true },
      });
      existingJobRefs = new Set(existingJobs.map((j: any) => j.ref));
    } else {
      console.warn("Prisma model flashcardGenerationJob not available on db client; skipping existing job check.");
    }
  } catch (err) {
    console.error("Error checking existing FlashcardGenerationJob records:", err);
  }
  const pendingRefs = refs.filter((ref) => !existingJobRefs.has(ref));

  return pendingRefs.slice(0, limit);
}

/**
 * Generate flashcards for a single ref
 */
export async function generateFlashcardsForRef(ref: string): Promise<{
  success: boolean;
  flashcardsCreated: number;
  error?: string;
}> {
  const normalizedRef = normalizeRef(ref);

  try {
    // Create or update job record (guard if Prisma model is missing)
    const jobModel = (db as any).flashcardGenerationJob;
    let job: any = null;
    if (jobModel && typeof jobModel.findUnique === "function") {
      job = await jobModel.findUnique({ where: { ref: normalizedRef } });

      if (!job) {
        job = await jobModel.create({
          data: {
            ref: normalizedRef,
            status: "PROCESSING",
            attempts: 1,
          },
        });
      } else {
        job = await jobModel.update({
          where: { ref: normalizedRef },
          data: {
            status: "PROCESSING",
            attempts: { increment: 1 },
          },
        });
      }
    } else {
      console.warn("Prisma model flashcardGenerationJob not available; skipping job tracking.");
    }

    // Get the studied text to find heRef
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

    // Save flashcards to database (guard if Prisma model is missing)
    const genModel = (db as any).generatedFlashcard;
    if (!genModel || typeof genModel.create !== "function") {
      throw new Error("Prisma model generatedFlashcard not available on db client; cannot persist generated flashcards");
    }

    const createdFlashcards = await Promise.all(
      questions.map((q) =>
        genModel.create({
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

    // Mark job as completed (only if job model exists)
    const jobModelComplete = (db as any).flashcardGenerationJob;
    if (jobModelComplete && typeof jobModelComplete.update === "function") {
      await jobModelComplete.update({
        where: { ref: normalizedRef },
        data: {
          status: "COMPLETED",
          completedAt: new Date(),
        },
      });
    }

    console.log(`✅ Generated ${createdFlashcards.length} flashcards for ${ref}`);

    return {
      success: true,
      flashcardsCreated: createdFlashcards.length,
    };
  } catch (error) {
    console.error(`❌ Error generating flashcards for ${ref}:`, error);

    // Mark job as failed (only if job model exists)
    const jobModelFailed = (db as any).flashcardGenerationJob;
    try {
      if (jobModelFailed && typeof jobModelFailed.update === "function") {
        await jobModelFailed.update({
          where: { ref: normalizedRef },
          data: {
            status: "FAILED",
            error: error instanceof Error ? error.message : String(error),
            completedAt: new Date(),
          },
        });
      }
    } catch (e) {
      // ignore
    }

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
