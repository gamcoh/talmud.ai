type AchievementBadgeProps = {
  icon: string;
  title: string;
  description: string;
  unlocked?: boolean;
  progress?: number; // 0-1 for locked badges
};

export function AchievementBadge({ 
  icon, 
  title, 
  description, 
  unlocked = false,
  progress = 0,
}: AchievementBadgeProps) {
  return (
    <div 
      className={`
        relative rounded-2xl p-4 transition-all duration-300
        ${unlocked 
          ? "bg-gradient-to-br from-gold-500/20 to-sand-500/20 border border-gold-400/30 hover:scale-105" 
          : "bg-white/5 border border-white/10 opacity-60"
        }
      `}
    >
      {unlocked && (
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-gold-400 rounded-full flex items-center justify-center">
          <svg className="w-2.5 h-2.5 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      )}
      
      <div className="text-3xl mb-2 filter grayscale-0">
        {unlocked ? icon : "🔒"}
      </div>
      <div className={`font-semibold text-sm ${unlocked ? "text-white" : "text-white/50"}`}>
        {title}
      </div>
      <div className="text-xs text-white/40 mt-1">{description}</div>
      
      {!unlocked && progress > 0 && (
        <div className="mt-2 h-1 bg-white/10 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gold-400/50 rounded-full"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
      )}
    </div>
  );
}
