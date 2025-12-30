import { NextResponse } from "next/server";
import { z } from "zod";
import { getDueQueue } from "~/server/flashcards/service";

const PortionSchema = z.object({
  type: z.enum(["Parasha", "Daf", "Perek"]),
  label: z.string().min(1),
});

export async function GET(req: Request) {
  const url = new URL(req.url);
  const raw = url.searchParams.get("portion");
  if (!raw) return NextResponse.json({ error: "Missing portion" }, { status: 400 });

  let parsedJson: unknown;
  try {
    parsedJson = JSON.parse(raw);
  } catch {
    return NextResponse.json({ error: "Invalid portion JSON" }, { status: 400 });
  }

  const portion = PortionSchema.safeParse(parsedJson);
  if (!portion.success) {
    return NextResponse.json({ error: "Invalid portion" }, { status: 400 });
  }

  const limit = Math.min(
    25,
    Math.max(1, Number(url.searchParams.get("limit") ?? "10")),
  );

  const queue = await getDueQueue(portion.data as any, limit);

  return NextResponse.json({
    items: queue.map((r) => ({
      reviewId: r.id,
      prompt: r.flashcard.prompt,
      answer: r.flashcard.answer,
      portion: { type: r.flashcard.portionType, label: r.flashcard.portionLabel },
    })),
  });
}
