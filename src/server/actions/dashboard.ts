"use server";

import { revalidatePath, unstable_cache } from "next/cache";
import { db } from "../db";
import { getUserStats, getCurrentFocus, getDailyWisdom, getWeeklyCalendar, awardPoints } from "../gamification/service";

export async function getDashboardData(userId: string) {
  return unstable_cache(
    async () => {
      const [stats, currentFocus, dailyWisdom, weeklyCalendar] = await Promise.all([
        getUserStats(userId),
        getCurrentFocus(userId),
        getDailyWisdom(),
        getWeeklyCalendar(userId),
      ]);

      return {
        stats,
        currentFocus,
        dailyWisdom,
        weeklyCalendar,
      };
    },
    [`dashboard-${userId}`],
    {
      tags: [`user-${userId}`, "dashboard"],
      revalidate: 60,
    }
  )();
}

export async function getStudiedTexts(userId: string, page = 1, limit = 20) {
  return unstable_cache(
    async () => {
      const skip = (page - 1) * limit;
      const [items, totalCount] = await Promise.all([
        db.studiedText.findMany({
          where: { userId },
          orderBy: { createdAt: "desc" },
          skip,
          take: limit + 1,
        }),
        db.studiedText.count({ where: { userId } }),
      ]);

      const hasMore = items.length > limit;
      return {
        items: hasMore ? items.slice(0, limit) : items,
        hasMore,
        totalCount,
      };
    },
    [`studied-${userId}-${page}`],
    {
      tags: [`user-${userId}`, "studied-texts"],
      revalidate: 30,
    }
  )();
}

export async function addStudiedText(data: {
  ref: string;
  heRef?: string | null;
  url?: string | null;
  title?: string | null;
  snippet?: string | null;
}) {
  const { auth } = await import("~/lib/auth");
  const session = await auth();
  
  if (!session?.user?.id) {
    throw new Error("Unauthorized");
  }

  const userId = session.user.id;

  const created = await db.studiedText.upsert({
    where: { userId_ref: { userId, ref: data.ref } },
    update: {
      heRef: data.heRef,
      url: data.url,
      title: data.title,
      snippet: data.snippet,
    },
    create: {
      userId,
      ...data,
    },
  });

  const pointsResult = await awardPoints(userId, "STUDY_TEXT", { ref: data.ref });

  revalidatePath("/dashboard");
  
  return { ...created, pointsAwarded: pointsResult.points, newTotalPoints: pointsResult.newTotalPoints };
}

export async function searchSefaria(query: string) {
  const url = `https://www.sefaria.org/api/v3/texts/${encodeURIComponent(query)}`;
  const res = await fetch(url, {
    next: { revalidate: 3600 },
    headers: { accept: "application/json" },
  });

  if (!res.ok) {
    throw new Error(`Sefaria API error: ${res.status}`);
  }

  return res.json();
}
