"use client";

import { useEffect, useMemo, useState } from "react";
import type { Portion, UserProgress } from "~/lib/mock-data";
import { DEFAULT_PROGRESS } from "~/lib/mock-data";
import { ProgressBar } from "~/components/ui/ProgressBar";

const STORAGE_KEY = "talmud.ai:user-progress:v1";

type QueueItem = {
  reviewId: string;
  prompt: string;
  answer: string;
  portion: Portion;
  // Optional multiple‑choice mode
  choices?: string[];          // includes the correct answer
};

function loadProgress(): UserProgress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_PROGRESS;
    const parsed = JSON.parse(raw) as Partial<UserProgress> | null;
    if (!parsed) return DEFAULT_PROGRESS;
    return {
      points: typeof parsed.points === "number" ? parsed.points : DEFAULT_PROGRESS.points,
      streakDays:
        typeof parsed.streakDays === "number"
          ? parsed.streakDays
          : DEFAULT_PROGRESS.streakDays,
      lastStudied:
        parsed.lastStudied && typeof parsed.lastStudied === "object"
          ? (parsed.lastStudied as Portion)
          : DEFAULT_PROGRESS.lastStudied,
    };
  } catch {
    return DEFAULT_PROGRESS;
  }
}

function saveProgress(p: UserProgress) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
  } catch {
    // ignore
  }
}

