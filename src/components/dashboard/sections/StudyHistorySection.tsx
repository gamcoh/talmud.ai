"use client";

import { useState, useTransition } from "react";
import { WidgetCard } from "~/components/ui/WidgetCard";
import { Button } from "~/components/ui/Button";
import type { StudiedText } from "../types";
import { getStudiedTexts } from "~/server/actions/dashboard";

type Props = {
  studied: StudiedText[];
  totalCount: number;
  userKey: string;
};

export function StudyHistorySection({ studied, totalCount, userKey }: Props) {
  const [page, setPage] = useState(1);
  const [additionalStudied, setAdditionalStudied] = useState<StudiedText[]>([]);
  const [hasMore, setHasMore] = useState(studied.length >= 6);
  const [isPending, startTransition] = useTransition();
  
  // Combine parent state (first 6 items) with additionally loaded items
  const allStudied = [...studied, ...additionalStudied];

  const formatRef = (ref: string) => {
    return ref.replace(/_/g, " ").replace(/\./g, " ");
  };

  const loadMore = () => {
    startTransition(async () => {
      try {
        const nextPage = page + 1;
        const result = await getStudiedTexts(userKey, nextPage, 6);
        setAdditionalStudied((prev) => [...prev, ...result.items.map((item: any) => ({ ...item, createdAt: String(item.createdAt) }))]);
        setHasMore(result.hasMore);
        setPage(nextPage);
      } catch (error) {
        console.error("Failed to load more texts:", error);
      }
    });
  };

  return (
    <WidgetCard>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-white">Your Study History</h3>
        <span className="text-sm text-white/50">
          {totalCount} {totalCount === 1 ? "text" : "texts"} saved
        </span>
      </div>

      {allStudied.length === 0 ? (
        <div className="text-center py-8">
          <div className="text-4xl mb-3">📚</div>
          <div className="text-white/60">No saved texts yet.</div>
          <div className="text-sm text-white/40">Search above and add your first one!</div>
        </div>
      ) : (
        <>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {allStudied.map((t) => (
              <div
                key={t.id}
                className="group rounded-2xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 hover:border-white/20 transition-all duration-200 flex flex-col"
              >
                <div className="text-base font-semibold text-white mb-1 group-hover:text-ocean-300 transition-colors">
                  {formatRef(t.ref)}
                </div>
                {t.heRef && (
                  <div
                    className="text-sm text-white/50 mb-2 font-[var(--font-hebrew-serif)]"
                    dir="rtl"
                    lang="he"
                  >
                    {t.heRef}
                  </div>
                )}

                {t.snippet && (
                  <div className="mt-2 flex-1 min-h-0">
                    <div
                      className="text-sm text-white/70 leading-relaxed line-clamp-4 font-[var(--font-hebrew-serif)]"
                      dangerouslySetInnerHTML={{ __html: t.snippet }}
                    />
                  </div>
                )}

                <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs text-white/40">
                    {new Date(t.createdAt).toLocaleDateString(undefined, {
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                  <a
                    className="inline-flex items-center gap-1 text-xs font-medium text-ocean-400 hover:text-ocean-300 transition-colors"
                    href={`https://www.sefaria.org/${encodeURIComponent(t.ref.replace(/:/g, "."))}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open →
                  </a>
                </div>
              </div>
            ))}
          </div>

          {hasMore && (
            <div className="mt-4 text-center">
              <Button variant="ghost" onClick={loadMore} disabled={isPending}>
                {isPending ? "Loading..." : "Load More"}
              </Button>
            </div>
          )}
        </>
      )}
    </WidgetCard>
  );
}
