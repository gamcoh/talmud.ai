import { useEffect, useState } from "react";
import type { StudiedText } from "../types";
import { PAGE_SIZE } from "../constants";

export function useStudiedTexts(userKey: string) {
  const [studied, setStudied] = useState<StudiedText[]>([]);
  const [studiedLoading, setStudiedLoading] = useState(false);
  const [studiedPage, setStudiedPage] = useState(1);
  const [studiedHasMore, setStudiedHasMore] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);

  useEffect(() => {
    if (!userKey) return;
    setStudiedLoading(true);
    setStudiedPage(1);
    void (async () => {
      try {
        const res = await fetch(
          `/api/studied-texts?userKey=${encodeURIComponent(userKey)}&page=1&limit=${PAGE_SIZE}`,
          { cache: "no-store" }
        );
        const data = (await res.json()) as { items?: StudiedText[]; hasMore?: boolean };
        setStudied(Array.isArray(data.items) ? data.items : []);
        setStudiedHasMore(!!data.hasMore);
      } finally {
        setStudiedLoading(false);
      }
    })();
  }, [userKey]);

  async function loadMoreStudied() {
    if (!userKey || loadingMore || !studiedHasMore) return;
    setLoadingMore(true);
    const nextPage = studiedPage + 1;
    try {
      const res = await fetch(
        `/api/studied-texts?userKey=${encodeURIComponent(userKey)}&page=${nextPage}&limit=${PAGE_SIZE}`,
        { cache: "no-store" }
      );
      const data = (await res.json()) as { items?: StudiedText[]; hasMore?: boolean };
      const newItems = Array.isArray(data.items) ? data.items : [];
      setStudied((prev) => {
        const combined = [...prev, ...newItems];
        const seen = new Set<string>();
        return combined.filter((x) => (seen.has(x.id) ? false : (seen.add(x.id), true)));
      });
      setStudiedPage(nextPage);
      setStudiedHasMore(!!data.hasMore);
    } finally {
      setLoadingMore(false);
    }
  }

  function addStudiedItems(items: StudiedText[]) {
    setStudied((prev) => {
      const next = [...items, ...prev];
      const seen = new Set<string>();
      return next.filter((x) => (seen.has(x.id) ? false : (seen.add(x.id), true)));
    });
  }

  return {
    studied,
    studiedLoading,
    studiedHasMore,
    loadingMore,
    loadMoreStudied,
    addStudiedItems,
  };
}
