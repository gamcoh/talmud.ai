import { type ReactNode } from "react";

type StatCardProps = {
  label: string;
  value: ReactNode;
  hint?: string;
  icon?: ReactNode;
  variant?: "default" | "highlight" | "warm";
};

export function StatCard({ label, value, hint, icon, variant = "default" }: StatCardProps) {
  const variants = {
    default: "bg-[#1a2028] border-white/5",
    highlight: "bg-gradient-to-br from-ocean-500/10 to-sage-500/10 border-ocean-400/20",
    warm: "bg-gradient-to-br from-sand-500/10 to-gold-500/10 border-sand-400/20",
  };

  return (
    <div className={`rounded-2xl border p-5 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg ${variants[variant]}`}>
      <div className="flex items-start justify-between">
        <div className="text-sm font-medium text-white/60">{label}</div>
        {icon && <div className="text-white/40">{icon}</div>}
      </div>
      <div className="mt-3 text-3xl font-bold tracking-tight text-white">
        {value}
      </div>
      {hint && <div className="mt-2 text-sm text-white/50">{hint}</div>}
    </div>
  );
}
