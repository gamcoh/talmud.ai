import { NextRequest, NextResponse } from "next/server";
import { getUserStats, getCurrentFocus, getDailyWisdom, getWeeklyCalendar } from "~/server/gamification/service";

export async function GET(request: NextRequest) {
  const userKey = request.headers.get("x-user-key");

  if (!userKey) {
    return NextResponse.json({ error: "User key required" }, { status: 400 });
  }

  try {
    const [stats, currentFocus, dailyWisdom, weeklyCalendar] = await Promise.all([
      getUserStats(userKey),
      getCurrentFocus(userKey),
      getDailyWisdom(),
      getWeeklyCalendar(userKey),
    ]);

    return NextResponse.json({
      ...stats,
      currentFocus,
      dailyWisdom,
      weeklyCalendar,
    });
  } catch (error) {
    console.error("Error fetching stats:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
