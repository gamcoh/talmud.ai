"use client";

import { useEffect, useMemo, useState } from "react";
import type { Portion, UserProgress } from "~/lib/mock-data";
import { DEFAULT_PROGRESS } from "~/lib/mock-data";
import { ProgressBar } from "~/components/ui/ProgressBar";
import { Button } from "~/components/ui/Button";
import { WidgetCard } from "~/components/ui/WidgetCard";
import { AnimatedNumber } from "~/components/ui/AnimatedNumber";
import { StreakFlame } from "~/components/ui/StreakFlame";
import Link from "next/link";

const STORAGE_KEY = "talmud.ai:user-progress:v1";

type QueueItem = {
  reviewId: string;
  prompt: string;
  answer: string;
  portion: Portion;
  choices?: string[];
};

function loadProgress(): UserProgress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_PROGRESS;
    const parsed = JSON.parse(raw) as Partial<UserProgress> | null;
    if (!parsed) return DEFAULT_PROGRESS;
    return {
      points: typeof parsed.points === "number" ? parsed.points : DEFAULT_PROGRESS.points,
      streakDays: typeof parsed.streakDays === "number" ? parsed.streakDays : DEFAULT_PROGRESS.streakDays,
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
  } catch {}
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
  const [earnedPoints, setEarnedPoints] = useState<number | null>(null);

  const current = items[idx] ?? null;
  const remaining = useMemo(() => Math.max(0, items.length - idx), [items.length, idx]);
  const doneProgress = useMemo(() => (items.length ? idx / items.length : 0), [idx, items.length]);

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

    const rawItems = Array.isArray(data.items) ? data.items : [];
    const withQcm = rawItems.map((it, i, all) => {
      if (Array.isArray(it.choices) && it.choices.length > 1) return it;

      const distractors = Array.from(
        new Set(
          all
            .filter((x) => x.reviewId !== it.reviewId)
            .map((x) => x.answer)
            .filter((a) => typeof a === "string" && a.trim().length > 0)
        )
      ).slice(0, 3);

      if (distractors.length < 2) return it;

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

      setEarnedPoints(earned);
      setTimeout(() => setEarnedPoints(null), 1500);

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

  async function handleChoiceClick(choice: string) {
    if (!current || grading) return;
    setSelectedChoice(choice);
    setRevealed(true);

    const isCorrect = choice === current.answer;
    await grade(isCorrect ? "Good" : "Again");
  }

  const isQcm = !!current?.choices && current.choices.length > 0;

  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      {/* Header */}
      <section className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white">Flashcards</h1>
          <p className="text-white/60 mt-1">
            {portion.type}: {portion.label}
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/5 border border-white/10">
            <StreakFlame days={progress.streakDays} size="sm" />
          </div>
          <div className="px-4 py-2 rounded-2xl bg-gradient-to-r from-ocean-500/20 to-sage-500/20 border border-ocean-400/20">
            <span className="text-sm text-white/60">Points: </span>
            <span className="font-bold text-white tabular-nums">
              <AnimatedNumber value={progress.points} />
            </span>
          </div>
        </div>
      </section>

      {/* Progress Bar */}
      <WidgetCard hover={false}>
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-white/60">
            {loading ? "Loading..." : remaining > 0 ? `${remaining} cards remaining` : "Session complete!"}
          </span>
          <span className="text-sm font-medium text-white">
            {idx} / {items.length}
          </span>
        </div>
        <ProgressBar value={doneProgress} showPercent={false} variant="ocean" />
      </WidgetCard>

      {/* Points Earned Toast */}
      {earnedPoints !== null && earnedPoints > 0 && (
        <div className="fixed top-24 right-4 animate-pop-in z-50">
          <div className="px-4 py-2 rounded-2xl bg-gradient-to-r from-gold-500 to-sand-500 text-black font-bold shadow-lg">
            +{earnedPoints} points! ⭐
          </div>
        </div>
      )}

      {/* Main Card Area */}
      {loading ? (
        <WidgetCard hover={false} className="py-16 text-center">
          <div className="animate-pulse">
            <div className="text-4xl mb-4">📚</div>
            <div className="text-white/60">Generating your flashcards...</div>
          </div>
        </WidgetCard>
      ) : !current ? (
        <WidgetCard variant="highlight" hover={false} className="py-12 text-center">
          <div className="text-5xl mb-4">🎉</div>
          <h2 className="text-2xl font-bold text-white mb-2">Session Complete!</h2>
          <p className="text-white/60 mb-6">
            Great job! You've finished all the flashcards for this session.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="primary" onClick={() => void loadQueue(portion)}>
              Start New Session
            </Button>
            <Link href="/dashboard">
              <Button variant="secondary">Back to Dashboard</Button>
            </Link>
          </div>
        </WidgetCard>
      ) : (
        <WidgetCard hover={false} className="overflow-visible">
          {/* Question */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2 py-1 text-xs font-medium rounded-lg bg-ocean-500/20 text-ocean-300">
                {isQcm ? "Multiple Choice" : "Free Recall"}
              </span>
              <span className="text-xs text-white/40">
                Card {idx + 1} of {items.length}
              </span>
            </div>
            <div className="text-xl font-semibold text-white leading-relaxed">
              {current.prompt}
            </div>
          </div>

          {/* Answer Section */}
          <div className="space-y-4">
            {isQcm ? (
              <>
                <div className="grid gap-3">
                  {current.choices!.map((choice) => {
                    const isSelected = selectedChoice === choice;
                    const isCorrect = choice === current.answer;
                    const showFeedback = revealed && (isSelected || isCorrect);

                    return (
                      <button
                        key={choice}
                        className={`
                          w-full text-left px-5 py-4 rounded-2xl border-2 font-medium transition-all duration-200
                          ${showFeedback && isCorrect
                            ? "border-green-400 bg-green-500/20 text-green-100 scale-[1.02]"
                            : showFeedback && !isCorrect && isSelected
                            ? "border-red-400 bg-red-500/20 text-red-100"
                            : "border-white/10 bg-white/5 text-white hover:bg-white/10 hover:border-white/20"
                          }
                          disabled:cursor-not-allowed
                        `}
                        disabled={grading || revealed}
                        onClick={() => void handleChoiceClick(choice)}
                      >
                        {choice}
                        {showFeedback && isCorrect && <span className="float-right">✓</span>}
                        {showFeedback && !isCorrect && isSelected && <span className="float-right">✗</span>}
                      </button>
                    );
                  })}
                </div>

                {revealed && (
                  <div className={`p-4 rounded-2xl ${selectedChoice === current.answer ? "bg-green-500/10 border border-green-500/20" : "bg-red-500/10 border border-red-500/20"}`}>
                    <div className="text-sm font-medium mb-1">
                      {selectedChoice === current.answer ? "🎉 Correct!" : "❌ Not quite..."}
                    </div>
                    <div className="text-sm text-white/70">
                      The answer is: <span className="font-semibold text-white">{current.answer}</span>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <>
                {!revealed ? (
                  <Button variant="primary" size="lg" className="w-full" onClick={() => setRevealed(true)}>
                    Reveal Answer
                  </Button>
                ) : (
                  <div className="space-y-4">
                    <div className="p-5 rounded-2xl bg-gradient-to-br from-sage-500/10 to-ocean-500/10 border border-sage-400/20">
                      <div className="text-sm font-medium text-white/60 mb-2">Answer</div>
                      <div className="text-lg text-white">{current.answer}</div>
                    </div>

                    <div className="space-y-2">
                      <div className="text-sm text-white/60 text-center">How well did you know this?</div>
                      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                        <Button
                          variant="danger"
                          disabled={grading}
                          onClick={() => void grade("Again")}
                        >
                          Again
                        </Button>
                        <Button
                          variant="secondary"
                          disabled={grading}
                          onClick={() => void grade("Hard")}
                        >
                          Hard
                        </Button>
                        <Button
                          variant="secondary"
                          disabled={grading}
                          onClick={() => void grade("Good")}
                        >
                          Good
                        </Button>
                        <Button
                          variant="warm"
                          disabled={grading}
                          onClick={() => void grade("Easy")}
                        >
                          Easy
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </WidgetCard>
      )}

      {/* Keyboard Shortcuts Hint */}
      <div className="text-center text-xs text-white/40">
        {isQcm
          ? "Click an answer to submit"
          : revealed
          ? "Choose how well you knew the answer"
          : "Press Space or Enter to reveal"}
      </div>
    </div>
  );
}
