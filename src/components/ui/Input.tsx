import { type InputHTMLAttributes, forwardRef } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
  hint?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, hint, className = "", ...props }, ref) => {
    const hasError = Boolean(error);

    return (
      <div className="space-y-1.5">
        {label && (
          <label className="block text-sm font-medium text-white/80">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={`
            w-full px-4 py-3 rounded-xl bg-white/5 border text-white placeholder-white/40
            transition-all duration-200
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0f1419]
            ${hasError 
              ? "border-red-500/50 focus:border-red-400 focus:ring-red-400/50" 
              : "border-white/10 focus:border-ocean-400 focus:ring-ocean-400/50 hover:border-white/20"
            }
            ${className}
          `}
          {...props}
        />
        {hint && !error && (
          <p className="text-xs text-white/50">{hint}</p>
        )}
        {error && (
          <p className="text-xs text-red-400 flex items-center gap-1">
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-7v2h2v-2h-2zm0-8v6h2V7h-2z"/>
            </svg>
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
