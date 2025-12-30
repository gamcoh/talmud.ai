import { NextResponse } from "next/server";
import { batchGenerateFlashcards } from "~/server/ai/flashcard-generator";
import { env } from "~/env";

/**
 * Cron job endpoint for generating flashcards from newly added sources
 * Should be called nightly (e.g., via Vercel Cron, GitHub Actions, or external cron service)
 * 
 * Secure this endpoint with a CRON_SECRET environment variable
 * Example: https://yourdomain.com/api/cron/generate-flashcards?secret=YOUR_SECRET
 */
export async function GET(request: Request) {
  try {
    // Security: Check for cron secret
    const { searchParams } = new URL(request.url);
    const secret = searchParams.get("secret");

    if (env.CRON_SECRET && secret !== env.CRON_SECRET) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    console.log("🚀 Starting flashcard generation cron job");

    // Generate flashcards for up to 20 refs per run
    const result = await batchGenerateFlashcards(20);

    console.log("✅ Cron job completed:", result);

    return NextResponse.json({
      success: true,
      message: "Flashcard generation completed",
      ...result,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("❌ Cron job error:", error);

    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : String(error),
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    );
  }
}

// Also support POST method for flexibility
export async function POST(request: Request) {
  return GET(request);
}
