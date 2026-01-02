import { describe, it, expect, beforeEach } from 'vitest';
import { useAppStore, type GeneratedFlashcard } from '~/stores/appStore';

describe('App Store', () => {
  beforeEach(() => {
    // Reset store before each test
    useAppStore.setState({
      stats: {
        points: 0,
        level: 1,
        streakDays: 0,
        longestStreak: 0,
        totalTextsStudied: 0,
      },
      flashcards: [],
      currentIndex: 0,
      shuffledOptions: [],
      isLoading: true,
      isSubmitting: false,
      selectedChoice: null,
      showResult: false,
      wasCorrect: false,
      correctAnswer: null,
      earnedPoints: null,
      studiedTexts: [],
      totalTextsCount: 0,
      hasMoreTexts: false,
      isLoadingTexts: false,
      earnedPointsNotification: null,
      searchQuery: '',
      searchResults: [],
      isSearching: false,
      selectedSectionIndex: 0,
    });
  });

  describe('Stats Slice', () => {
    it('should initialize with default stats', () => {
      const state = useAppStore.getState();
      expect(state.stats.points).toBe(0);
      expect(state.stats.level).toBe(1);
      expect(state.stats.streakDays).toBe(0);
      expect(state.stats.longestStreak).toBe(0);
      expect(state.stats.totalTextsStudied).toBe(0);
    });

    it('should update stats', () => {
      useAppStore.getState().updateStats({ points: 100, level: 2 });
      const state = useAppStore.getState();

      expect(state.stats.points).toBe(100);
      expect(state.stats.level).toBe(2);
    });

    it('should add points', () => {
      useAppStore.getState().setStats({ points: 50, level: 1, streakDays: 0, longestStreak: 0, totalTextsStudied: 0 });
      useAppStore.getState().addPoints(25);

      expect(useAppStore.getState().stats.points).toBe(75);
    });

    it('should preserve other stats when updating', () => {
      useAppStore.getState().setStats({
        points: 100,
        level: 2,
        streakDays: 5,
        longestStreak: 10,
        totalTextsStudied: 20,
      });

      useAppStore.getState().updateStats({ points: 150 });
      const state = useAppStore.getState();

      expect(state.stats.points).toBe(150);
      expect(state.stats.level).toBe(2);
      expect(state.stats.streakDays).toBe(5);
      expect(state.stats.longestStreak).toBe(10);
      expect(state.stats.totalTextsStudied).toBe(20);
    });
  });

  describe('Flashcards Slice', () => {
    const mockFlashcards: GeneratedFlashcard[] = [
      {
        id: '1',
        ref: 'Genesis 1:1',
        heRef: null,
        question: 'Test question 1',
        options: ['A', 'B', 'C', 'D'],
        correctAnswer: 'A',
        difficulty: 'EASY',
        points: 5,
      },
      {
        id: '2',
        ref: 'Genesis 1:2',
        heRef: null,
        question: 'Test question 2',
        options: ['W', 'X', 'Y', 'Z'],
        correctAnswer: 'X',
        difficulty: 'MEDIUM',
        points: 10,
      },
    ];

    it('should set flashcards and reset index', () => {
      useAppStore.getState().setFlashcards(mockFlashcards);
      const state = useAppStore.getState();

      expect(state.flashcards).toEqual(mockFlashcards);
      expect(state.currentIndex).toBe(0);
    });

    it('should advance to next card', () => {
      useAppStore.getState().setFlashcards(mockFlashcards);
      useAppStore.getState().nextCard();

      const state = useAppStore.getState();
      expect(state.currentIndex).toBe(1);
      expect(state.selectedChoice).toBeNull();
      expect(state.showResult).toBe(false);
    });

    it('should set shuffled options', () => {
      const options = ['A', 'B', 'C', 'D'];
      useAppStore.getState().setShuffledOptions(options);

      expect(useAppStore.getState().shuffledOptions).toEqual(options);
    });

    it('should select a choice', () => {
      useAppStore.getState().selectChoice('B');
      expect(useAppStore.getState().selectedChoice).toBe('B');
    });

    it('should set result correctly', () => {
      useAppStore.getState().setResult(true, 'A', 10);
      const state = useAppStore.getState();

      expect(state.showResult).toBe(true);
      expect(state.wasCorrect).toBe(true);
      expect(state.correctAnswer).toBe('A');
      expect(state.earnedPoints).toBe(10);
    });

    it('should clear result', () => {
      useAppStore.getState().setResult(true, 'A', 10);
      useAppStore.getState().clearResult();
      const state = useAppStore.getState();

      expect(state.selectedChoice).toBeNull();
      expect(state.showResult).toBe(false);
      expect(state.wasCorrect).toBe(false);
      expect(state.correctAnswer).toBeNull();
      expect(state.earnedPoints).toBeNull();
    });

    it('should reset flashcard state', () => {
      useAppStore.getState().setFlashcards(mockFlashcards);
      useAppStore.getState().nextCard();
      useAppStore.getState().selectChoice('A');

      useAppStore.getState().reset();
      const state = useAppStore.getState();

      expect(state.flashcards).toEqual([]);
      expect(state.currentIndex).toBe(0);
      expect(state.selectedChoice).toBeNull();
      expect(state.isLoading).toBe(true);
    });
  });

  describe('Dashboard Slice', () => {
    const mockTexts = [
      { id: '1', userId: 'user1', ref: 'Genesis 1:1', heRef: null, url: null, title: 'Test 1', snippet: 'Snippet 1', createdAt: new Date() },
      { id: '2', userId: 'user1', ref: 'Genesis 1:2', heRef: null, url: null, title: 'Test 2', snippet: 'Snippet 2', createdAt: new Date() },
    ];

    it('should set studied texts', () => {
      useAppStore.getState().setStudiedTexts(mockTexts, 2, false);
      const state = useAppStore.getState();

      expect(state.studiedTexts).toEqual(mockTexts);
      expect(state.totalTextsCount).toBe(2);
      expect(state.hasMoreTexts).toBe(false);
      expect(state.isLoadingTexts).toBe(false);
    });

    it('should add studied text and increment count', () => {
      const newText = mockTexts[0]!;
      useAppStore.getState().addStudiedText(newText);
      const state = useAppStore.getState();

      expect(state.studiedTexts[0]).toEqual(newText);
      expect(state.totalTextsCount).toBe(1);
      expect(state.stats.totalTextsStudied).toBe(1);
    });

    it('should remove studied text', () => {
      useAppStore.getState().setStudiedTexts(mockTexts, 2, false);
      useAppStore.getState().removeStudiedText('1');
      const state = useAppStore.getState();

      expect(state.studiedTexts.length).toBe(1);
      expect(state.studiedTexts[0]?.id).toBe('2');
      expect(state.totalTextsCount).toBe(1);
    });

    it('should show and hide points notification', () => {
      useAppStore.getState().showPointsNotification(50);
      expect(useAppStore.getState().earnedPointsNotification).toBe(50);

      useAppStore.getState().hidePointsNotification();
      expect(useAppStore.getState().earnedPointsNotification).toBeNull();
    });
  });

  describe('Search Slice', () => {
    it('should set search query', () => {
      useAppStore.getState().setSearchQuery('Genesis');
      expect(useAppStore.getState().searchQuery).toBe('Genesis');
    });

    it('should set search results', () => {
      const results = [{ title: 'Result 1' }, { title: 'Result 2' }];
      useAppStore.getState().setSearchResults(results);
      expect(useAppStore.getState().searchResults).toEqual(results);
    });

    it('should set searching state', () => {
      useAppStore.getState().setSearching(true);
      expect(useAppStore.getState().isSearching).toBe(true);

      useAppStore.getState().setSearching(false);
      expect(useAppStore.getState().isSearching).toBe(false);
    });

    it('should clear search', () => {
      useAppStore.getState().setSearchQuery('Genesis');
      useAppStore.getState().setSearchResults([{ title: 'Test' }]);
      useAppStore.getState().setSelectedSectionIndex(5);

      useAppStore.getState().clearSearch();
      const state = useAppStore.getState();

      expect(state.searchQuery).toBe('');
      expect(state.searchResults).toEqual([]);
      expect(state.selectedSectionIndex).toBe(0);
    });
  });

  describe('Selectors', () => {
    beforeEach(() => {
      const mockFlashcard: GeneratedFlashcard = {
        id: '1',
        ref: 'Genesis 1:1',
        heRef: null,
        question: 'Test question',
        options: ['A', 'B', 'C', 'D'],
        correctAnswer: 'A',
        difficulty: 'EASY',
        points: 5,
      };

      useAppStore.setState({
        stats: { points: 100, level: 2, streakDays: 5, longestStreak: 10, totalTextsStudied: 20 },
        flashcards: [mockFlashcard],
        currentIndex: 0,
      });
    });

    it('should select current flashcard', async () => {
      const { selectCurrentFlashcard } = await import('~/stores/appStore');
      const state = useAppStore.getState();
      const current = selectCurrentFlashcard(state);

      expect(current).toBeDefined();
      expect(current?.id).toBe('1');
    });

    it('should return null when no flashcard at current index', async () => {
      const { selectCurrentFlashcard } = await import('~/stores/appStore');
      useAppStore.setState({ currentIndex: 10 });
      const state = useAppStore.getState();
      const current = selectCurrentFlashcard(state);

      expect(current).toBeNull();
    });

    it('should calculate flashcard progress', async () => {
      const { selectFlashcardsProgress } = await import('~/stores/appStore');
      const state = useAppStore.getState();
      const progress = selectFlashcardsProgress(state);

      expect(progress.current).toBe(0);
      expect(progress.total).toBe(1);
      expect(progress.remaining).toBe(1);
      expect(progress.progress).toBe(0);
    });
  });
});
