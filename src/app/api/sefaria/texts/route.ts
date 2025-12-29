import { NextResponse } from "next/server";
import { z } from "zod";

const querySchema = z.object({
  query: z.string().min(1).max(500),
});

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  
  const validation = querySchema.safeParse({
    query: searchParams.get("query"),
  });

  if (!validation.success) {
    return NextResponse.json(
      { error: "Missing or invalid query parameter" },
      { status: 400 }
    );
  }

  const { query } = validation.data;
  
  try {
    const url = `https://www.sefaria.org/api/v3/texts/${encodeURIComponent(query)}`;
    const res = await fetch(url, {
      next: { revalidate: 3600 },
      headers: { accept: "application/json" },
      signal: AbortSignal.timeout(5000),
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: `Sefaria API returned ${res.status}` },
        { status: res.status }
      );
    }

    const text = await res.text();
    return new NextResponse(text, {
      status: 200,
      headers: { 
        "content-type": res.headers.get("content-type") ?? "application/json",
        "cache-control": "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    });
  } catch (error) {
    console.error("Sefaria API error:", error);
    return NextResponse.json(
      { error: "Failed to fetch from Sefaria" },
      { status: 500 }
    );
  }
}
