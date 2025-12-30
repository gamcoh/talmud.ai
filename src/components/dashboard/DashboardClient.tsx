"use client";

import { useState, useTransition, useMemo } from "react";
import { getLevelFromPoints } from "~/lib/mock-data";
import { WidgetCard } from "~/components/ui/WidgetCard";
import { QuoteWidget } from "~/components/ui/QuoteWidget";
import { DailyGoalWidget } from "~/components/ui/DailyGoalWidget";
import { WeeklyCalendar } from "~/components/ui/WeeklyCalendar";
import { Button } from "~/components/ui/Button";
import { PointsNotification } from "~/components/ui/PointsNotification";
import Link from "next/link";
import confetti from "canvas-confetti";
import { addStudiedText } from "~/server/actions/dashboard";
import { StatsSection, SearchSection, StudyHistorySection } from "./sections";

type DashboardClientProps = {
  userKey: string;
  initialData: Awaited<ReturnType<typeof import("~/server/actions/dashboard").getDashboardData>>;
  initialStudiedTexts: Awaited<ReturnType<typeof import("~/server/actions/dashboard").getStudiedTexts>>;
};

export function DashboardClient({ userKey, initialData, initialStudiedTexts }: DashboardClientProps) {
  const [isPending, startTransition] = useTransition();
  const [studiedTexts, setStudiedTexts] = useState(initialStudiedTexts.items);
  const [totalCount, setTotalCount] = useState(initialStudiedTexts.totalCount);
  const [currentPoints, setCurrentPoints] = useState(initialData.stats.level?.totalPoints ?? 0);
  const [earnedPoints, setEarnedPoints] = useState<number | null>(null);

  const stats = initialData.stats;
  const levelInfo = useMemo(() => getLevelFromPoints(currentPoints), [currentPoints]);
  const weeklyData = initialData.weeklyCalendar;
  const currentStreak = weeklyData.filter((d) => d.studied).length;

  const handleAddStudiedItem = async (data: Parameters<typeof addStudiedText>[0]) => {
    // Optimistic updates - happen immediately
    confetti({
      particleCount: 100,
      spread: 120,
      origin: { y: 0.3 },
      colors: ["#3b82f6", "#60a5fa", "#93c5fd", "#fbbf24", "#fcd34d"],
    });

    const optimisticItem = {
      id: `temp-${Date.now()}`,
      userKey: data.userKey,
      ref: data.ref,
      heRef: data.heRef ?? null,
      url: data.url ?? null,
      title: data.title ?? null,
      snippet: data.snippet ?? null,
      studiedAt: new Date(),
    };

    setStudiedTexts((prev) => [optimisticItem, ...prev]);
    setTotalCount((prev) => prev + 1);
    setEarnedPoints(10); // STUDY_TEXT points

    // Server action
    startTransition(async () => {
      try {
        const result = await addStudiedText(data);
        
        // Update optimistic item with real data
        setStudiedTexts((prev) => 
          prev.map(item => item.id === optimisticItem.id ? result : item)
        );
        setCurrentPoints(result.newTotalPoints);
      } catch (error) {
        console.error("Failed to add studied text:", error);
        // Rollback optimistic updates
        setStudiedTexts((prev) => prev.filter(item => item.id !== optimisticItem.id));
        setTotalCount((prev) => prev - 1);
        setEarnedPoints(null);
      }
    });
  };

  const progress = {
    points: currentPoints,
    streakDays: stats.streak?.currentStreak ?? 0,
    lastStudied: { type: "Parasha" as const, label: "Bereshit" },
  };

  const dailyGoal = stats.activeGoals?.find(
    (g) => g.type === "STUDY_MINUTES" && g.period === "DAILY"
  );
  const textsGoal = stats.activeGoals?.find(
    (g) => g.type === "TEXTS_STUDIED" && g.period === "DAILY"
  );

  return (
    <>
      <PointsNotification points={earnedPoints} onClose={() => setEarnedPoints(null)} />
      <div className="space-y-8">
        <section className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold tracking-tight text-white">
            Welcome back! 👋
          </h1>
          <p className="text-white/60">
            Keep your streak alive. Small wins, every day.
          </p>
        </div>
        <Link href="/flashcards">
          <Button variant="primary" size="lg" rightIcon={<span>→</span>}>
            Start Learning
          </Button>
        </Link>
      </section>

      <StatsSection 
        progress={progress} 
        levelInfo={levelInfo} 
        lastStudiedText={studiedTexts[0] ?? null} 
      />

      <section className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <DailyGoalWidget
            currentMinutes={dailyGoal?.progress ?? 0}
            goalMinutes={dailyGoal?.target ?? 30}
            lessonsCompleted={textsGoal?.progress ?? 0}
          />
          <WeeklyCalendar days={weeklyData} currentStreak={currentStreak} />
        </div>

        <div className="space-y-6">
          <QuoteWidget dailyWisdom={initialData.dailyWisdom} />

          <WidgetCard>
            <h3 className="text-lg font-bold text-white mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <Link href="/flashcards" className="block">
                <Button variant="primary" className="w-full justify-start" leftIcon={<span>📚</span>}>
                  Daily Flashcards
                </Button>
              </Link>
              <Button variant="secondary" className="w-full justify-start" leftIcon={<span>🎯</span>}>
                Review Mistakes
              </Button>
              <Button variant="ghost" className="w-full justify-start" leftIcon={<span>📖</span>}>
                Continue Reading
              </Button>
            </div>
          </WidgetCard>
        </div>
      </section>

      <SearchSection
        userKey={userKey}
        onAddStudied={handleAddStudiedItem}
        isPending={isPending}
      />

      <StudyHistorySection
        studied={studiedTexts}
        totalCount={totalCount}
        userKey={userKey}
      />
      </div>
    </>
  );
}
