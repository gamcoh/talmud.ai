"use client";

import { AnimatedNumber } from "./AnimatedNumber";

type DailyGoalWidgetProps = {
  currentMinutes: number;
  goalMinutes: number;
  lessonsCompleted: number;
};

export function DailyGoalWidget({
  currentMinutes,
  goalMinutes,
  lessonsCompleted,
}: DailyGoalWidgetProps) {
  const progress = Math.min(currentMinutes / goalMinutes, 1);
  const isComplete = progress >= 1;
  const radius = 58;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - progress);

  return (
    <div className="rounded-3xl bg-[#1a2028] border border-white/5 p-6">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-bold text-white">Today&apos;s Goal</h3>
          <p className="text-sm text-white/50">Keep up the momentum!</p>
        </div>
        {isComplete && (
          <div className="animate-pop-in">
            <span className="text-2xl">🎉</span>
          </div>
        )}
      </div>

      <div className="flex items-center gap-6">
        {/* Circular progress */}
        <div className="relative" style={{ width: 140, height: 140 }}>
          <svg className="absolute inset-0 -rotate-90" viewBox="0 0 140 140">
            <circle
              cx="70"
              cy="70"
              r={radius}
              fill="none"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="12"
            />
            <circle
              cx="70"
              cy="70"
              r={radius}
              fill="none"
              stroke={isComplete ? "url(#goalComplete)" : "url(#goalProgress)"}
              strokeWidth="12"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              className="transition-all duration-700 ease-out"
            />
            <defs>
              <linearGradient id="goalProgress" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#7a8f7a" />
              </linearGradient>
              <linearGradient id="goalComplete" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#facc15" />
                <stop offset="100%" stopColor="#f97316" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-3xl font-bold text-white">
              <AnimatedNumber value={currentMinutes} />
            </div>
            <div className="text-sm text-white/50">/ {goalMinutes} min</div>
          </div>
        </div>

        {/* Stats */}
        <div className="flex-1 space-y-4">
          <div>
            <div className="text-2xl font-bold text-white">
              <AnimatedNumber value={lessonsCompleted} />
            </div>
            <div className="text-sm text-white/50">Lessons completed</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white">
              {Math.round(progress * 100)}%
            </div>
            <div className="text-sm text-white/50">Goal progress</div>
          </div>
        </div>
      </div>

      {!isComplete && (
        <div className="mt-4 p-3 rounded-xl bg-ocean-500/10 border border-ocean-400/20">
          <p className="text-sm text-ocean-300">
            🎯 {goalMinutes - currentMinutes} more minutes to reach your goal!
          </p>
        </div>
      )}

      {isComplete && (
        <div className="mt-4 p-3 rounded-xl bg-gold-500/10 border border-gold-400/20">
          <p className="text-sm text-gold-300">
            ✨ Amazing! You&apos;ve completed your daily goal!
          </p>
        </div>
      )}
    </div>
  );
}
