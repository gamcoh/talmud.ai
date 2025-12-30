"use client";

import { useTransition, useMemo, useEffect, useRef } from "react";
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
import { useAppStore, selectPoints, selectStreak, type StudiedText } from "~/stores/appStore";

type DashboardClientProps = {
  initialData: Awaited<ReturnType<typeof import("~/server/actions/dashboard").getDashboardData>>;
  initialStudiedTexts: Awaited<ReturnType<typeof import("~/server/actions/dashboard").getStudiedTexts>>;
};

export function DashboardClient({ initialData, initialStudiedTexts }: DashboardClientProps) {
  const [isPending, startTransition] = useTransition();
  
  // Zustand store
  const studiedTexts = useAppStore((state) => state.studiedTexts);
  const totalTextsCount = useAppStore((state) => state.totalTextsCount);
  const hasMoreTexts = useAppStore((state) => state.hasMoreTexts);
  const earnedPointsNotification = useAppStore((state) => state.earnedPointsNotification);
  const points = useAppStore(selectPoints);
  const streakDays = useAppStore(selectStreak);
  
  // Actions
  const setStudiedTexts = useAppStore((state) => state.setStudiedTexts);
  const addStudiedTextToStore = useAppStore((state) => state.addStudiedText);
  const removeStudiedText = useAppStore((state) => state.removeStudiedText);
  const showPointsNotification = useAppStore((state) => state.showPointsNotification);
  const hidePointsNotification = useAppStore((state) => state.hidePointsNotification);
  const updateStats = useAppStore((state) => state.updateStats);

  // Initialize store with server data only once
  const initialized = useRef(false);
  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      setStudiedTexts(
        initialStudiedTexts.items,
        initialStudiedTexts.totalCount,
        initialStudiedTexts.hasMore
      );
      // Only set stats if they're not already set (e.g., from flashcards page)
      const currentPoints = useAppStore.getState().stats.points;
      if (currentPoints === 0) {
        updateStats({
          points: initialData.stats.level?.totalPoints ?? 0,
          level: initialData.stats.level?.currentLevel ?? 1,
          streakDays: initialData.stats.streak?.currentStreak ?? 0,
          longestStreak: initialData.stats.streak?.longestStreak ?? 0,
        });
      }
    }
  }, [initialData, initialStudiedTexts, setStudiedTexts, updateStats]);

  // Sync stats when returning from other pages (like flashcards)
  useEffect(() => {
    const handleVisibilityChange = async () => {
      if (document.visibilityState === 'visible') {
        try {
          const res = await fetch(`/api/gamification/stats`, {
            cache: 'no-store',
          });
          const data = await res.json() as { level?: { totalPoints: number; currentLevel: number } };
          if (data.level) {
            updateStats({
              points: data.level.totalPoints,
              level: data.level.currentLevel,
            });
          }
        } catch (error) {
          console.error('Failed to refresh stats:', error);
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [updateStats]);

  const levelInfo = useMemo(() => getLevelFromPoints(points), [points]);
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

    const optimisticItem: StudiedText = {
      id: `temp-${Date.now()}`,
      userId: '', // Will be updated by server
      ref: data.ref,
      heRef: data.heRef ?? null,
      url: data.url ?? null,
      title: data.title ?? null,
      snippet: data.snippet ?? null,
      createdAt: new Date().toISOString(),
    };

    addStudiedTextToStore(optimisticItem);
    showPointsNotification(10); // STUDY_TEXT points

    // Server action
    startTransition(async () => {
      try {
        const result = await addStudiedText(data);
        
        // Remove temp and add real item
        removeStudiedText(optimisticItem.id);
        addStudiedTextToStore(result as any);
        
        // Update stats
        updateStats({ points: result.newTotalPoints });
      } catch (error) {
        console.error("Failed to add studied text:", error);
        // Rollback optimistic updates
        removeStudiedText(optimisticItem.id);
        hidePointsNotification();
      }
    });
  };

  const progress = {
    points,
    streakDays,
    lastStudied: { type: "Parasha" as const, label: "Bereshit" },
  };

  const stats = initialData.stats;

  const dailyGoal = stats.activeGoals?.find(
    (g) => g.type === "STUDY_MINUTES" && g.period === "DAILY"
  );
  const textsGoal = stats.activeGoals?.find(
    (g) => g.type === "TEXTS_STUDIED" && g.period === "DAILY"
  );

  return (
    <>
      <PointsNotification points={earnedPointsNotification} onClose={hidePointsNotification} />
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
        lastStudiedText={studiedTexts[0] ? { ...studiedTexts[0], createdAt: String(studiedTexts[0].createdAt) } : null} 
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
        onAddStudied={handleAddStudiedItem}
        isPending={isPending}
      />

      <StudyHistorySection
        studied={studiedTexts.map(t => ({ ...t, createdAt: String(t.createdAt) }))}
        totalCount={totalTextsCount}
      />
      </div>
    </>
  );
}
