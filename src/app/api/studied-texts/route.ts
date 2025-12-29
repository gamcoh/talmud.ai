import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { unstable_cache, revalidateTag } from "next/cache";
import { prisma } from "~/server/db";

const getSchema = z.object({
  userKey: z.string().min(1),
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(100).default(20),
});

const postSchema = z.object({
  userKey: z.string().min(1),
  ref: z.string().min(1),
  heRef: z.string().nullish(),
  url: z.string().url().nullish().or(z.literal("")).transform(v => v || null),
  title: z.string().nullish(),
  snippet: z.string().nullish(),
});

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  
  const validation = getSchema.safeParse({
    userKey: searchParams.get("userKey"),
    page: searchParams.get("page"),
    limit: searchParams.get("limit"),
  });

  if (!validation.success) {
    return NextResponse.json(
      { error: "Invalid parameters", details: validation.error.issues },
      { status: 400 }
    );
  }

  const { userKey, page, limit } = validation.data;

  try {
    const cachedData = await unstable_cache(
      async () => {
        const skip = (page - 1) * limit;
        const [items, totalCount] = await Promise.all([
          prisma.studiedText.findMany({
            where: { userKey },
            orderBy: { createdAt: "desc" },
            skip,
            take: limit + 1,
          }),
          prisma.studiedText.count({ where: { userKey } }),
        ]);

        const hasMore = items.length > limit;
        return {
          items: hasMore ? items.slice(0, limit) : items,
          hasMore,
          totalCount,
        };
      },
      [`studied-${userKey}-${page}`],
      {
        revalidate: 30,
        tags: [`user-${userKey}`, "studied-texts"],
      }
    )();

    return NextResponse.json(cachedData);
  } catch (error) {
    console.error("Error fetching studied texts:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const validation = postSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(
      { error: "Invalid data", details: validation.error.issues },
      { status: 400 }
    );
  }

  const data = validation.data;

  try {
    const created = await prisma.studiedText.upsert({
      where: { userKey_ref: { userKey: data.userKey, ref: data.ref } },
      update: {
        heRef: data.heRef,
        url: data.url,
        title: data.title,
        snippet: data.snippet,
      },
      create: {
        userKey: data.userKey,
        ref: data.ref,
        heRef: data.heRef,
        url: data.url,
        title: data.title,
        snippet: data.snippet,
      },
    });

    revalidateTag(`user-${data.userKey}`, "max");
    revalidateTag("studied-texts", "max");

    return NextResponse.json({ item: created }, { status: 201 });
  } catch (error) {
    console.error("Error creating studied text:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
