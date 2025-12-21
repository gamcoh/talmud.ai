import { NextResponse } from "next/server";
import { prisma } from "~/server/db";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const userKey = (searchParams.get("userKey") ?? "").trim();
  if (!userKey) return NextResponse.json({ error: "Missing userKey" }, { status: 400 });

  const items = await prisma.studiedText.findMany({
    where: { userKey },
    orderBy: { createdAt: "desc" },
    take: 30,
  });

  return NextResponse.json({ items });
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
