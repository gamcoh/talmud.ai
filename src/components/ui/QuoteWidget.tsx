"use client";

import { useEffect, useState } from "react";

const QUOTES = [
  { text: "הפוך בה והפוך בה דכולא בה", source: "Pirkei Avot 5:22", translation: "Turn it over and over, for everything is in it" },
  { text: "אל תסתכל בקנקן אלא במה שיש בו", source: "Pirkei Avot 4:20", translation: "Do not look at the container but what is in it" },
  { text: "איזהו חכם הלומד מכל אדם", source: "Pirkei Avot 4:1", translation: "Who is wise? One who learns from every person" },
  { text: "לא עליך המלאכה לגמור", source: "Pirkei Avot 2:16", translation: "It is not upon you to finish the work" },
  { text: "יום אחד ויום אחד", source: "Talmud", translation: "One day at a time" },
];

export function QuoteWidget() {
  const [quote, setQuote] = useState(QUOTES[0]!);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * QUOTES.length);
    setQuote(QUOTES[randomIndex]!);
  }, []);

  const nextQuote = () => {
    setIsAnimating(true);
    setTimeout(() => {
      const currentIndex = QUOTES.indexOf(quote);
      const nextIndex = (currentIndex + 1) % QUOTES.length;
      setQuote(QUOTES[nextIndex]!);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div 
      className="rounded-3xl bg-gradient-to-br from-sage-500/10 to-ocean-500/10 border border-sage-400/20 p-6 cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-sage-500/10"
      onClick={nextQuote}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="text-sm font-medium text-sage-400">Daily Wisdom</div>
        <svg className="w-5 h-5 text-sage-400/50" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        </svg>
      </div>
      
      <div className={`transition-opacity duration-300 ${isAnimating ? "opacity-0" : "opacity-100"}`}>
        <div 
          className="text-2xl font-bold text-white/90 mb-2"
          style={{ fontFamily: "var(--font-hebrew-serif)" }}
          dir="rtl"
          lang="he"
        >
          {quote.text}
        </div>
        <div className="text-sm text-white/60 italic mb-1">{quote.translation}</div>
        <div className="text-xs text-sage-400">{quote.source}</div>
      </div>

      <div className="mt-4 text-xs text-white/40">Tap for another quote</div>
    </div>
  );
}
