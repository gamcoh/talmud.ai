type ProgressBarProps = {
  value: number; // 0..1
  label?: string;
  variant?: "default" | "ocean" | "warm" | "sage";
  showPercent?: boolean;
  animated?: boolean;
};

export function ProgressBar({ 
  value, 
  label, 
  variant = "default",
  showPercent = true,
  animated = true,
}: ProgressBarProps) {
  const clamped = Math.max(0, Math.min(1, value));
  const percent = Math.round(clamped * 100);

  const gradients = {
    default: "bg-gradient-to-r from-ocean-400 to-sage-400",
    ocean: "bg-gradient-to-r from-ocean-500 to-ocean-300",
    warm: "bg-gradient-to-r from-sand-500 to-gold-400",
    sage: "bg-gradient-to-r from-sage-500 to-sage-300",
  };

  return (
    <div className="space-y-2">
      {(label || showPercent) && (
        <div className="flex items-center justify-between text-sm">
          {label && <span className="text-white/70">{label}</span>}
          {showPercent && (
            <span className="tabular-nums text-white/90 font-medium">{percent}%</span>
          )}
        </div>
      )}

      <div
        role="progressbar"
        aria-label={label ?? "Progress"}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={percent}
        className="h-3 w-full rounded-full bg-white/5 overflow-hidden"
      >
        <div
          className={`h-full rounded-full ${gradients[variant]} ${animated ? "transition-all duration-700 ease-out" : ""}`}
          style={{ width: `${percent}%` }}
        >
          {animated && (
            <div className="w-full h-full animate-shimmer" />
          )}
        </div>
      </div>
    </div>
  );
}
