import { NextRequest, NextResponse } from "next/server";
import { unstable_cache } from "next/cache";
import { getUserStats, getCurrentFocus, getDailyWisdom, getWeeklyCalendar } from "~/server/gamification/service";
import { requireUser } from "~/server/auth-helpers";

export async function GET(request: NextRequest) {
  try {
    const user = await requireUser();

    const cachedData = await unstable_cache(
      async () => {
        const [stats, currentFocus, dailyWisdom, weeklyCalendar] = await Promise.all([
          getUserStats(user.id),
          getCurrentFocus(user.id),
          getDailyWisdom(),
          getWeeklyCalendar(user.id),
        ]);

        return {
          ...stats,
          currentFocus,
          dailyWisdom,
          weeklyCalendar,
        };
      },
      [`stats-${user.id}`],
      {
        revalidate: 60,
        tags: [`user-${user.id}`],
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
    console.error("Error fetching stats:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
