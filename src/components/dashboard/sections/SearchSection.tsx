"use client";

import { useState, useTransition, useRef, useEffect } from "react";
import { WidgetCard } from "~/components/ui/WidgetCard";
import { Button } from "~/components/ui/Button";
import { Input } from "~/components/ui/Input";
import { searchSefaria } from "~/server/actions/dashboard";

type Props = {
  userKey: string;
  onAddStudied: (data: any) => Promise<void>;
  isPending: boolean;
};

export function SearchSection({ userKey, onAddStudied, isPending }: Props) {
  const [query, setQuery] = useState("");
  const [searchResult, setSearchResult] = useState<any>(null);
  const [searchError, setSearchError] = useState<string | null>(null);
  const [isSearching, startSearchTransition] = useTransition();
  const [selectedSectionIndex, setSelectedSectionIndex] = useState<number | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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

  const stripHtml = (html: string) => {
    const tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  };

  const getSelectedText = () => {
    if (selectedSectionIndex === null) return "All sections";
    const section = searchResult?.versions?.[0]?.text?.[selectedSectionIndex];
    if (!section) return "All sections";
    const text = stripHtml(String(section));
    return `${selectedSectionIndex + 1}. ${text.slice(0, 50)}${text.length > 50 ? "…" : ""}`;
  };

  const handleSearch = async () => {
    if (!query.trim()) return;

    startSearchTransition(async () => {
      try {
        setSearchError(null);
        setSelectedSectionIndex(null);
        const result = await searchSefaria(query.trim());
        setSearchResult(result);
      } catch (error) {
        setSearchError("Failed to search. Please try again.");
        setSearchResult(null);
      }
    });
  };

  const handleAddStudied = async () => {
    if (!searchResult) return;

    let snippetToSave = null;
    const versions = searchResult.versions?.[0];
    
    if (Array.isArray(versions?.text)) {
      if (selectedSectionIndex !== null && versions.text[selectedSectionIndex]) {
        snippetToSave = versions.text[selectedSectionIndex];
      } else {
        snippetToSave = versions.text[0];
      }
    }

    const data = {
      userKey,
      ref: searchResult.ref || query.trim(),
      heRef: searchResult.heRef,
      url: searchResult.url,
      title: searchResult.indexTitle || searchResult.ref,
      snippet: snippetToSave,
    };

    await onAddStudied(data);
    setQuery("");
    setSearchResult(null);
    setSelectedSectionIndex(null);
  };

  return (
    <section>
      <WidgetCard>
        <h2 className="text-xl font-bold text-white mb-4">Search Texts</h2>
        
        <div className="flex gap-2 mb-4">
          <div className="flex-1">
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              placeholder='e.g. "Berakhot 2a" or "Genesis 1"'
              disabled={isSearching || isPending}
            />
          </div>
          <Button
            variant="primary"
            onClick={handleSearch}
            disabled={isSearching || !query.trim()}
          >
            {isSearching ? "Searching..." : "Search"}
          </Button>
        </div>

        {searchError && (
          <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm">
            {searchError}
          </div>
        )}

        {searchResult && (
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
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

                      {isDropdownOpen && (
                        <div className="absolute z-50 w-full mt-1 rounded-xl border border-white/10 bg-[var(--surface-card)] shadow-2xl max-h-80 overflow-y-auto">
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
                variant="primary"
                onClick={handleAddStudied}
                disabled={isPending}
              >
                {isPending ? "Adding..." : "Add to Dashboard"}
              </Button>
            </div>
          </div>
        )}
      </WidgetCard>
    </section>
  );
}
