import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { unstable_cache, revalidatePath } from "next/cache";
import { prisma } from "~/server/db";
import { requireUser } from "~/server/auth-helpers";

const getSchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(100).default(20),
});

const postSchema = z.object({
  ref: z.string().min(1),
  heRef: z.string().nullish(),
  url: z.string().url().nullish().or(z.literal("")).transform(v => v || null),
  title: z.string().nullish(),
  snippet: z.string().nullish(),
});

export async function GET(req: NextRequest) {
  try {
    const user = await requireUser();
    const { searchParams } = new URL(req.url);
    
    const validation = getSchema.safeParse({
      page: searchParams.get("page"),
      limit: searchParams.get("limit"),
    });

    if (!validation.success) {
      return NextResponse.json(
        { error: "Invalid parameters", details: validation.error.issues },
        { status: 400 }
      );
    }

    const { page, limit } = validation.data;

    const cachedData = await unstable_cache(
      async () => {
        const skip = (page - 1) * limit;
        const [items, totalCount] = await Promise.all([
          prisma.studiedText.findMany({
            where: { userId: user.id },
            orderBy: { createdAt: "desc" },
            skip,
            take: limit + 1,
          }),
          prisma.studiedText.count({ where: { userId: user.id } }),
        ]);

        const hasMore = items.length > limit;
        return {
          items: hasMore ? items.slice(0, limit) : items,
          hasMore,
          totalCount,
        };
      },
      [`studied-${user.id}-${page}`],
      {
        revalidate: 30,
        tags: [`user-${user.id}`, "studied-texts"],
      }
    )();

    return NextResponse.json(cachedData);
  } catch (error) {
    if (error instanceof Error && error.message === "Unauthorized") {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }
    console.error("Error fetching studied texts:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const user = await requireUser();
    
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

    const created = await prisma.studiedText.upsert({
      where: { userId_ref: { userId: user.id, ref: data.ref } },
      update: {
        heRef: data.heRef,
        url: data.url,
        title: data.title,
        snippet: data.snippet,
      },
      create: {
        userId: user.id,
        ref: data.ref,
        heRef: data.heRef,
        url: data.url,
        title: data.title,
        snippet: data.snippet,
      },
    });

    revalidatePath("/dashboard");

    return NextResponse.json({ item: created }, { status: 201 });
  } catch (error) {
    if (error instanceof Error && error.message === "Unauthorized") {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }
    console.error("Error creating studied text:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
