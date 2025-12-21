type ProgressBarProps = {
  value: number; // 0..1
  label?: string;
};

export function ProgressBar({ value, label }: ProgressBarProps) {
  const clamped = Math.max(0, Math.min(1, value));
  const percent = Math.round(clamped * 100);

  return (
    <div className="space-y-2">
      {label ? (
        <div className="flex items-center justify-between text-sm text-white/80">
          <span>{label}</span>
          <span className="tabular-nums">{percent}%</span>
        </div>
      ) : null}

      <div
        role="progressbar"
        aria-label={label ?? "Progress"}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={percent}
        className="h-2 w-full rounded-full bg-white/10"
      >
        <div
          className="h-2 rounded-full bg-gradient-to-r from-fuchsia-400 to-indigo-400"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
