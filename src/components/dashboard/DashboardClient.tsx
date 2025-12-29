"use client";

import { useEffect, useMemo, useState } from "react";
import { getLevelFromPoints } from "~/lib/mock-data";
import { WidgetCard } from "~/components/ui/WidgetCard";
import { QuoteWidget } from "~/components/ui/QuoteWidget";
import { DailyGoalWidget } from "~/components/ui/DailyGoalWidget";
import { WeeklyCalendar } from "~/components/ui/WeeklyCalendar";
import { Button } from "~/components/ui/Button";
import Link from "next/link";
import confetti from "canvas-confetti";

import { useUserProgress, useStudiedTexts, useSefariaSearch } from "./hooks";
import { StatsSection, SearchSection, StudyHistorySection, FocusSection } from "./sections";

export function DashboardClient() {
  const [userKey, setUserKey] = useState<string>("demo-user");
  const [dashboardPulse, setDashboardPulse] = useState(false);

  const { progress, stats, loading } = useUserProgress();
  const {
    studied,
    studiedLoading,
    studiedHasMore,
    loadingMore,
    loadMoreStudied,
    addStudiedItems,
    totalCount,
  } = useStudiedTexts(userKey);

  // Wrap addStudiedItems to trigger celebration
  const handleAddStudiedItems = (items: any[]) => {
    addStudiedItems(items);
    
    // Trigger dashboard pulse animation
    setDashboardPulse(true);
    setTimeout(() => setDashboardPulse(false), 600);
    
    // Trigger confetti from top of page
    confetti({
      particleCount: 100,
      spread: 120,
      origin: { y: 0.3 },
      colors: ['#3b82f6', '#60a5fa', '#93c5fd', '#fbbf24', '#fcd34d'],
    });
  };
  const {
    query,
    setQuery,
    searchLoading,
    searchError,
    searchResult,
    selectedSectionIndex,
    setSelectedSectionIndex,
    runSearch,
    addStudiedFromSefaria,
  } = useSefariaSearch(userKey, handleAddStudiedItems);

  useEffect(() => {
    // Set to demo-user by default for development
    let key = localStorage.getItem("talmud-user-key");
    if (!key) {
      key = "demo-user";
      localStorage.setItem("talmud-user-key", key);
    }
    setUserKey(key);
  }, []);

  const levelInfo = useMemo(() => getLevelFromPoints(progress.points), [progress.points]);
  const weeklyData = stats?.weeklyCalendar ?? [];
  const currentStreak = weeklyData.filter((d) => d.studied).length;

  // Get the most recently added studied text
  const lastStudiedText = studied.length > 0 ? studied[0] : null;

  // Get daily goal from stats
  const dailyGoal = stats?.activeGoals?.find(
    (g) => g.type === "STUDY_MINUTES" && g.period === "DAILY"
  );
  const textsGoal = stats?.activeGoals?.find(
    (g) => g.type === "TEXTS_STUDIED" && g.period === "DAILY"
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-white/60">Loading...</div>
      </div>
    );
  }

  return (
    <div className={`space-y-8 transition-all duration-300 ${dashboardPulse ? 'scale-[0.99]' : 'scale-100'}`}>
      {/* Header Section */}
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

      {/* Stats Row */}
      <StatsSection progress={progress} levelInfo={levelInfo} lastStudiedText={lastStudiedText} />

      {/* Main Content Grid */}
      <section className="grid gap-6 lg:grid-cols-3">
        {/* Left Column - Daily Goal & Weekly Calendar */}
        <div className="space-y-6 lg:col-span-2">
          <DailyGoalWidget
            currentMinutes={dailyGoal?.progress ?? 0}
            goalMinutes={dailyGoal?.target ?? 30}
            lessonsCompleted={textsGoal?.progress ?? 0}
          />
          <WeeklyCalendar days={weeklyData} currentStreak={currentStreak} />
        </div>

        {/* Right Column - Quote & Quick Actions */}
        <div className="space-y-6">
          <QuoteWidget dailyWisdom={stats?.dailyWisdom ?? null} />

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

      {/* Sefaria Search Section */}
      <SearchSection
        query={query}
        setQuery={setQuery}
        searchLoading={searchLoading}
        searchError={searchError}
        searchResult={searchResult}
        selectedSectionIndex={selectedSectionIndex}
        setSelectedSectionIndex={setSelectedSectionIndex}
        onSearch={() => void runSearch()}
        onAddStudied={(result) => void addStudiedFromSefaria(result)}
      />

      {/* Studied Texts Section */}
      <StudyHistorySection
        studied={studied}
        studiedLoading={studiedLoading}
        studiedHasMore={studiedHasMore}
        loadingMore={loadingMore}
        onLoadMore={() => void loadMoreStudied()}
        totalCount={totalCount}
      />

      {/* Focus Selection */}
      <FocusSection
        lastStudied={progress.lastStudied}
        levelProgress={levelInfo.progress}
        onPortionChange={() => {}}
      />
    </div>
  );
}
