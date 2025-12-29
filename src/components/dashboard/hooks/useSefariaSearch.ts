import { useState } from "react";
import type { StudiedText } from "../types";

export function useSefariaSearch(userKey: string, onAddStudied: (items: StudiedText[]) => void) {
  const [query, setQuery] = useState("");
  const [searchLoading, setSearchLoading] = useState(false);
  const [searchError, setSearchError] = useState<string | null>(null);
  const [searchResult, setSearchResult] = useState<any | null>(null);
  const [selectedSectionIndex, setSelectedSectionIndex] = useState<number | null>(null);

  async function runSearch() {
    const q = query.trim();
    if (!q) return;
    setSearchLoading(true);
    setSearchError(null);
    setSearchResult(null);
    try {
      const res = await fetch(`https://www.sefaria.org/api/v3/texts/${encodeURIComponent(query)}`, {
        cache: "no-store",
      });
      if (!res.ok) {
        setSearchError(`Sefaria error (${res.status})`);
        return;
      }
      const data = (await res.json()) as any;
      setSearchResult(data);
    } catch {
      setSearchError("Failed to fetch from Sefaria");
    } finally {
      setSearchLoading(false);
    }
  }

  async function addStudiedFromSefaria(result: any) {
    const ref = (result?.ref ?? query.trim()) as string;
    if (!ref || !userKey) return;

    const versions = Array.isArray(result?.versions) ? result.versions : [];
    const baseTextArray = Array.isArray(versions[0]?.text) ? versions[0].text : [];

    const basePayload = {
      userKey,
      ref,
      heRef: (result?.heRef ?? null) as string | null,
      url: result?.url ? `https://www.sefaria.org/${result.url}` : null,
      title: (result?.title ?? result?.primaryTitle ?? null) as string | null,
    };

    const makeSnippet = (raw: unknown) => {
      const s = raw == null ? "" : String(raw);
      return s ? s.slice(0, 1800) : null;
    };

    const payloads =
      typeof selectedSectionIndex === "number"
        ? [{ ...basePayload, snippet: makeSnippet(baseTextArray[selectedSectionIndex] ?? result?.text) }]
        : baseTextArray.length > 0
        ? baseTextArray
            .map((section: any, idx: number) => ({
              ...basePayload,
              ref: `${ref}:${idx + 1}`,
              snippet: makeSnippet(section),
            }))
            .filter((p) => p.snippet)
        : [{ ...basePayload, snippet: makeSnippet(result?.text) }];

    const createdItems: StudiedText[] = [];
    for (const payload of payloads) {
      const res = await fetch("/api/studied-texts", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json()) as { item?: StudiedText };
      if (data.item) createdItems.push(data.item);
    }

    if (createdItems.length > 0) {
      onAddStudied(createdItems);
    }
  }

  return {
    query,
    setQuery,
    searchLoading,
    searchError,
    searchResult,
    selectedSectionIndex,
    setSelectedSectionIndex,
    runSearch,
    addStudiedFromSefaria,
  };
}
