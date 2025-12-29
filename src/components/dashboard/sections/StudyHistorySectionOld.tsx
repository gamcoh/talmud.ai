import { WidgetCard } from "~/components/ui/WidgetCard";
import { Button } from "~/components/ui/Button";
import type { StudiedText } from "../types";

type Props = {
  studied: StudiedText[];
  studiedLoading: boolean;
  studiedHasMore: boolean;
  loadingMore: boolean;
  onLoadMore: () => void;
  totalCount: number;
};

export function StudyHistorySection({
  studied,
  studiedLoading,
  studiedHasMore,
  loadingMore,
  onLoadMore,
  totalCount,
}: Props) {
  const formatRef = (ref: string) => {
    return ref.replace(/_/g, ' ').replace(/\./g, ' ');
  };

  const stripHtml = (html: string) => {
    const tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  };

  const truncateSnippet = (snippet: string, maxLength: number = 150) => {
    const text = stripHtml(snippet);
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  return (
    <WidgetCard>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-white">Your Study History</h3>
        <span className="text-sm text-white/50">{totalCount} {totalCount === 1 ? 'text' : 'texts'} saved</span>
      </div>

      {studiedLoading ? (
        <div className="text-sm text-white/60 py-8 text-center">Loading your texts...</div>
      ) : studied.length === 0 ? (
        <div className="text-center py-8">
          <div className="text-4xl mb-3">📚</div>
          <div className="text-white/60">No saved texts yet.</div>
          <div className="text-sm text-white/40">Search above and add your first one!</div>
        </div>
      ) : (
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {studied.map((t) => (
            <div
              key={t.id}
              className="group rounded-2xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 hover:border-white/20 transition-all duration-200 flex flex-col cursor-pointer"
            >
              <div className="text-base font-semibold text-white mb-1 group-hover:text-ocean-300 transition-colors">
                {formatRef(t.ref)}
              </div>
              {t.heRef && (
                <div className="text-sm text-white/50 mb-2 font-[var(--font-hebrew-serif)]" dir="rtl" lang="he">
                  {t.heRef}
                </div>
              )}
              
              {/* Beautiful Snippet Display */}
              {t.snippet && (
                <div className="mt-2 flex-1 min-h-0">
                  <div 
                    className="text-sm text-white/70 leading-relaxed line-clamp-4 snippet-content font-[var(--font-hebrew-serif)]"
                    dangerouslySetInnerHTML={{ __html: t.snippet }}
                    title={truncateSnippet(t.snippet, 500)}
                  />
                </div>
              )}
              
              <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs text-white/40">
                  {new Date(t.createdAt).toLocaleDateString(undefined, { 
                    month: 'short', 
                    day: 'numeric'
                  })}
                </span>
                <a
                  className="inline-flex items-center gap-1 text-xs font-medium text-ocean-400 hover:text-ocean-300 transition-colors"
                  href={`https://www.sefaria.org/${encodeURIComponent(t.ref.replace(/:/g, '.'))}`}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  Open →
                </a>
              </div>
            </div>
          ))}
        </div>
      )}

      {studiedHasMore && (
        <div className="mt-4 text-center">
          <Button variant="ghost" onClick={onLoadMore} isLoading={loadingMore}>
            Load More
          </Button>
        </div>
      )}
    </WidgetCard>
  );
}
