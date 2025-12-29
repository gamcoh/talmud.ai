type LogoProps = {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
};

export function Logo({ size = "md", showText = true }: LogoProps) {
  const sizes = {
    sm: { icon: 28, text: "text-lg" },
    md: { icon: 36, text: "text-xl" },
    lg: { icon: 48, text: "text-3xl" },
  };

  const { icon, text } = sizes[size];

  return (
    <div className="flex items-center gap-2 group">
      {/* Stylized book/scroll icon */}
      <div 
        className="relative flex items-center justify-center rounded-xl bg-gradient-to-br from-ocean-400 to-sage-400 p-1.5 transition-transform duration-300 group-hover:scale-110"
        style={{ width: icon, height: icon }}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="w-full h-full"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          {/* Open book / scroll shape */}
          <path
            d="M12 6.5C12 6.5 9 4 5 4C4 4 3 4.5 3 5.5V18.5C3 19.5 4 20 5 20C9 20 12 17.5 12 17.5M12 6.5C12 6.5 15 4 19 4C20 4 21 4.5 21 5.5V18.5C21 19.5 20 20 19 20C15 20 12 17.5 12 17.5M12 6.5V17.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white"
          />
          {/* Hebrew letter-inspired accent */}
          <path
            d="M8 9H6M8 12H6M8 15H6M18 9H16M18 12H16M18 15H16"
            strokeLinecap="round"
            className="text-white/70"
          />
        </svg>
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-ocean-400/50 to-sage-400/50 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
      </div>

      {showText && (
        <span className={`font-bold tracking-tight ${text} bg-gradient-to-r from-ocean-300 to-sage-300 bg-clip-text text-transparent`}>
          talmud<span className="text-sand-400">.ai</span>
        </span>
      )}
    </div>
  );
}
