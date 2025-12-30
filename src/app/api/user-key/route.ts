import { NextResponse } from "next/server";
import { getUserKey } from "~/lib/user-session";

export async function GET() {
  const userKey = await getUserKey();
  return NextResponse.json({ userKey });
}
