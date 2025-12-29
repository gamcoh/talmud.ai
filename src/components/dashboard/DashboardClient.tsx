"use client";

import { useEffect, useMemo, useState } from "react";
import {
  DEFAULT_PROGRESS,
  getLevelFromPoints,
  PORTION_OPTIONS,
  type Portion,
  type UserProgress,
} from "~/lib/mock-data";
import { WidgetCard } from "~/components/ui/WidgetCard";
import { StreakFlame } from "~/components/ui/StreakFlame";
import { StatCard } from "~/components/ui/StatCard";
import { LevelBadge } from "~/components/ui/LevelBadge";
import { AnimatedNumber } from "~/components/ui/AnimatedNumber";
import { QuoteWidget } from "~/components/ui/QuoteWidget";
import { DailyGoalWidget } from "~/components/ui/DailyGoalWidget";
import { WeeklyCalendar } from "~/components/ui/WeeklyCalendar";
import { Button } from "~/components/ui/Button";
import { Input } from "~/components/ui/Input";
import { ProgressBar } from "~/components/ui/ProgressBar";
import Link from "next/link";

const STORAGE_KEY = "talmud.ai:user-progress:v1";
const USER_KEY_STORAGE = "talmud.ai:user-key:v1";

type StudiedText = {
  id: string;
  userKey: string;
  ref: string;
  heRef?: string | null;
  url?: string | null;
  title?: string | null;
  snippet?: string | null;
  createdAt: string;
};

function portionToKey(p: Portion) {
  return `${p.type}:${p.label}`;
}

function keyToPortion(key: string): Portion | null {
  const [type, ...rest] = key.split(":");
  const label = rest.join(":");
  if (!type || !label) return null;
  if (type !== "Parasha" && type !== "Daf" && type !== "Perek") return null;
  return { type, label };
}

function getOrCreateUserKey() {
  try {
    const existing = localStorage.getItem(USER_KEY_STORAGE);
    if (existing) return existing;
    const key =
      typeof crypto !== "undefined" && "randomUUID" in crypto
        ? crypto.randomUUID()
        : `anon_${Date.now()}_${Math.random().toString(16).slice(2)}`;
    localStorage.setItem(USER_KEY_STORAGE, key);
    return key;
  } catch {
    return "anon";
  }
}

// Generate mock weekly data
function generateWeeklyData() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const days = [];
  
  // Start from Sunday of current week
  const startOfWeek = new Date(today);
  startOfWeek.setDate(today.getDate() - today.getDay());
  
  for (let i = 0; i < 7; i++) {
    const date = new Date(startOfWeek);
    date.setDate(startOfWeek.getDate() + i);
    const isPast = date < today;
    const isToday = date.getTime() === today.getTime();
    
    days.push({
      date,
      studied: isPast ? Math.random() > 0.3 : isToday ? true : false,
      minutes: isPast || isToday ? Math.floor(Math.random() * 30) + 5 : 0,
    });
  }
  
  return days;
}

