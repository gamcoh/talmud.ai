import type { Portion } from "~/lib/mock-data";

export const STORAGE_KEY = "talmud.ai:user-progress:v1";
export const USER_KEY_STORAGE = "talmud.ai:user-key:v1";
export const PAGE_SIZE = 10;

export function portionToKey(p: Portion) {
  return `${p.type}:${p.label}`;
}

export function keyToPortion(key: string): Portion | null {
  const [type, ...rest] = key.split(":");
  const label = rest.join(":");
  if (!type || !label) return null;
  if (type !== "Parasha" && type !== "Daf" && type !== "Perek") return null;
  return { type, label };
}

export function getOrCreateUserKey() {
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

export function generateWeeklyData() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const days = [];

  const startOfWeek = new Date(today);
  startOfWeek.setDate(today.getDate() - today.getDay());

  for (let i = 0; i < 7; i++) {
    const date = new Date(startOfWeek);
    date.setDate(startOfWeek.getDate() + i);
    const isPast = date < today;
    const isToday = date.getTime() === today.getTime();

    days.push({
      date,
      studied: isPast ? Math.random() > 0.3 : isToday ? true : false,
      minutes: isPast || isToday ? Math.floor(Math.random() * 30) + 5 : 0,
    });
  }

  return days;
}
