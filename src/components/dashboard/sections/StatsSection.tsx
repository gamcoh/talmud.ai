import { StatCard } from "~/components/ui/StatCard";
import { StreakFlame } from "~/components/ui/StreakFlame";
import { LevelBadge } from "~/components/ui/LevelBadge";
import { AnimatedNumber } from "~/components/ui/AnimatedNumber";
import type { UserProgress } from "~/lib/mock-data";

type Props = {
  progress: UserProgress;
  levelInfo: { level: number; progress: number };
};

export function StatsSection({ progress, levelInfo }: Props) {
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
        subtitle={`${Math.round(levelInfo.progress * 100)}% to next`}
        icon={<LevelBadge level={levelInfo.level} progress={levelInfo.progress} size="md" />}
      />

      <StatCard
        label="Current Focus"
        value={progress.lastStudied.label}
        subtitle={progress.lastStudied.type}
        variant="warm"
      />
    </section>
  );
}
