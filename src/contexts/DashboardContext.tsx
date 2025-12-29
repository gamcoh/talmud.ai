"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import type { StudiedText } from "~/components/dashboard/types";

type UserStats = {
  points: number;
  streakDays: number;
  level: number;
  totalTextsStudied: number;
};

type DashboardState = {
  stats: UserStats;
  studiedTexts: StudiedText[];
  totalCount: number;
  isLoading: boolean;
};

type DashboardContextType = {
  state: DashboardState;
  optimisticAddStudiedText: (text: StudiedText) => void;
  optimisticAddPoints: (points: number) => void;
  confirmAddStudiedText: (texts: StudiedText[]) => void;
  rollbackAddStudiedText: (tempId: string) => void;
  setStudiedTexts: (texts: StudiedText[], total: number) => void;
  setStats: (stats: UserStats) => void;
  incrementTotalCount: (amount: number) => void;
};

const DashboardContext = createContext<DashboardContextType | null>(null);

export function DashboardProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<DashboardState>({
    stats: {
      points: 0,
      streakDays: 0,
      level: 1,
      totalTextsStudied: 0,
    },
    studiedTexts: [],
    totalCount: 0,
    isLoading: true,
  });

  const optimisticAddStudiedText = useCallback((text: StudiedText) => {
    setState((prev) => ({
      ...prev,
      studiedTexts: [text, ...prev.studiedTexts],
      totalCount: prev.totalCount + 1,
      stats: {
        ...prev.stats,
        totalTextsStudied: prev.stats.totalTextsStudied + 1,
      },
    }));
  }, []);

  const optimisticAddPoints = useCallback((points: number) => {
    setState((prev) => ({
      ...prev,
      stats: {
        ...prev.stats,
        points: prev.stats.points + points,
      },
    }));
  }, []);

  const confirmAddStudiedText = useCallback((texts: StudiedText[]) => {
    setState((prev) => {
      // Remove temporary items and add confirmed ones
      const nonTempTexts = prev.studiedTexts.filter((t) => !t.id.startsWith("temp-"));
      const newTexts = texts.filter((t) => !nonTempTexts.some((nt) => nt.id === t.id));
      
      return {
        ...prev,
        studiedTexts: [...newTexts, ...nonTempTexts],
      };
    });
  }, []);

  const rollbackAddStudiedText = useCallback((tempId: string) => {
    setState((prev) => ({
      ...prev,
      studiedTexts: prev.studiedTexts.filter((t) => t.id !== tempId),
      totalCount: Math.max(0, prev.totalCount - 1),
      stats: {
        ...prev.stats,
        totalTextsStudied: Math.max(0, prev.stats.totalTextsStudied - 1),
      },
    }));
  }, []);

  const setStudiedTexts = useCallback((texts: StudiedText[], total: number) => {
    setState((prev) => ({
      ...prev,
      studiedTexts: texts,
      totalCount: total,
      isLoading: false,
    }));
  }, []);

  const setStats = useCallback((stats: UserStats) => {
    setState((prev) => ({
      ...prev,
      stats,
      isLoading: false,
    }));
  }, []);

  const incrementTotalCount = useCallback((amount: number) => {
    setState((prev) => ({
      ...prev,
      totalCount: prev.totalCount + amount,
    }));
  }, []);

  return (
    <DashboardContext.Provider
      value={{
        state,
        optimisticAddStudiedText,
        optimisticAddPoints,
        confirmAddStudiedText,
        rollbackAddStudiedText,
        setStudiedTexts,
        setStats,
        incrementTotalCount,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}

export function useDashboard() {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error("useDashboard must be used within DashboardProvider");
  }
  return context;
}
