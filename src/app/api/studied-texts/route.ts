import { NextRequest, NextResponse } from "next/server";
import { prisma } from "~/server/db";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const userKey = searchParams.get("userKey");
  const page = Math.max(1, parseInt(searchParams.get("page") ?? "1", 10));
  const limit = Math.min(100, Math.max(1, parseInt(searchParams.get("limit") ?? "20", 10)));

  if (!userKey) {
    return NextResponse.json({ items: [], hasMore: false });
  }

  const skip = (page - 1) * limit;

  const [items, totalCount] = await Promise.all([
    prisma.studiedText.findMany({
      where: { userKey },
      orderBy: { createdAt: "desc" },
      skip,
      take: limit + 1, // fetch one extra to detect if more exist
    }),
    prisma.studiedText.count({
      where: { userKey },
    }),
  ]);

  const hasMore = items.length > limit;
  const returnItems = hasMore ? items.slice(0, limit) : items;

  return NextResponse.json({ items: returnItems, hasMore, totalCount });
}

export async function POST(req: Request) {
  const body = (await req.json().catch(() => null)) as
    | {
        userKey?: string;
        ref?: string;
        heRef?: string | null;
        url?: string | null;
        title?: string | null;
        snippet?: string | null;
      }
    | null;

  const userKey = (body?.userKey ?? "").trim();
  const ref = (body?.ref ?? "").trim();
  if (!userKey || !ref) {
    return NextResponse.json({ error: "Missing userKey or ref" }, { status: 400 });
  }

  const created = await prisma.studiedText.upsert({
    where: { userKey_ref: { userKey, ref } },
    update: {
      heRef: body?.heRef ?? undefined,
      url: body?.url ?? undefined,
      title: body?.title ?? undefined,
      snippet: body?.snippet ?? undefined,
    },
    create: {
      userKey,
      ref,
      heRef: body?.heRef ?? null,
      url: body?.url ?? null,
      title: body?.title ?? null,
      snippet: body?.snippet ?? null,
    },
  });

  return NextResponse.json({ item: created });
}
