export type PortionType = "Parasha" | "Daf" | "Perek";

export type Portion = {
  type: PortionType;
  label: string; // e.g. "Vayigash" / "Berakhot 2" / "Avot 1"
};

export type UserProgress = {
  points: number;
  streakDays: number;
  lastStudied: Portion;
};

export const PORTION_OPTIONS: Portion[] = [
  { type: "Parasha", label: "Bereshit" },
  { type: "Parasha", label: "Noach" },
  { type: "Parasha", label: "Lech-Lecha" },
  { type: "Parasha", label: "Vayigash" },
  { type: "Daf", label: "Berakhot 2" },
  { type: "Daf", label: "Shabbat 21" },
  { type: "Perek", label: "Pirkei Avot 1" },
  { type: "Perek", label: "Pirkei Avot 2" },
];

export const DEFAULT_PROGRESS: UserProgress = {
  points: 1240,
  streakDays: 6,
  lastStudied: { type: "Daf", label: "Berakhot 2" },
};

// Simple, game-like leveling curve
export function pointsForLevel(level: number) {
  // level 1 starts at 0; each level costs a bit more
  return Math.floor(250 * Math.pow(level - 1, 1.25));
}

export function getLevelFromPoints(points: number) {
  let level = 1;
  while (points >= pointsForLevel(level + 1)) level++;
  const currentLevelBase = pointsForLevel(level);
  const nextLevelBase = pointsForLevel(level + 1);
  const intoLevel = points - currentLevelBase;
  const levelSpan = nextLevelBase - currentLevelBase;
  const progress = levelSpan === 0 ? 0 : intoLevel / levelSpan;
  return { level, progress: Math.max(0, Math.min(1, progress)) };
}
