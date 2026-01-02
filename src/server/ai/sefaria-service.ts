/**
 * Service for fetching text and context from Sefaria API
 * Handles segmented references (e.g., Avoda Zara 2b:12)
 */

type SefariaTextResponse = {
  text: string | string[];
  he: string | string[];
  ref: string;
  heRef?: string;
  [key: string]: unknown;
};

/**
 * Parse a reference to determine if it's segmented and extract the base reference
 * Examples:
 * - "Avoda Zara 2b:12" -> { base: "Avoda Zara 2b", isSegmented: true, segment: 12 }
 * - "Avot 1:1" -> { base: "Avot 1", isSegmented: true, segment: 1 }
 * - "Genesis 1:1" -> { base: "Genesis 1", isSegmented: true, segment: 1 }
 */
function parseReference(ref: string): {
  base: string;
  isSegmented: boolean;
  segment?: number;
} {
  // Match patterns like "Book 2b:12" or "Book 1:1"
  const segmentMatch = ref.match(/^(.+?)(\d+[ab]?):(\d+)$/i);
  
  if (segmentMatch) {
    const [, book, page, segment] = segmentMatch;
    return {
      base: `${book?.trim() ?? ""} ${page ?? ""}`,
      isSegmented: true,
      segment: parseInt(segment ?? "0", 10),
    };
  }
  
  return {
    base: ref,
    isSegmented: false,
  };
}

/**
 * Fetch text from Sefaria API
 */
async function fetchSefariaText(ref: string): Promise<SefariaTextResponse> {
  const encodedRef = encodeURIComponent(ref.replace(/:/g, "."));
  const url = `https://www.sefaria.org/api/texts/${encodedRef}`;
  
  const response = await fetch(url, {
    headers: { accept: "application/json" },
    signal: AbortSignal.timeout(10000),
  });
  
  if (!response.ok) {
    throw new Error(`Sefaria API error: ${response.status}`);
  }
  
  return response.json() as Promise<SefariaTextResponse>;
}

/**
 * Convert text response (array or string) to a single string
 */
function textToString(text: string | string[]): string {
  if (Array.isArray(text)) {
    return text.join(" ");
  }
  return text;
}

/**
 * Fetch text content and context for flashcard generation
 * For segmented references, fetches the full page/chapter for context
 */
export async function fetchTextForFlashcards(
  ref: string,
  heRef: string | null
): Promise<{
  textContent: string;
  contextText?: string;
  actualRef: string;
  actualHeRef?: string;
}> {
  const parsed = parseReference(ref);
  
  try {
    if (parsed.isSegmented && parsed.segment) {
      // Fetch both the specific segment and the full context
      const [specificData, contextData] = await Promise.all([
        fetchSefariaText(ref),
        fetchSefariaText(parsed.base).catch(() => null),
      ]);
      
      const textContent = textToString(specificData.text);
      const contextText = contextData ? textToString(contextData.text) : undefined;
      
      return {
        textContent,
        contextText,
        actualRef: specificData.ref,
        actualHeRef: specificData.heRef,
      };
    } else {
      // For non-segmented refs, fetch the text and use it as both content and context
      const data = await fetchSefariaText(ref);
      const text = textToString(data.text);
      
      return {
        textContent: text,
        contextText: text, // Use the same text as context for non-segmented refs
        actualRef: data.ref,
        actualHeRef: data.heRef,
      };
    }
  } catch (error) {
    console.error(`Error fetching text from Sefaria for ${ref}:`, error);
    throw error;
  }
}

/**
 * Normalize a reference for database storage
 * Ensures consistent formatting
 */
export function normalizeRef(ref: string): string {
  return ref.trim().replace(/\s+/g, " ");
}
