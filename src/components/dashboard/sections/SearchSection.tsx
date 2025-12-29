import { WidgetCard } from "~/components/ui/WidgetCard";
import { Button } from "~/components/ui/Button";
import { Input } from "~/components/ui/Input";
import { PointsNotification } from "~/components/ui/PointsNotification";
import { useState, useRef, useEffect } from "react";
import confetti from "canvas-confetti";

type Props = {
  query: string;
  setQuery: (q: string) => void;
  searchLoading: boolean;
  searchError: string | null;
  searchResult: any | null;
  selectedSectionIndex: number | null;
  setSelectedSectionIndex: (idx: number | null) => void;
  onSearch: () => void;
  onAddStudied: (result: any) => void;
};

export function SearchSection({
  query,
  setQuery,
  searchLoading,
  searchError,
  searchResult,
  selectedSectionIndex,
  setSelectedSectionIndex,
  onSearch,
  onAddStudied,
}: Props) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [earnedPoints, setEarnedPoints] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const addButtonRef = useRef<HTMLButtonElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isDropdownOpen]);

  const getSelectedText = () => {
    if (selectedSectionIndex === null) return "All sections";
    const section = searchResult?.versions?.[0]?.text?.[selectedSectionIndex];
    if (!section) return "All sections";
    const text = stripHtml(String(section));
    return `${selectedSectionIndex + 1}. ${text.slice(0, 50)}${text.length > 50 ? "…" : ""}`;
  };

  const stripHtml = (html: string) => {
    const tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  };

  const handleAddToDashboard = async (result: any) => {
    setIsAdding(true);
    
    // Trigger confetti animation
    if (addButtonRef.current) {
      const rect = addButtonRef.current.getBoundingClientRect();
      const x = (rect.left + rect.width / 2) / window.innerWidth;
      const y = (rect.top + rect.height / 2) / window.innerHeight;
      
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { x, y },
        colors: ['#3b82f6', '#60a5fa', '#93c5fd', '#fbbf24', '#fcd34d'],
        ticks: 100,
      });
    }
    
    // Show points notification immediately
    const pointsToAward = 10;
    setEarnedPoints(pointsToAward);
    
    // Call the actual add function
    await onAddStudied(result);
    
    // Award points for studying text in background
    try {
      const userKey = localStorage.getItem("talmud-user-key") || "demo-user";
      const ref = result?.ref || query.trim();
      
      await fetch("/api/gamification/study", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "x-user-key": userKey,
        },
        body: JSON.stringify({ type: "text", ref }),
      });
    } catch (error) {
      console.error("Error awarding points:", error);
    }
    
    // Reset after a short delay
    setTimeout(() => setIsAdding(false), 1000);
  };

  return (
    <>
      <PointsNotification 
        points={earnedPoints} 
        onClose={() => setEarnedPoints(null)} 
      />

      <WidgetCard>
      <h3 className="text-lg font-bold text-white mb-4">Search Sefaria</h3>
      <div className="flex flex-col gap-3 md:flex-row">
        <div className="flex-1">
          <Input
            placeholder='e.g. "Berakhot 2a" or "Genesis 1"'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") onSearch();
            }}
          />
        </div>
        <Button
          variant="primary"
          onClick={onSearch}
          isLoading={searchLoading}
          disabled={!query.trim()}
        >
          Search
        </Button>
      </div>

      {searchError && (
        <div className="mt-3 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-sm text-red-300">
          {searchError}
        </div>
      )}

      {searchResult && (
        <div className="mt-4 p-4 rounded-2xl bg-white/5 border border-white/10">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div className="space-y-2 min-w-0 flex-1">
              <div className="text-lg font-semibold text-white">
                {searchResult?.ref ?? query.trim()}
              </div>
              {searchResult?.heRef && (
                <div className="text-sm text-white/60" dir="rtl" lang="he">
                  {searchResult.heRef}
                </div>
              )}
              {Array.isArray(searchResult?.versions?.[0]?.text) &&
                searchResult.versions[0].text.length > 0 && (
                  <div className="mt-3 relative" ref={dropdownRef}>
                    <label className="text-xs font-medium text-white/60 block mb-1">
                      Pick a section to save
                    </label>
                    
                    {/* Custom Select Button */}
                    <button
                      type="button"
                      className="w-full rounded-xl border border-white/10 bg-[var(--surface-card)] px-3 py-2 text-sm text-white outline-none focus:border-ocean-400 flex items-center justify-between hover:bg-white/5 transition-colors"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                      <span className="truncate">{getSelectedText()}</span>
                      <svg
                        className={`w-4 h-4 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {/* Custom Dropdown */}
                    {isDropdownOpen && (
                      <div className="absolute z-50 w-full mt-1 rounded-xl border border-white/10 bg-[var(--surface-card)] shadow-2xl max-h-80 overflow-y-auto">
                        {/* All sections option */}
                        <button
                          type="button"
                          className={`w-full px-3 py-3 text-left text-sm transition-colors hover:bg-white/10 ${
                            selectedSectionIndex === null ? "bg-ocean-400/20 text-ocean-300" : "text-white"
                          }`}
                          onClick={() => {
                            setSelectedSectionIndex(null);
                            setIsDropdownOpen(false);
                          }}
                        >
                          <div className="font-medium">All sections</div>
                          <div className="text-xs text-white/50 mt-1">
                            Save all {searchResult.versions[0].text.length} sections
                          </div>
                        </button>

                        <div className="border-t border-white/10" />

                        {/* Individual sections */}
                        {searchResult.versions[0].text.map((section: any, idx: number) => {
                          if (!section) return null;
                          const isSelected = selectedSectionIndex === idx;
                          
                          return (
                            <button
                              key={idx}
                              type="button"
                              className={`w-full px-3 py-3 text-left text-sm transition-colors hover:bg-white/10 border-b border-white/5 last:border-b-0 ${
                                isSelected ? "bg-ocean-400/20" : ""
                              }`}
                              onClick={() => {
                                setSelectedSectionIndex(idx);
                                setIsDropdownOpen(false);
                              }}
                            >
                              <div className="flex items-start gap-2">
                                <span className={`font-semibold min-w-[2rem] ${isSelected ? "text-ocean-300" : "text-white/60"}`}>
                                  {idx + 1}.
                                </span>
                                <div className="flex-1 min-w-0">
                                  {/* HTML Content */}
                                  <div
                                    className={`leading-relaxed ${isSelected ? "text-white" : "text-white/80"}`}
                                    dangerouslySetInnerHTML={{ __html: String(section) }}
                                  />
                                </div>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                )}
            </div>
            <Button 
              ref={addButtonRef}
              variant="warm" 
              onClick={() => void handleAddToDashboard(searchResult)}
              isLoading={isAdding}
              className="relative overflow-hidden"
            >
              {isAdding ? (
                <span>Added! ✓</span>
              ) : (
                <span>Add to Dashboard</span>
              )}
            </Button>
          </div>
        </div>
      )}
    </WidgetCard>
    </>
  );
}
