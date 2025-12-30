"use client";

import { useEffect, useMemo } from "react";
import { ProgressBar } from "~/components/ui/ProgressBar";
import { Button } from "~/components/ui/Button";
import { WidgetCard } from "~/components/ui/WidgetCard";
import { AnimatedNumber } from "~/components/ui/AnimatedNumber";
import { StreakFlame } from "~/components/ui/StreakFlame";
import Link from "next/link";
import confetti from "canvas-confetti";
import {
  useAppStore,
  selectCurrentFlashcard,
  selectFlashcardsProgress,
  selectPoints,
  selectStreak,
  type GeneratedFlashcard,
} from "~/stores/appStore";

// Helper function to shuffle an array
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j]!, shuffled[i]!];
  }
  return shuffled;
}

export default function FlashcardsPage() {
  // Zustand store
  const flashcards = useAppStore((state) => state.flashcards);
  const currentIndex = useAppStore((state) => state.currentIndex);
  const isLoading = useAppStore((state) => state.isLoading);
  const isSubmitting = useAppStore((state) => state.isSubmitting);
  const selectedChoice = useAppStore((state) => state.selectedChoice);
  const showResult = useAppStore((state) => state.showResult);
  const wasCorrect = useAppStore((state) => state.wasCorrect);
  const correctAnswer = useAppStore((state) => state.correctAnswer);
  const earnedPoints = useAppStore((state) => state.earnedPoints);
  const shuffledOptions = useAppStore((state) => state.shuffledOptions);
  const points = useAppStore(selectPoints);
  const streakDays = useAppStore(selectStreak);
  
  // Actions
  const setFlashcards = useAppStore((state) => state.setFlashcards);
  const setLoading = useAppStore((state) => state.setLoading);
  const setSubmitting = useAppStore((state) => state.setSubmitting);
  const selectChoiceAction = useAppStore((state) => state.selectChoice);
  const setResult = useAppStore((state) => state.setResult);
  const nextCard = useAppStore((state) => state.nextCard);
  const setShuffledOptions = useAppStore((state) => state.setShuffledOptions);
  const updateStats = useAppStore((state) => state.updateStats);
  const showPointsNotification = useAppStore((state) => state.showPointsNotification);
  const hidePointsNotification = useAppStore((state) => state.hidePointsNotification);
  
  const current = useAppStore(selectCurrentFlashcard);
  const progress = useMemo(() => {
    const current = currentIndex;
    const total = flashcards.length;
    return {
      current,
      total,
      remaining: Math.max(0, total - current),
      progress: total ? current / total : 0,
    };
  }, [currentIndex, flashcards.length]);

  // Shuffle options when current card changes
  useEffect(() => {
    if (current) {
      setShuffledOptions(shuffleArray(current.options));
    }
  }, [current, setShuffledOptions]);

  async function loadQueue() {
    setLoading(true);

    try {
      // Fetch flashcards and user level in parallel
      const [flashcardsRes, levelRes] = await Promise.all([
        fetch(`/api/flashcards/generated?limit=10`, {
          cache: "no-store",
        }),
        fetch(`/api/gamification/stats`, {
          cache: "no-store",
        }),
      ]);
      
      const flashcardsData = (await flashcardsRes.json()) as { flashcards?: GeneratedFlashcard[] };
      const levelData = (await levelRes.json()) as { level?: { totalPoints: number; currentLevel: number }; streak?: { currentStreak: number } };
      
      setFlashcards(flashcardsData.flashcards ?? []);
      
      // Update stats from server
      if (levelData.level) {
        updateStats({
          points: levelData.level.totalPoints,
          level: levelData.level.currentLevel,
          streakDays: levelData.streak?.currentStreak ?? 0,
        });
      }
    } catch (error) {
      console.error("Failed to load flashcards:", error);
      setFlashcards([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    void loadQueue();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleChoiceClick(choice: string) {
    if (!current || isSubmitting || showResult) return;
    
    // Check answer immediately
    const isCorrect = choice === current.correctAnswer;
    
    // Update UI immediately with correct validation
    selectChoiceAction(choice);
    setResult(isCorrect, current.correctAnswer, isCorrect ? current.points : 0);
    setSubmitting(true);

    // Show confetti immediately for correct answers
    if (isCorrect) {
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#3b82f6", "#60a5fa", "#fbbf24"],
      });
    }

    // Submit to backend
    try {
      const res = await fetch("/api/flashcards/generated", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          flashcardId: current.id,
          selectedAnswer: choice,
        }),
      });
      
      const data = await res.json() as {
        success?: boolean;
        wasCorrect?: boolean;
        correctAnswer?: string;
        pointsEarned?: number;
        newTotalPoints?: number;
        currentLevel?: number;
      };
      
      // Update stats from server response
      if (data.newTotalPoints !== undefined) {
        updateStats({
          points: data.newTotalPoints,
          level: data.currentLevel ?? 1,
        });
      }

      // Auto-advance after 2 seconds
      setTimeout(() => {
        nextCard();
      }, 2000);
    } catch (error) {
      console.error("Failed to submit answer:", error);
      // Still advance even on error
      setTimeout(() => {
        nextCard();
      }, 2000);
    }
  }

  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      {/* Header */}
      <section className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white">AI Generated Flashcards</h1>
          <p className="text-white/60 mt-1">
            {current ? `${current.ref}` : "Your personalized study session"}
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/5 border border-white/10">
            <StreakFlame days={streakDays} size="sm" />
          </div>
          <div className="px-4 py-2 rounded-2xl bg-gradient-to-r from-ocean-500/20 to-sage-500/20 border border-ocean-400/20">
            <span className="text-sm text-white/60">Points: </span>
            <span className="font-bold text-white tabular-nums">
              <AnimatedNumber value={points} />
            </span>
          </div>
        </div>
      </section>

      {/* Progress Bar */}
      <WidgetCard hover={false}>
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-white/60">
            {isLoading ? "Loading..." : progress.remaining > 0 ? `${progress.remaining} cards remaining` : "Session complete!"}
          </span>
          <span className="text-sm font-medium text-white">
            {progress.current} / {progress.total}
          </span>
        </div>
        <ProgressBar value={progress.progress} showPercent={false} variant="ocean" />
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
      {isLoading ? (
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
            <Button variant="primary" onClick={() => void loadQueue()}>
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
              <span className={`px-2 py-1 text-xs font-medium rounded-lg ${
                current.difficulty === "EASY" 
                  ? "bg-green-500/20 text-green-300" 
                  : current.difficulty === "MEDIUM"
                  ? "bg-yellow-500/20 text-yellow-300"
                  : "bg-red-500/20 text-red-300"
              }`}>
                {current.difficulty} • {current.points} pts
              </span>
              <span className="text-xs text-white/40">
                Card {progress.current + 1} of {progress.total}
              </span>
            </div>
            <div className="text-xl font-semibold text-white leading-relaxed">
              {current.question}
            </div>
          </div>

          {/* Answer Section - Multiple Choice */}
          <div className="space-y-4">
            <div className="grid gap-3">
              {shuffledOptions.map((choice) => {
                const isSelected = selectedChoice === choice;
                const isCorrectAnswer = showResult && choice === correctAnswer;
                const showFeedback = showResult;

                return (
                  <button
                    key={choice}
                    className={`
                      w-full text-left px-5 py-4 rounded-2xl border-2 font-medium transition-all duration-200
                      ${showFeedback && isCorrectAnswer
                        ? "border-green-400 bg-green-500/20 text-green-100 scale-[1.02]"
                        : showFeedback && isSelected && !wasCorrect
                        ? "border-red-400 bg-red-500/20 text-red-100"
                        : "border-white/10 bg-white/5 text-white hover:bg-white/10 hover:border-white/20"
                      }
                      disabled:cursor-not-allowed
                    `}
                      disabled={isSubmitting || showResult}
                    onClick={() => void handleChoiceClick(choice)}
                  >
                    {choice}
                    {showFeedback && isCorrectAnswer && <span className="float-right">✓</span>}
                    {showFeedback && isSelected && !wasCorrect && <span className="float-right">✗</span>}
                  </button>
                );
              })}
            </div>

            {showResult && (
              <div className={`p-4 rounded-2xl ${wasCorrect ? "bg-green-500/10 border border-green-500/20" : "bg-red-500/10 border border-red-500/20"}`}>
                <div className="text-sm font-medium mb-1">
                  {wasCorrect ? `🎉 Correct! +${current.points} points` : "❌ Not quite..."}
                </div>
                {!wasCorrect && correctAnswer && (
                  <div className="text-sm text-white/70">
                    The correct answer is: <span className="font-semibold text-white">{correctAnswer}</span>
                  </div>
                )}
              </div>
            )}
          </div>
        </WidgetCard>
      )}

      {/* Keyboard Shortcuts Hint */}
      <div className="text-center text-xs text-white/40">
        Click an answer to submit
      </div>
    </div>
  );
}
