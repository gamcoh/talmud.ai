import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = (searchParams.get("query") ?? "").trim();
  if (!query) return NextResponse.json({ error: "Missing query" }, { status: 400 });

  const url = `https://www.sefaria.org/api/v3/texts/${encodeURIComponent(query)}`;
  const res = await fetch(url, {
    // keep it simple; avoid caching user-driven searches
    cache: "no-store",
    headers: { accept: "application/json" },
  });

  const text = await res.text();
  return new NextResponse(text, {
    status: res.status,
    headers: { "content-type": res.headers.get("content-type") ?? "application/json" },
  });
}
