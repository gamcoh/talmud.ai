type LevelBadgeProps = {
  level: number;
  progress: number; // 0-1
  size?: "sm" | "md" | "lg";
};

export function LevelBadge({ level, progress, size = "md" }: LevelBadgeProps) {
  const sizes = {
    sm: { outer: 48, stroke: 3, text: "text-sm" },
    md: { outer: 72, stroke: 4, text: "text-xl" },
    lg: { outer: 96, stroke: 5, text: "text-3xl" },
  };

  const { outer, stroke, text } = sizes[size];
  const radius = (outer - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - progress);

  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: outer, height: outer }}>
      {/* Background ring */}
      <svg className="absolute inset-0 -rotate-90" viewBox={`0 0 ${outer} ${outer}`}>
        <circle
          cx={outer / 2}
          cy={outer / 2}
          r={radius}
          fill="none"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth={stroke}
        />
        {/* Progress ring */}
        <circle
          cx={outer / 2}
          cy={outer / 2}
          r={radius}
          fill="none"
          stroke="url(#levelGradient)"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="transition-all duration-700 ease-out"
        />
        <defs>
          <linearGradient id="levelGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#7a8f7a" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Level number */}
      <div className={`font-bold ${text} text-white z-10`}>
        {level}
      </div>
    </div>
  );
}