export default function FlashcardsPage() {
  const [progress, setProgress] = useState<UserProgress>(DEFAULT_PROGRESS);
  const portion = progress.lastStudied;

  const [items, setItems] = useState<QueueItem[]>([]);
  const [idx, setIdx] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [loading, setLoading] = useState(true);
  const [grading, setGrading] = useState(false);
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);

  const current = items[idx] ?? null;

  const remaining = useMemo(() => Math.max(0, items.length - idx), [items.length, idx]);
  const doneProgress = useMemo(
    () => (items.length ? idx / items.length : 0),
    [idx, items.length],
  );

  useEffect(() => {
    setProgress(loadProgress());
  }, []);

  async function loadQueue(p: Portion) {
    setLoading(true);
    setIdx(0);
    setRevealed(false);
    setSelectedChoice(null);

    const portionParam = encodeURIComponent(JSON.stringify(p));
    const res = await fetch(`/api/flashcards/queue?portion=${portionParam}&limit=10`, {
      cache: "no-store",
    });
    const data = (await res.json()) as { items?: QueueItem[] };

    // NEW: ensure QCM choices exist (when possible) even if API didn't provide them
    const rawItems = Array.isArray(data.items) ? data.items : [];
    const withQcm = rawItems.map((it, i, all) => {
      if (Array.isArray(it.choices) && it.choices.length > 1) return it;

      // build distractors from other answers in the current queue
      const distractors = Array.from(
        new Set(
          all
            .filter((x) => x.reviewId !== it.reviewId)
            .map((x) => x.answer)
            .filter((a) => typeof a === "string" && a.trim().length > 0),
        ),
      ).slice(0, 3);

      if (distractors.length < 2) return it; // not enough data; keep free-recall behavior

      const shuffled = [it.answer, ...distractors]
        .filter((v) => typeof v === "string" && v.trim().length > 0)
        .sort(() => Math.random() - 0.5);

      return { ...it, choices: shuffled };
    });

    setItems(withQcm);
    setLoading(false);
  }

  useEffect(() => {
    void loadQueue(portion);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [portion.type, portion.label]);

  async function grade(gradeValue: "Again" | "Hard" | "Good" | "Easy") {
    if (!current) return;
    setGrading(true);
    try {
      const res = await fetch("/api/flashcards/grade", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ reviewId: current.reviewId, grade: gradeValue }),
      });
      const data = (await res.json()) as { pointsEarned?: number };
      const earned = typeof data.pointsEarned === "number" ? data.pointsEarned : 0;

      const nextProgress: UserProgress = {
        ...progress,
        points: progress.points + earned,
      };
      setProgress(nextProgress);
      saveProgress(nextProgress);

      setIdx((i) => i + 1);
      setRevealed(false);
      setSelectedChoice(null);
    } finally {
      setGrading(false);
    }
  }

  // Auto‑grading for QCM: correct => Good, wrong => Again
  async function handleChoiceClick(choice: string) {
    if (!current || grading) return;
    setSelectedChoice(choice);
    setRevealed(true);

    const isCorrect = choice === current.answer;
    await grade(isCorrect ? "Good" : "Again");
  }

  const isQcm = !!current?.choices && current.choices.length > 0;

  return (
    <div className="space-y-6">
      <section className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Flashcards</h1>
        <p className="text-white/70">
          Focus: {portion.type}: {portion.label}
        </p>
      </section>

      <section className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur space-y-4">
        <div className="flex items-center justify-between gap-4">
          <div className="text-sm text-white/70">
            {loading ? "Loading…" : remaining > 0 ? `${remaining} cards left` : "Queue complete"}
          </div>
          <div className="text-sm text-white/70">
            Points: <span className="tabular-nums text-white/90">{progress.points}</span>
          </div>
        </div>

        <ProgressBar value={doneProgress} label="Session" />

        {loading ? (
          <div className="text-white/70">Generating your queue…</div>
        ) : !current ? (
          <div className="space-y-3">
            <div className="text-lg font-semibold">You’re done for now.</div>
            <p className="text-sm text-white/70">
              Come back later for reviews, or change “last studied” on the dashboard.
            </p>
            <button
              className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10 disabled:opacity-60"
              onClick={() => void loadQueue(portion)}
            >
              Load more
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="rounded-2xl border border-white/10 bg-[#15162c]/40 p-5">
              <div className="text-sm font-medium text-white/70">
                Prompt {isQcm && <span className="text-xs text-white/50">(Multiple choice)</span>}
              </div>
              <div className="mt-2 text-lg text-white">{current.prompt}</div>

              <div className="mt-5 space-y-4">
                {isQcm ? (
                  <>
                    <div className="grid gap-2">
                      {current.choices!.map((choice) => {
                        const isSelected = selectedChoice === choice;
                        const isCorrect = choice === current.answer;
                        const showFeedback = revealed && (isSelected || isCorrect);

                        return (
                          <button
                            key={choice}
                            className={[
                              "rounded-xl border px-4 py-2 text-left text-sm font-semibold disabled:opacity-60",
                              showFeedback && isCorrect
                                ? "border-green-400 bg-green-500/20 text-green-100"
                                : showFeedback && !isCorrect && isSelected
                                ? "border-red-400 bg-red-500/20 text-red-100"
                                : "border-white/15 bg-white/5 text-white hover:bg-white/10",
                            ].join(" ")}
                            disabled={grading}
                            onClick={() => void handleChoiceClick(choice)}
                          >
                            {choice}
                          </button>
                        );
                      })}
                    </div>

                    {revealed && (
                      <div className="text-xs text-white/60">
                        Correct answer: <span className="font-semibold">{current.answer}</span>
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    {!revealed ? (
                      <button
                        className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-[#15162c] hover:bg-white/90 disabled:opacity-60"
                        onClick={() => setRevealed(true)}
                      >
                        Reveal answer
                      </button>
                    ) : (
                      <div className="space-y-3">
                        <div className="text-sm font-medium text-white/70">Answer</div>
                        <div className="text-white/90">{current.answer}</div>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>

            {/* Only show manual grading buttons for non‑QCM cards */}
            {!isQcm && (
              <>
                <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                  <button
                    className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10 disabled:opacity-60"
                    disabled={!revealed || grading}
                    onClick={() => void grade("Again")}
                  >
                    Again
                  </button>
                  <button
                    className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10 disabled:opacity-60"
                    disabled={!revealed || grading}
                    onClick={() => void grade("Hard")}
                  >
                    Hard
                  </button>
                  <button
                    className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10 disabled:opacity-60"
                    disabled={!revealed || grading}
                    onClick={() => void grade("Good")}
                  >
                    Good
                  </button>
                  <button
                    className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-[#15162c] hover:bg-white/90 disabled:opacity-60"
                    disabled={!revealed || grading}
                    onClick={() => void grade("Easy")}
                  >
                    Easy
                  </button>
                </div>

                <div className="text-xs text-white/50">
                  Tip: reveal first, then grade—this drives scheduling and points.
                </div>
              </>
            )}

            {isQcm && (
              <div className="text-xs text-white/50">
                QCM mode: pick an answer; we’ll auto‑grade as Good / Again.
              </div>
            )}
          </div>
        )}
      </section>
    </div>
  );
}
