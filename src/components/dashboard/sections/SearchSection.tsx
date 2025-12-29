import { WidgetCard } from "~/components/ui/WidgetCard";
import { Button } from "~/components/ui/Button";
import { Input } from "~/components/ui/Input";

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
  return (
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
                  <div className="mt-3">
                    <label className="text-xs font-medium text-white/60 block mb-1">
                      Pick a section to save
                    </label>
                    <select
                      className="w-full rounded-xl border border-white/10 bg-[var(--surface-card)] px-3 py-2 text-sm text-white outline-none focus:border-ocean-400"
                      value={selectedSectionIndex !== null ? String(selectedSectionIndex) : ""}
                      onChange={(e) => {
                        const v = e.target.value;
                        setSelectedSectionIndex(v === "" ? null : Number(v));
                      }}
                    >
                      <option value="">All sections</option>
                      {searchResult.versions[0].text.map(
                        (section: any, idx: number) =>
                          section && (
                            <option key={idx} value={idx}>
                              {`${idx + 1}. ${String(section).slice(0, 50)}${String(section).length > 50 ? "…" : ""}`}
                            </option>
                          )
                      )}
                    </select>
                  </div>
                )}
            </div>
            <Button variant="warm" onClick={() => onAddStudied(searchResult)}>
              Add to Dashboard
            </Button>
          </div>
        </div>
      )}
    </WidgetCard>
  );
}
