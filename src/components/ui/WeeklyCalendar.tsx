"use client";

import { useState, useEffect } from "react";

type DayData = {
  date: Date;
  studied: boolean;
  minutes: number;
};

type WeeklyCalendarProps = {
  days: DayData[];
  currentStreak: number;
};

const DAY_NAMES = ["S", "M", "T", "W", "T", "F", "S"];

export function WeeklyCalendar({ days, currentStreak }: WeeklyCalendarProps) {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="rounded-3xl bg-[#1a2028] border border-white/5 p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-bold text-white">This Week</h3>
            <p className="text-sm text-white/50">Loading...</p>
          </div>
        </div>
        <div className="grid grid-cols-7 gap-2">
          {DAY_NAMES.map((name, i) => (
            <div key={i} className="text-center text-xs text-white/40 font-medium pb-2">
              {name}
            </div>
          ))}
          {Array.from({ length: 7 }).map((_, i) => (
            <div key={i} className="relative aspect-square rounded-xl flex flex-col items-center justify-center bg-white/5" />
          ))}
        </div>
      </div>
    );
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return (
    <div className="rounded-3xl bg-[#1a2028] border border-white/5 p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-bold text-white">This Week</h3>
          <p className="text-sm text-white/50">{currentStreak} day streak 🔥</p>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-2">
        {/* Day names */}
        {DAY_NAMES.map((name, i) => (
          <div key={i} className="text-center text-xs text-white/40 font-medium pb-2">
            {name}
          </div>
        ))}

        {/* Day cells */}
        {days.map((day, i) => {
          const isToday = day.date.getTime() === today.getTime();
          const isFuture = day.date > today;

          return (
            <div
              key={i}
              className={`
                relative aspect-square rounded-xl flex flex-col items-center justify-center transition-all duration-200
                ${isToday ? "ring-2 ring-ocean-400" : ""}
                ${isFuture 
                  ? "bg-white/5 opacity-40" 
                  : day.studied 
                    ? "bg-gradient-to-br from-ocean-500/30 to-sage-500/30 hover:scale-110" 
                    : "bg-white/5"
                }
              `}
            >
              <span className={`text-sm font-medium ${day.studied && !isFuture ? "text-white" : "text-white/40"}`}>
                {day.date.getDate()}
              </span>
              {day.studied && !isFuture && (
                <div className="absolute -bottom-0.5 w-1.5 h-1.5 rounded-full bg-ocean-400" />
              )}
            </div>
          );
        })}
      </div>

      {/* Weekly summary */}
      <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
        <div className="text-sm text-white/60">
          {days.filter(d => d.studied).length} / 7 days studied
        </div>
        <div className="text-sm text-white/60">
          {days.reduce((acc, d) => acc + d.minutes, 0)} total minutes
        </div>
      </div>
    </div>
  );
}
