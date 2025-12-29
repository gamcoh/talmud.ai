type StreakFlameProps = {
  days: number;
  size?: "sm" | "md" | "lg";
};

export function StreakFlame({ days, size = "md" }: StreakFlameProps) {
  const sizes = {
    sm: { flame: 24, text: "text-sm" },
    md: { flame: 40, text: "text-xl" },
    lg: { flame: 56, text: "text-3xl" },
  };

  const { flame, text } = sizes[size];
  const isActive = days > 0;

  return (
    <div className="flex items-center gap-2">
      <div
        className={`relative ${isActive ? "animate-bounce-soft" : ""}`}
        style={{ width: flame, height: flame }}
      >
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <defs>
            <linearGradient id="flameGradient" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#f97316" />
              <stop offset="50%" stopColor="#facc15" />
              <stop offset="100%" stopColor="#fef08a" />
            </linearGradient>
          </defs>
          <path
            d="M12 2C12 2 8 6 8 10C8 12 9 14 10 15C9 14.5 8 13 8 11C8 9 10 7 10 7C10 7 9 10 10 12C11 14 12 15 12 17C12 15 13 14 14 12C15 10 14 7 14 7C14 7 16 9 16 11C16 13 15 14.5 14 15C15 14 16 12 16 10C16 6 12 2 12 2Z"
            fill={isActive ? "url(#flameGradient)" : "#4b5563"}
            className={isActive ? "drop-shadow-lg" : ""}
          />
        </svg>
        {isActive && (
          <div className="absolute inset-0 animate-pulse-glow rounded-full opacity-50" />
        )}
      </div>
      <div className={`font-bold ${text} ${isActive ? "text-orange-400" : "text-gray-500"}`}>
        {days}
      </div>
    </div>
  );
}
