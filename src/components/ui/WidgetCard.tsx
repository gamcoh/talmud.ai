import { type ReactNode } from "react";

type WidgetCardProps = {
  children: ReactNode;
  variant?: "default" | "highlight" | "warm" | "glass";
  hover?: boolean;
  className?: string;
  onClick?: () => void;
};

export function WidgetCard({
  children,
  variant = "default",
  hover = true,
  className = "",
  onClick,
}: WidgetCardProps) {
  const baseStyles = "rounded-3xl p-6 transition-all duration-300";

  const variants = {
    default: "bg-[#1a2028] border border-white/5",
    highlight: "bg-gradient-to-br from-ocean-500/20 to-sage-500/20 border border-ocean-400/20",
    warm: "bg-gradient-to-br from-sand-500/20 to-gold-500/20 border border-sand-400/20",
    glass: "glass",
  };

  const hoverStyles = hover
    ? "hover:translate-y-[-4px] hover:shadow-xl hover:shadow-ocean-500/10 cursor-pointer"
    : "";

  return (
    <div
      className={`${baseStyles} ${variants[variant]} ${hoverStyles} ${className}`}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {children}
    </div>
  );
}
