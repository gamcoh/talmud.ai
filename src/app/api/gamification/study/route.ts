import { NextRequest, NextResponse } from "next/server";
import {
  recordStudySession,
  awardPoints,
  updateGoalProgress,
} from "~/server/gamification/service";
import { GoalType } from "~/generated/prisma";

export async function POST(request: NextRequest) {
  const userKey = request.headers.get("x-user-key");

  if (!userKey) {
    return NextResponse.json({ error: "User key required" }, { status: 400 });
  }

  try {
    const body = await request.json();
    const { type, ref } = body as { type: "text" | "flashcard"; ref?: string };

    const session = await recordStudySession(userKey, {
      textsRead: type === "text" ? 1 : 0,
      flashcardsReviewed: type === "flashcard" ? 1 : 0,
    });

    // Award points for the action
    const pointResult = await awardPoints(
      userKey,
      type === "text" ? "STUDY_TEXT" : "COMPLETE_FLASHCARD",
      ref ? { ref } : undefined
    );

    // Update goal progress
    await updateGoalProgress(
      userKey,
      type === "text" ? GoalType.TEXTS_STUDIED : GoalType.FLASHCARDS_REVIEWED,
      1
    );

    return NextResponse.json({
      session,
      points: pointResult,
    });
  } catch (error) {
    console.error("Error recording study:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
