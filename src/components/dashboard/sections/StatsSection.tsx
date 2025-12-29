import { StatCard } from "~/components/ui/StatCard";
import { StreakFlame } from "~/components/ui/StreakFlame";
import { LevelBadge } from "~/components/ui/LevelBadge";
import { AnimatedNumber } from "~/components/ui/AnimatedNumber";
import type { UserProgress } from "~/lib/mock-data";
import type { StudiedText } from "../types";

type Props = {
  progress: UserProgress;
  levelInfo: { level: number; progress: number };
  lastStudiedText?: StudiedText | null;
};

export function StatsSection({ progress, levelInfo, lastStudiedText }: Props) {
  const formatRef = (ref: string) => {
    return ref.replace(/_/g, ' ').replace(/\./g, ' ');
  };

  const currentFocus = lastStudiedText 
    ? {
        label: formatRef(lastStudiedText.ref),
        type: lastStudiedText.title || "Sefaria Text",
        url: `https://www.sefaria.org/${encodeURIComponent(lastStudiedText.ref.replace(/:/g, '.'))}`
      }
    : {
        label: progress.lastStudied.label,
        type: progress.lastStudied.type,
        url: null
      };

  return (
    <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <StatCard
        label="Streak"
        value={<><AnimatedNumber value={progress.streakDays} /> days</>}
        icon={<StreakFlame days={progress.streakDays} size="lg" />}
        variant="highlight"
      />

      <StatCard
        label="Total Points"
        value={<AnimatedNumber value={progress.points} />}
        icon={<span className="text-3xl">⭐</span>}
      />

      <StatCard
        label="Level"
        value={levelInfo.level}
        hint={`${Math.round(levelInfo.progress * 100)}% to next`}
        icon={<LevelBadge level={levelInfo.level} progress={levelInfo.progress} size="md" />}
      />

      <StatCard
        label="Current Focus"
        value={
          currentFocus.url ? (
            <a
              href={currentFocus.url}
              target="_blank"
              rel="noreferrer"
              className="hover:text-ocean-300 transition-colors inline-flex items-center gap-1.5 group"
            >
              {currentFocus.label}
              <span className="text-base opacity-50 group-hover:opacity-100 transition-opacity">→</span>
            </a>
          ) : (
            currentFocus.label
          )
        }
        hint={currentFocus.type}
        variant="warm"
      />
    </section>
  );
}
