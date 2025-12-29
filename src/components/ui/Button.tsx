import { type ButtonHTMLAttributes, type ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost" | "warm" | "danger";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  isLoading = false,
  leftIcon,
  rightIcon,
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f1419] disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-gradient-to-r from-ocean-500 to-ocean-400 text-white hover:from-ocean-400 hover:to-ocean-300 focus-visible:ring-ocean-400 shadow-lg shadow-ocean-500/25 hover:shadow-ocean-500/40 hover:scale-[1.02] active:scale-[0.98]",
    secondary: "bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:border-white/30 focus-visible:ring-white/50",
    ghost: "text-white/70 hover:text-white hover:bg-white/10 focus-visible:ring-white/30",
    warm: "bg-gradient-to-r from-sand-500 to-gold-400 text-black hover:from-sand-400 hover:to-gold-300 focus-visible:ring-sand-400 shadow-lg shadow-sand-500/25 hover:shadow-sand-500/40 hover:scale-[1.02] active:scale-[0.98]",
    danger: "bg-red-500/20 text-red-400 border border-red-500/30 hover:bg-red-500/30 focus-visible:ring-red-400",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm gap-1.5",
    md: "px-5 py-2.5 text-base gap-2",
    lg: "px-7 py-3.5 text-lg gap-2.5",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      ) : leftIcon}
      {children}
      {!isLoading && rightIcon}
    </button>
  );
}
