"use client";

import { useState } from "react";

type DailyWisdom = {
  ref: string;
  text: string;
  heText: string;
  heRef: string;
  url: string;
};

type QuoteWidgetProps = {
  dailyWisdom?: DailyWisdom | null;
};

export function QuoteWidget({ dailyWisdom: initialWisdom }: QuoteWidgetProps) {
  const [currentWisdom, setCurrentWisdom] = useState<DailyWisdom | null>(initialWisdom ?? null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchNewQuote = async () => {
    if (isLoading) return;
    
    setIsLoading(true);
    setIsAnimating(true);
    
    try {
      const response = await fetch('/api/wisdom');
      if (response.ok) {
        const data = await response.json() as DailyWisdom;
        setTimeout(() => {
          setCurrentWisdom(data);
          setIsAnimating(false);
          setIsLoading(false);
        }, 300);
      } else {
        setIsAnimating(false);
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Failed to fetch new quote:", error);
      setIsAnimating(false);
      setIsLoading(false);
    }
  };

  return (
    <div 
      className="rounded-3xl bg-gradient-to-br from-sage-500/10 to-ocean-500/10 border border-sage-400/20 p-6 cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-sage-500/10"
      onClick={fetchNewQuote}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="text-sm font-medium text-sage-400">Daily Wisdom</div>
        {isLoading ? (
          <div className="w-5 h-5 border-2 border-sage-400/30 border-t-sage-400 rounded-full animate-spin" />
        ) : (
          <svg className="w-5 h-5 text-sage-400/50" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
          </svg>
        )}
      </div>
      
      <div className={`transition-opacity duration-300 ${isAnimating ? "opacity-0" : "opacity-100"}`}>
        {currentWisdom ? (
          <>
            <div 
              className="text-2xl font-bold text-white/90 mb-2"
              style={{ fontFamily: "var(--font-hebrew-serif)" }}
              dir="rtl"
              lang="he"
            >
              {currentWisdom.heText}
            </div>
            <div className="text-sm text-white/60 italic mb-1">{currentWisdom.text}</div>
            <a 
              href={currentWisdom.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs text-sage-400 hover:text-sage-300"
              onClick={(e) => e.stopPropagation()}
            >
              {currentWisdom.heRef}
            </a>
          </>
        ) : (
          <div className="text-sm text-white/60">Loading wisdom from Pirkei Avot...</div>
        )}
      </div>

      <div className="mt-4 text-xs text-white/40">
        {isLoading ? "Loading..." : "Tap for another quote"}
      </div>
    </div>
  );
}
