import { WidgetCard } from "~/components/ui/WidgetCard";
import { Button } from "~/components/ui/Button";
import type { StudiedText } from "../types";

type Props = {
  studied: StudiedText[];
  studiedLoading: boolean;
  studiedHasMore: boolean;
  loadingMore: boolean;
  onLoadMore: () => void;
};

export function StudyHistorySection({
  studied,
  studiedLoading,
  studiedHasMore,
  loadingMore,
  onLoadMore,
}: Props) {
  return (
    <WidgetCard>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-white">Your Study History</h3>
        <span className="text-sm text-white/50">{studied.length} texts saved</span>
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
          {studied.slice(0, 6).map((t) => (
            <div
              key={t.id}
              className="rounded-2xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition-all duration-200"
            >
              <div className="text-base font-semibold text-white truncate">{t.ref}</div>
              {t.heRef && (
                <div className="mt-1 text-sm text-white/50 truncate" dir="rtl" lang="he">
                  {t.heRef}
                </div>
              )}
              {t.url && (
                <a
                  className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-ocean-400 hover:text-ocean-300"
                  href={t.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open on Sefaria →
                </a>
              )}
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
