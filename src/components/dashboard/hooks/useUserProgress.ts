import { useEffect, useState } from "react";
import { DEFAULT_PROGRESS, type Portion, type UserProgress } from "~/lib/mock-data";
import { STORAGE_KEY } from "../constants";

export function useUserProgress() {
  const [progress, setProgress] = useState<UserProgress>(DEFAULT_PROGRESS);

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

  return { progress, setProgress };
}
