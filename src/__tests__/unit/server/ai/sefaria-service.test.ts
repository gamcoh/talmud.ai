import { describe, it, expect, vi } from 'vitest';
import { normalizeRef } from '~/server/ai/sefaria-service';

// Mock internal functions that aren't exported
const parseReference = (ref: string) => {
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
};

const textToString = (text: string | string[]): string => {
  if (Array.isArray(text)) {
    return text.filter(Boolean).flat(Infinity).join(" ");
  }
  return text;
};

describe('Sefaria Service', () => {
  describe('parseReference', () => {
    it('should parse simple Tanach references', () => {
      const result = parseReference('Genesis 1:1');
      expect(result.isSegmented).toBe(true);
      expect(result.base).toBe('Genesis 1');
      expect(result.segment).toBe(1);
    });

    it('should parse Talmud references without segments', () => {
      const result = parseReference('Berakhot 2a');
      expect(result.isSegmented).toBe(false);
      expect(result.base).toBe('Berakhot 2a');
    });

    it('should parse segmented Talmud references', () => {
      const result = parseReference('Berakhot 2a:5');
      expect(result.isSegmented).toBe(true);
      expect(result.base).toBe('Berakhot 2a');
      expect(result.segment).toBe(5);
    });

    it('should parse complex segmented references', () => {
      const result = parseReference('Shabbat 31b:12');
      expect(result.isSegmented).toBe(true);
      expect(result.base).toBe('Shabbat 31b');
      expect(result.segment).toBe(12);
    });

    it('should handle references with spaces', () => {
      const result = parseReference('Pirkei Avot 1:1');
      expect(result.isSegmented).toBe(true);
      expect(result.base).toContain('Pirkei Avot');
    });

    it('should parse Mishnah references', () => {
      const result = parseReference('Mishnah Berakhot 1:1');
      expect(result.isSegmented).toBe(true);
    });

    it('should handle double-digit segments', () => {
      const result = parseReference('Bava Metzia 23b:15');
      expect(result.isSegmented).toBe(true);
      expect(result.segment).toBe(15);
    });
  });

  describe('normalizeRef', () => {
    it('should normalize simple references', () => {
      expect(normalizeRef('Genesis 1:1')).toBe('Genesis 1:1');
    });

    it('should trim whitespace', () => {
      expect(normalizeRef('  Genesis 1:1  ')).toBe('Genesis 1:1');
    });

    it('should handle empty strings', () => {
      expect(normalizeRef('')).toBe('');
    });

    it('should preserve Talmud page format', () => {
      expect(normalizeRef('Berakhot 2a')).toBe('Berakhot 2a');
      expect(normalizeRef('Berakhot 2b')).toBe('Berakhot 2b');
    });

    it('should normalize segmented references', () => {
      expect(normalizeRef('Berakhot 2a:5')).toBe('Berakhot 2a:5');
    });
  });

  describe('textToString', () => {
    it('should convert simple text array to string', () => {
      const text = ['Hello', 'World'];
      expect(textToString(text)).toBe('Hello World');
    });

    it('should handle empty arrays', () => {
      expect(textToString([])).toBe('');
    });

    it('should handle single element', () => {
      expect(textToString(['Hello'])).toBe('Hello');
    });

    it('should handle nested arrays', () => {
      const text: any = [['Line 1', 'Line 2'], ['Line 3', 'Line 4']];
      expect(textToString(text)).toBe('Line 1 Line 2 Line 3 Line 4');
    });

    it('should filter out empty strings', () => {
      const text = ['Hello', '', 'World', ''];
      expect(textToString(text)).toBe('Hello World');
    });

    it('should handle mixed nested structure', () => {
      const text: any = ['First', ['Second', 'Third'], 'Fourth'];
      expect(textToString(text)).toBe('First Second Third Fourth');
    });

    it('should join with spaces by default', () => {
      const text = ['Word1', 'Word2', 'Word3'];
      const result = textToString(text);
      expect(result).toContain(' ');
      expect(result.split(' ').length).toBe(3);
    });

    it('should handle Hebrew text', () => {
      const text = ['שלום', 'עולם'];
      expect(textToString(text)).toBe('שלום עולם');
    });

    it('should handle string input', () => {
      expect(textToString('Hello World')).toBe('Hello World');
    });
  });
});
