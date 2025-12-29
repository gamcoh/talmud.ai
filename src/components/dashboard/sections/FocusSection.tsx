import { WidgetCard } from "~/components/ui/WidgetCard";
import { ProgressBar } from "~/components/ui/ProgressBar";
import { PORTION_OPTIONS, type Portion } from "~/lib/mock-data";
import { portionToKey, keyToPortion } from "../constants";

type Props = {
  lastStudied: Portion;
  levelProgress: number;
  onPortionChange: (portion: Portion) => void;
};

export function FocusSection({ lastStudied, levelProgress, onPortionChange }: Props) {
  const selectedKey = portionToKey(lastStudied);

  return (
    <WidgetCard>
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <h3 className="text-lg font-bold text-white">Update Your Focus</h3>
          <p className="text-sm text-white/60">
            Pick what you're currently studying. We'll generate flashcards from it.
          </p>
        </div>

        <div className="w-full md:max-w-sm space-y-4">
          <select
            className="w-full rounded-xl border border-white/10 bg-[var(--surface-card)] px-4 py-3 text-white outline-none focus:border-ocean-400 transition-colors"
            value={selectedKey}
            onChange={(e) => {
              const next = keyToPortion(e.target.value);
              if (next) onPortionChange(next);
            }}
          >
            {PORTION_OPTIONS.map((p) => (
              <option key={portionToKey(p)} value={portionToKey(p)}>
                {p.type}: {p.label}
              </option>
            ))}
          </select>

          <ProgressBar value={levelProgress} label="Progress to next level" variant="ocean" />
        </div>
      </div>
    </WidgetCard>
  );
}
