import { useEffect, useState } from "react";
import { DEFAULT_PROGRESS, type Portion, type UserProgress } from "~/lib/mock-data";

type Goal = {
  id: string;
  type: "TEXTS_STUDIED" | "FLASHCARDS_REVIEWED" | "STUDY_MINUTES" | "STREAK_DAYS";
  target: number;
  progress: number;
  period: "DAILY" | "WEEKLY" | "MONTHLY" | "CUSTOM";
  completedAt: Date | null;
};

type UserStats = {
  level: {
    currentLevel: number;
    totalPoints: number;
  } | null;
  streak: {
    currentStreak: number;
    longestStreak: number;
  } | null;
  currentFocus: {
    ref: string;
    title: string | null;
  } | null;
  dailyWisdom: {
    ref: string;
    text: string;
    heText: string;
    heRef: string;
    url: string;
  } | null;
  weeklyCalendar: Array<{
    day: string;
    date: string;
    studied: boolean;
    minutes: number;
  }>;
  activeGoals: Goal[];
  daysStudied: number;
};

export function useUserProgress() {
  const [progress, setProgress] = useState<UserProgress>(DEFAULT_PROGRESS);
  const [stats, setStats] = useState<UserStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      try {
        // Get or set the user key to demo-user for development
        let userKey = localStorage.getItem("talmud-user-key");
        if (!userKey) {
          userKey = "demo-user";
          localStorage.setItem("talmud-user-key", userKey);
        }

        const response = await fetch("/api/gamification/stats", {
          headers: {
            "x-user-key": userKey,
          },
        });

        if (response.ok) {
          const data = await response.json() as UserStats;
          setStats(data);

          // Parse last studied from currentFocus
          let lastStudied: Portion = DEFAULT_PROGRESS.lastStudied;
          if (data.currentFocus?.title) {
            const title = data.currentFocus.title;
            if (title.includes("Genesis") || title.includes("Exodus")) {
              lastStudied = { type: "Parasha", label: title };
            } else if (title.includes("Berakhot") || title.includes("Shabbat")) {
              lastStudied = { type: "Daf", label: title };
            } else if (title.includes("Avot") || title.includes("Pirkei")) {
              lastStudied = { type: "Perek", label: title };
            }
          }

          setProgress({
            points: data.level?.totalPoints ?? 0,
            streakDays: data.streak?.currentStreak ?? 0,
            lastStudied,
          });
        }
      } catch (error) {
        console.error("Failed to fetch user stats:", error);
      } finally {
        setLoading(false);
      }
    }

    void fetchStats();
  }, []);

  return { progress, setProgress, stats, loading };
}