export function DashboardClient() {
  const [progress, setProgress] = useState<UserProgress>(DEFAULT_PROGRESS);
  const [userKey, setUserKey] = useState<string>("anon");
  const [query, setQuery] = useState("");
  const [searchLoading, setSearchLoading] = useState(false);
  const [searchError, setSearchError] = useState<string | null>(null);
  const [searchResult, setSearchResult] = useState<any | null>(null);
  const [selectedSectionIndex, setSelectedSectionIndex] = useState<number | null>(null);
  const [studied, setStudied] = useState<StudiedText[]>([]);
  const [studiedLoading, setStudiedLoading] = useState(false);
  const [studiedPage, setStudiedPage] = useState(1);
  const [studiedHasMore, setStudiedHasMore] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [weeklyData] = useState(generateWeeklyData);

  const PAGE_SIZE = 10;

  // ...existing useEffect and functions for userKey, studied texts loading...
  useEffect(() => {
    setUserKey(getOrCreateUserKey());
  }, []);

  useEffect(() => {
    if (!userKey) return;
    setStudiedLoading(true);
    setStudiedPage(1);
    void (async () => {
      try {
        const res = await fetch(
          `/api/studied-texts?userKey=${encodeURIComponent(userKey)}&page=1&limit=${PAGE_SIZE}`,
          { cache: "no-store" }
        );
        const data = (await res.json()) as { items?: StudiedText[]; hasMore?: boolean };
        setStudied(Array.isArray(data.items) ? data.items : []);
        setStudiedHasMore(!!data.hasMore);
      } finally {
        setStudiedLoading(false);
      }
    })();
  }, [userKey]);

  async function loadMoreStudied() {
    if (!userKey || loadingMore || !studiedHasMore) return;
    setLoadingMore(true);
    const nextPage = studiedPage + 1;
    try {
      const res = await fetch(
        `/api/studied-texts?userKey=${encodeURIComponent(userKey)}&page=${nextPage}&limit=${PAGE_SIZE}`,
        { cache: "no-store" }
      );
      const data = (await res.json()) as { items?: StudiedText[]; hasMore?: boolean };
      const newItems = Array.isArray(data.items) ? data.items : [];
      setStudied((prev) => {
        const combined = [...prev, ...newItems];
        const seen = new Set<string>();
        return combined.filter((x) => (seen.has(x.id) ? false : (seen.add(x.id), true)));
      });
      setStudiedPage(nextPage);
      setStudiedHasMore(!!data.hasMore);
    } finally {
      setLoadingMore(false);
    }
  }

  async function runSearch() {
    const q = query.trim();
    if (!q) return;
    setSearchLoading(true);
    setSearchError(null);
    setSearchResult(null);
    try {
      const res = await fetch(`https://www.sefaria.org/api/v3/texts/${encodeURIComponent(query)}`, {
        cache: "no-store",
      });
      if (!res.ok) {
        setSearchError(`Sefaria error (${res.status})`);
        return;
      }
      const data = (await res.json()) as any;
      setSearchResult(data);
    } catch {
      setSearchError("Failed to fetch from Sefaria");
    } finally {
      setSearchLoading(false);
    }
  }

  async function addStudiedFromSefaria(result: any) {
    const ref = (result?.ref ?? query.trim()) as string;
    if (!ref || !userKey) return;

    const versions = Array.isArray(result?.versions) ? result.versions : [];
    const baseTextArray = Array.isArray(versions[0]?.text) ? versions[0].text : [];

    const basePayload = {
      userKey,
      ref,
      heRef: (result?.heRef ?? null) as string | null,
      url: result?.url ? `https://www.sefaria.org/${result.url}` : null,
      title: (result?.title ?? result?.primaryTitle ?? null) as string | null,
    };

    const makeSnippet = (raw: unknown) => {
      const s = raw == null ? "" : String(raw);
      return s ? s.slice(0, 1800) : null;
    };

    const payloads =
      typeof selectedSectionIndex === "number"
        ? [{ ...basePayload, snippet: makeSnippet(baseTextArray[selectedSectionIndex] ?? result?.text) }]
        : baseTextArray.length > 0
        ? baseTextArray
            .map((section: any, idx: number) => ({
              ...basePayload,
              ref: `${ref}:${idx + 1}`,
              snippet: makeSnippet(section),
            }))
            .filter((p) => p.snippet)
        : [{ ...basePayload, snippet: makeSnippet(result?.text) }];

    const createdItems: StudiedText[] = [];
    for (const payload of payloads) {
      const res = await fetch("/api/studied-texts", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json()) as { item?: StudiedText };
      if (data.item) createdItems.push(data.item);
    }

    if (createdItems.length > 0) {
      setStudied((prev) => {
        const next = [...createdItems, ...prev];
        const seen = new Set<string>();
        return next.filter((x) => (seen.has(x.id) ? false : (seen.add(x.id), true)));
      });
    }
  }

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw) as Partial<UserProgress> | null;
      if (!parsed) return;

      const lastStudied =
        parsed.lastStudied &&
        typeof parsed.lastStudied === "object" &&
        "type" in parsed.lastStudied &&
        "label" in parsed.lastStudied
          ? (parsed.lastStudied as Portion)
          : DEFAULT_PROGRESS.lastStudied;

      setProgress({
        points: typeof parsed.points === "number" ? parsed.points : DEFAULT_PROGRESS.points,
        streakDays: typeof parsed.streakDays === "number" ? parsed.streakDays : DEFAULT_PROGRESS.streakDays,
        lastStudied,
      });
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch {}
  }, [progress]);

  const levelInfo = useMemo(() => getLevelFromPoints(progress.points), [progress.points]);
  const selectedKey = portionToKey(progress.lastStudied);
  const currentStreak = weeklyData.filter(d => d.studied).length;

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
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          label="Streak"
          value={<><AnimatedNumber value={progress.streakDays} /> days</>}
          icon={<StreakFlame days={progress.streakDays} size="lg" />}
          variant="highlight"
        />

        <StatCard
          label="Total Points"
          value={<AnimatedNumber value={progress.points} />}
          icon={<span className="text-3xl">⭐</span>}
        />

        <StatCard
          label="Level"
          value={levelInfo.level}
          subtitle={`${Math.round(levelInfo.progress * 100)}% to next`}
          icon={<LevelBadge level={levelInfo.level} progress={levelInfo.progress} size="md" />}
        />

        <StatCard
          label="Current Focus"
          value={progress.lastStudied.label}
          subtitle={progress.lastStudied.type}
          variant="warm"
        />
      </section>

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
      <WidgetCard>
        <h3 className="text-lg font-bold text-white mb-4">Search Sefaria</h3>
        <div className="flex flex-col gap-3 md:flex-row">
          <div className="flex-1">
            <Input
              placeholder='e.g. "Berakhot 2a" or "Genesis 1"'
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") void runSearch();
              }}
            />
          </div>
          <Button
            variant="primary"
            onClick={() => void runSearch()}
            isLoading={searchLoading}
            disabled={!query.trim()}
          >
            Search
          </Button>
        </div>

        {searchError && (
          <div className="mt-3 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-sm text-red-300">
            {searchError}
          </div>
        )}

        {searchResult && (
          <div className="mt-4 p-4 rounded-2xl bg-white/5 border border-white/10">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div className="space-y-2 min-w-0 flex-1">
                <div className="text-lg font-semibold text-white">
                  {searchResult?.ref ?? query.trim()}
                </div>
                {searchResult?.heRef && (
                  <div className="text-sm text-white/60" dir="rtl" lang="he">
                    {searchResult.heRef}
                  </div>
                )}
                {Array.isArray(searchResult?.versions?.[0]?.text) &&
                  searchResult.versions[0].text.length > 0 && (
                    <div className="mt-3">
                      <label className="text-xs font-medium text-white/60 block mb-1">
                        Pick a section to save
                      </label>
                      <select
                        className="w-full rounded-xl border border-white/10 bg-[var(--surface-card)] px-3 py-2 text-sm text-white outline-none focus:border-ocean-400"
                        value={selectedSectionIndex !== null ? String(selectedSectionIndex) : ""}
                        onChange={(e) => {
                          const v = e.target.value;
                          setSelectedSectionIndex(v === "" ? null : Number(v));
                        }}
                      >
                        <option value="">All sections</option>
                        {searchResult.versions[0].text.map(
                          (section: any, idx: number) =>
                            section && (
                              <option key={idx} value={idx}>
                                {`${idx + 1}. ${String(section).slice(0, 50)}${String(section).length > 50 ? "…" : ""}`}
                              </option>
                            )
                        )}
                      </select>
                    </div>
                  )}
              </div>
              <Button variant="warm" onClick={() => void addStudiedFromSefaria(searchResult)}>
                Add to Dashboard
              </Button>
            </div>
          </div>
        )}
      </WidgetCard>

      {/* Studied Texts Section */}
      <WidgetCard>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-white">Your Study History</h3>
          <span className="text-sm text-white/50">{studied.length} texts saved</span>
        </div>

        {studiedLoading ? (
          <div className="text-sm text-white/60 py-8 text-center">Loading your texts...</div>
        ) : studied.length === 0 ? (
          <div className="text-center py-8">
            <div className="text-4xl mb-3">📚</div>
            <div className="text-white/60">No saved texts yet.</div>
            <div className="text-sm text-white/40">Search above and add your first one!</div>
          </div>
        ) : (
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {studied.slice(0, 6).map((t) => (
              <div
                key={t.id}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition-all duration-200"
              >
                <div className="text-base font-semibold text-white truncate">{t.ref}</div>
                {t.heRef && (
                  <div className="mt-1 text-sm text-white/50 truncate" dir="rtl" lang="he">
                    {t.heRef}
                  </div>
                )}
                {t.url && (
                  <a
                    className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-ocean-400 hover:text-ocean-300"
                    href={t.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open on Sefaria →
                  </a>
                )}
              </div>
            ))}
          </div>
        )}

        {studiedHasMore && (
          <div className="mt-4 text-center">
            <Button variant="ghost" onClick={() => void loadMoreStudied()} isLoading={loadingMore}>
              Load More
            </Button>
          </div>
        )}
      </WidgetCard>

      {/* Focus Selection */}
      <WidgetCard>
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-white">Update Your Focus</h3>
            <p className="text-sm text-white/60">
              Pick what you're currently studying. We'll generate flashcards from it.
            </p>
          </div>

          <div className="w-full md:max-w-sm space-y-4">
            <select
              className="w-full rounded-xl border border-white/10 bg-[var(--surface-card)] px-4 py-3 text-white outline-none focus:border-ocean-400 transition-colors"
              value={selectedKey}
              onChange={(e) => {
                const next = keyToPortion(e.target.value);
                if (!next) return;
                setProgress((p) => ({ ...p, lastStudied: next }));
              }}
            >
              {PORTION_OPTIONS.map((p) => (
                <option key={portionToKey(p)} value={portionToKey(p)}>
                  {p.type}: {p.label}
                </option>
              ))}
            </select>

            <ProgressBar value={levelInfo.progress} label="Progress to next level" variant="ocean" />
          </div>
        </div>
      </WidgetCard>
    </div>
  );
}
