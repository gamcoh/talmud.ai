import { NextResponse } from "next/server";
import { z } from "zod";
import { gradeReview } from "~/server/flashcards/service";

const BodySchema = z.object({
  reviewId: z.string().min(1),
  grade: z.enum(["Again", "Hard", "Good", "Easy"]),
});

export async function POST(req: Request) {
  const json = (await req.json().catch(() => null)) as unknown;
  const body = BodySchema.safeParse(json);
  if (!body.success) {
    return NextResponse.json({ error: "Invalid body" }, { status: 400 });
  }

  const result = await gradeReview(body.data.reviewId, body.data.grade);
  return NextResponse.json(result);
}
