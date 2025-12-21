"use client";

import { useEffect, useMemo, useState } from "react";
import {
  DEFAULT_PROGRESS,
  getLevelFromPoints,
  PORTION_OPTIONS,
  type Portion,
  type UserProgress,
} from "~/lib/mock-data";
import { ProgressBar } from "~/components/ui/ProgressBar";
import { StatCard } from "~/components/ui/StatCard";

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

export function DashboardClient() {
  const [progress, setProgress] = useState<UserProgress>(DEFAULT_PROGRESS);

  const [userKey, setUserKey] = useState<string>("anon");

  const [query, setQuery] = useState("");
  const [searchLoading, setSearchLoading] = useState(false);
  const [searchError, setSearchError] = useState<string | null>(null);
  const [searchResult, setSearchResult] = useState<any | null>(null);

  const [studied, setStudied] = useState<StudiedText[]>([]);
  const [studiedLoading, setStudiedLoading] = useState(false);

  useEffect(() => {
    setUserKey(getOrCreateUserKey());
  }, []);

  useEffect(() => {
    if (!userKey) return;
    setStudiedLoading(true);
    void (async () => {
      try {
        const res = await fetch(`/api/studied-texts?userKey=${encodeURIComponent(userKey)}`, {
          cache: "no-store",
        });
        const data = (await res.json()) as { items?: StudiedText[] };
        setStudied(Array.isArray(data.items) ? data.items : []);
      } finally {
        setStudiedLoading(false);
      }
    })();
  }, [userKey]);

  async function runSearch() {
    const q = query.trim();
    if (!q) return;
    setSearchLoading(true);
    setSearchError(null);
    setSearchResult(null);
    try {
      const res = await fetch(`/api/sefaria/texts?query=${encodeURIComponent(q)}`, {
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

    const payload = {
      userKey,
      ref,
      heRef: (result?.heRef ?? null) as string | null,
      url: result?.url ? `https://www.sefaria.org/${result.url}` : null,
      title: (result?.title ?? result?.primaryTitle ?? null) as string | null,
      snippet:
        (Array.isArray(result?.versions?.[0]?.text)
          ? result.versions[0].text.filter(Boolean).join(" ").slice(0, 180)
          : typeof result?.text === "string"
          ? result.text.slice(0, 180)
          : null) ?? null,
    };

    const res = await fetch("/api/studied-texts", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = (await res.json()) as { item?: StudiedText };

    if (data.item) {
      setStudied((prev) => [data.item!, ...prev.filter((x) => x.id !== data.item!.id)]);
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
        points:
          typeof parsed.points === "number" ? parsed.points : DEFAULT_PROGRESS.points,
        streakDays:
          typeof parsed.streakDays === "number"
            ? parsed.streakDays
            : DEFAULT_PROGRESS.streakDays,
        lastStudied,
      });
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch {
      // ignore
    }
  }, [progress]);

  const levelInfo = useMemo(
    () => getLevelFromPoints(progress.points),
    [progress.points],
  );

  const selectedKey = portionToKey(progress.lastStudied);

  return (
    <div className="space-y-8">
      <section className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Dashboard</h1>
        <p className="text-white/70">
          Keep your streak alive. Small wins, every day.
        </p>
      </section>

      <section className="space-y-3">
        <div className="flex flex-col gap-2 md:flex-row md:items-end">
          <div className="w-full">
            <label className="text-sm text-white/70" htmlFor="sefariaSearch">
              Search Sefaria
            </label>
            <input
              id="sefariaSearch"
              className="mt-2 w-full rounded-xl border border-white/10 bg-[#15162c]/60 px-3 py-2 text-white outline-none ring-0 focus:border-white/20"
              placeholder='e.g. "Berakhot 2a"'
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") void runSearch();
              }}
            />
          </div>

          <button
            className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-[#15162c] hover:bg-white/90 disabled:opacity-60"
            onClick={() => void runSearch()}
            disabled={searchLoading || !query.trim()}
          >
            {searchLoading ? "Searching…" : "Search"}
          </button>
        </div>

        {searchError && <div className="text-sm text-red-200/90">{searchError}</div>}

        {searchResult && (
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1">
                <div className="text-sm font-medium text-white/70">Result</div>
                <div className="text-lg font-semibold text-white">
                  {searchResult?.ref ?? query.trim()}
                </div>
                {searchResult?.heRef && (
                  <div className="text-sm text-white/60">{searchResult.heRef}</div>
                )}
              </div>
              <button
                className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
                onClick={() => void addStudiedFromSefaria(searchResult)}
              >
                Add to dashboard
              </button>
            </div>
          </div>
        )}

        <div className="space-y-2">
          <div className="text-sm font-medium text-white/70">What you studied</div>

          {studiedLoading ? (
            <div className="text-sm text-white/60">Loading…</div>
          ) : studied.length === 0 ? (
            <div className="text-sm text-white/60">
              No saved texts yet. Search above and add one.
            </div>
          ) : (
            <div className="flex gap-3 overflow-x-auto pb-2">
              {studied.map((t) => (
                <div
                  key={t.id}
                  className="min-w-[280px] max-w-[360px] flex-shrink-0 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur"
                >
                  <div className="text-xs text-white/60">Studied</div>
                  <div className="mt-1 text-base font-semibold text-white">{t.ref}</div>
                  {t.heRef && <div className="mt-1 text-sm text-white/60">{t.heRef}</div>}
                  {t.snippet && <div className="mt-2 text-sm text-white/75">{t.snippet}</div>}
                  {t.url && (
                    <a
                      className="mt-3 inline-block text-sm font-semibold text-white/80 hover:text-white"
                      href={t.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Open on Sefaria
                    </a>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-3">
        <StatCard
          label="Streak"
          value={
            <span className="tabular-nums">
              {progress.streakDays}
              <span className="ml-2 text-base font-medium text-white/70">
                days
              </span>
            </span>
          }
          hint="Study today to extend it."
        />
        <StatCard
          label="Total points"
          value={<span className="tabular-nums">{progress.points}</span>}
          hint="Earn points from flashcards."
        />
        <StatCard
          label="Level"
          value={<span className="tabular-nums">{levelInfo.level}</span>}
          hint="Progress to the next level below."
        />
      </section>

      <section className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="space-y-2">
            <div className="text-sm font-medium text-white/70">
              Current focus
            </div>
            <div className="text-xl font-semibold">
              {progress.lastStudied.type}:{" "}
              <span className="text-white/90">{progress.lastStudied.label}</span>
            </div>
            <div className="text-sm text-white/60">
              Pick what you last learned. We’ll generate flashcards from it
              later.
            </div>
          </div>

          <div className="w-full md:max-w-sm">
            <label className="text-sm text-white/70" htmlFor="portion">
              Update last studied
            </label>
            <select
              id="portion"
              className="mt-2 w-full rounded-xl border border-white/10 bg-[#15162c]/60 px-3 py-2 text-white outline-none ring-0 focus:border-white/20"
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

            <div className="mt-4">
              <ProgressBar value={levelInfo.progress} label="Next level" />
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div className="text-sm font-medium text-white/70">Next up</div>
          <div className="mt-2 text-lg font-semibold">Daily warm-up</div>
          <p className="mt-2 text-sm text-white/65">
            Answer 5 flashcards to get a quick points boost.
          </p>
          <div className="mt-4 text-sm text-white/60">
            (Flashcards page coming next.)
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div className="text-sm font-medium text-white/70">Momentum</div>
          <div className="mt-2 text-lg font-semibold">Streak tip</div>
          <p className="mt-2 text-sm text-white/65">
            Keep it easy: 2 minutes counts. Consistency beats intensity.
          </p>
        </div>
      </section>
    </div>
  );
}
