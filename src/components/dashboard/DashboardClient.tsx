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

export function DashboardClient() {
  const [progress, setProgress] = useState<UserProgress>(DEFAULT_PROGRESS);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw) as Partial<UserProgress> | null;
      if (!parsed) return;

      // minimal validation (no zod on client yet)
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
