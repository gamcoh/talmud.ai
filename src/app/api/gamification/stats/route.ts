import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { unstable_cache } from "next/cache";
import { getUserStats, getCurrentFocus, getDailyWisdom, getWeeklyCalendar } from "~/server/gamification/service";

const headersSchema = z.object({
  "x-user-key": z.string().min(1),
});

export async function GET(request: NextRequest) {
  const userKey = request.headers.get("x-user-key");

  const validation = headersSchema.safeParse({ "x-user-key": userKey });
  if (!validation.success) {
    return NextResponse.json({ error: "User key required" }, { status: 400 });
  }

  try {
    const cachedData = await unstable_cache(
      async () => {
        const [stats, currentFocus, dailyWisdom, weeklyCalendar] = await Promise.all([
          getUserStats(validation.data["x-user-key"]),
          getCurrentFocus(validation.data["x-user-key"]),
          getDailyWisdom(),
          getWeeklyCalendar(validation.data["x-user-key"]),
        ]);

        return {
          ...stats,
          currentFocus,
          dailyWisdom,
          weeklyCalendar,
        };
      },
      [`stats-${validation.data["x-user-key"]}`],
      {
        revalidate: 60,
        tags: [`user-${validation.data["x-user-key"]}`],
      }
    )();

    return NextResponse.json(cachedData);
  } catch (error) {
    console.error("Error fetching stats:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
