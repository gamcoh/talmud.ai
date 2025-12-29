"use client";

import { useEffect, useMemo, useState } from "react";
import { getLevelFromPoints } from "~/lib/mock-data";
import { WidgetCard } from "~/components/ui/WidgetCard";
import { QuoteWidget } from "~/components/ui/QuoteWidget";
import { DailyGoalWidget } from "~/components/ui/DailyGoalWidget";
import { WeeklyCalendar } from "~/components/ui/WeeklyCalendar";
import { Button } from "~/components/ui/Button";
import Link from "next/link";

import { getOrCreateUserKey, generateWeeklyData } from "./constants";
import { useUserProgress, useStudiedTexts, useSefariaSearch } from "./hooks";
import { StatsSection, SearchSection, StudyHistorySection, FocusSection } from "./sections";

export function DashboardClient() {
  const [userKey, setUserKey] = useState<string>("anon");
  const [weeklyData] = useState(generateWeeklyData);

  const { progress, setProgress } = useUserProgress();
  const {
    studied,
    studiedLoading,
    studiedHasMore,
    loadingMore,
    loadMoreStudied,
    addStudiedItems,
  } = useStudiedTexts(userKey);
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
  } = useSefariaSearch(userKey, addStudiedItems);

  useEffect(() => {
    setUserKey(getOrCreateUserKey());
  }, []);

  const levelInfo = useMemo(() => getLevelFromPoints(progress.points), [progress.points]);
  const currentStreak = weeklyData.filter((d) => d.studied).length;

  return (
    <div className="space-y-8">
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
      <StatsSection progress={progress} levelInfo={levelInfo} />

      {/* Main Content Grid */}
      <section className="grid gap-6 lg:grid-cols-3">
        {/* Left Column - Daily Goal & Weekly Calendar */}
        <div className="space-y-6 lg:col-span-2">
          <DailyGoalWidget
            currentMinutes={18}
            goalMinutes={30}
            lessonsCompleted={3}
          />
          <WeeklyCalendar days={weeklyData} currentStreak={currentStreak} />
        </div>

        {/* Right Column - Quote & Quick Actions */}
        <div className="space-y-6">
          <QuoteWidget />

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
      />

      {/* Focus Selection */}
      <FocusSection
        lastStudied={progress.lastStudied}
        levelProgress={levelInfo.progress}
        onPortionChange={(portion) => setProgress((p) => ({ ...p, lastStudied: portion }))}
      />
    </div>
  );
}
