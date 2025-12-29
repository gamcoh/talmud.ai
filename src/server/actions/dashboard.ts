"use server";

import { revalidateTag, unstable_cache } from "next/cache";
import { db } from "../db";
import { getUserStats, getCurrentFocus, getDailyWisdom, getWeeklyCalendar, awardPoints } from "../gamification/service";

export async function getDashboardData(userKey: string) {
  return unstable_cache(
    async () => {
      const [stats, currentFocus, dailyWisdom, weeklyCalendar] = await Promise.all([
        getUserStats(userKey),
        getCurrentFocus(userKey),
        getDailyWisdom(),
        getWeeklyCalendar(userKey),
      ]);

      return {
        stats,
        currentFocus,
        dailyWisdom,
        weeklyCalendar,
      };
    },
    [`dashboard-${userKey}`],
    {
      tags: [`user-${userKey}`, "dashboard"],
      revalidate: 60,
    }
  )();
}

export async function getStudiedTexts(userKey: string, page = 1, limit = 20) {
  return unstable_cache(
    async () => {
      const skip = (page - 1) * limit;
      const [items, totalCount] = await Promise.all([
        db.studiedText.findMany({
          where: { userKey },
          orderBy: { createdAt: "desc" },
          skip,
          take: limit + 1,
        }),
        db.studiedText.count({ where: { userKey } }),
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
      tags: [`user-${userKey}`, "studied-texts"],
      revalidate: 30,
    }
  )();
}

export async function addStudiedText(data: {
  userKey: string;
  ref: string;
  heRef?: string | null;
  url?: string | null;
  title?: string | null;
  snippet?: string | null;
}) {
  const created = await db.studiedText.upsert({
    where: { userKey_ref: { userKey: data.userKey, ref: data.ref } },
    update: {
      heRef: data.heRef,
      url: data.url,
      title: data.title,
      snippet: data.snippet,
    },
    create: data,
  });

  const pointsResult = await awardPoints(data.userKey, "STUDY_TEXT", { ref: data.ref });

  revalidateTag(`user-${data.userKey}`, "max");
  revalidateTag("studied-texts", "max");
  
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
