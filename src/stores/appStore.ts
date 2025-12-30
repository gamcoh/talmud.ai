import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

// Types
export type Difficulty = 'EASY' | 'MEDIUM' | 'HARD';

export type GeneratedFlashcard = {
  id: string;
  ref: string;
  heRef: string | null;
  question: string;
  options: string[];
  correctAnswer: string;
  difficulty: Difficulty;
  points: number;
};

export type StudiedText = {
  id: string;
  userKey: string;
  ref: string;
  heRef: string | null;
  url: string | null;
  title: string | null;
  snippet: string | null;
  createdAt: Date | string;
  userId?: string | null;
};

export type UserStats = {
  points: number;
  level: number;
  streakDays: number;
  longestStreak: number;
  totalTextsStudied: number;
};

export type DailyGoal = {
  currentMinutes: number;
  goalMinutes: number;
  lessonsCompleted: number;
};

// Store slices
interface UserSlice {
  userKey: string;
  setUserKey: (key: string) => void;
}

interface StatsSlice {
  stats: UserStats;
  updateStats: (stats: Partial<UserStats>) => void;
  addPoints: (points: number) => void;
  setStats: (stats: UserStats) => void;
}

interface FlashcardsSlice {
  flashcards: GeneratedFlashcard[];
  currentIndex: number;
  shuffledOptions: string[];
  isLoading: boolean;
  isSubmitting: boolean;
  selectedChoice: string | null;
  showResult: boolean;
  wasCorrect: boolean;
  correctAnswer: string | null;
  earnedPoints: number | null;
  
  setFlashcards: (cards: GeneratedFlashcard[]) => void;
  setCurrentIndex: (index: number) => void;
  nextCard: () => void;
  setShuffledOptions: (options: string[]) => void;
  setLoading: (loading: boolean) => void;
  setSubmitting: (submitting: boolean) => void;
  selectChoice: (choice: string) => void;
  setResult: (wasCorrect: boolean, correctAnswer: string, points: number) => void;
  clearResult: () => void;
  reset: () => void;
}

interface DashboardSlice {
  studiedTexts: StudiedText[];
  totalTextsCount: number;
  hasMoreTexts: boolean;
  isLoadingTexts: boolean;
  earnedPointsNotification: number | null;
  
  setStudiedTexts: (texts: StudiedText[], total: number, hasMore: boolean) => void;
  addStudiedText: (text: StudiedText) => void;
  removeStudiedText: (id: string) => void;
  setLoadingTexts: (loading: boolean) => void;
  showPointsNotification: (points: number) => void;
  hidePointsNotification: () => void;
}

interface SearchSlice {
  searchQuery: string;
  searchResults: any[];
  isSearching: boolean;
  selectedSectionIndex: number;
  
  setSearchQuery: (query: string) => void;
  setSearchResults: (results: any[]) => void;
  setSearching: (searching: boolean) => void;
  setSelectedSectionIndex: (index: number) => void;
  clearSearch: () => void;
}

// Combined store type
type AppStore = UserSlice & StatsSlice & FlashcardsSlice & DashboardSlice & SearchSlice;

// Initial states
const initialStats: UserStats = {
  points: 0,
  level: 1,
  streakDays: 0,
  longestStreak: 0,
  totalTextsStudied: 0,
};

const initialFlashcardsState = {
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
};

// Create the store
export const useAppStore = create<AppStore>()(
  devtools(
    persist(
      (set, get) => ({
        // User Slice
        userKey: '',
        setUserKey: (key) => set({ userKey: key }, false, 'setUserKey'),

        // Stats Slice
        stats: initialStats,
        updateStats: (newStats) =>
          set(
            (state) => ({
              stats: { ...state.stats, ...newStats },
            }),
            false,
            'updateStats'
          ),
        addPoints: (points) =>
          set(
            (state) => ({
              stats: {
                ...state.stats,
                points: state.stats.points + points,
              },
            }),
            false,
            'addPoints'
          ),
        setStats: (stats) => set({ stats }, false, 'setStats'),

        // Flashcards Slice
        ...initialFlashcardsState,
        setFlashcards: (cards) =>
          set({ flashcards: cards, currentIndex: 0 }, false, 'setFlashcards'),
        setCurrentIndex: (index) => set({ currentIndex: index }, false, 'setCurrentIndex'),
        nextCard: () =>
          set(
            (state) => ({
              currentIndex: state.currentIndex + 1,
              selectedChoice: null,
              showResult: false,
              isSubmitting: false,
              shuffledOptions: [],
            }),
            false,
            'nextCard'
          ),
        setShuffledOptions: (options) => set({ shuffledOptions: options }, false, 'setShuffledOptions'),
        setLoading: (loading) => set({ isLoading: loading }, false, 'setLoading'),
        setSubmitting: (submitting) => set({ isSubmitting: submitting }, false, 'setSubmitting'),
        selectChoice: (choice) => set({ selectedChoice: choice }, false, 'selectChoice'),
        setResult: (wasCorrect, correctAnswer, points) =>
          set(
            {
              showResult: true,
              wasCorrect,
              correctAnswer,
              earnedPoints: points,
            },
            false,
            'setResult'
          ),
        clearResult: () =>
          set(
            {
              selectedChoice: null,
              showResult: false,
              wasCorrect: false,
              correctAnswer: null,
              earnedPoints: null,
            },
            false,
            'clearResult'
          ),
        reset: () => set(initialFlashcardsState, false, 'resetFlashcards'),

        // Dashboard Slice
        studiedTexts: [],
        totalTextsCount: 0,
        hasMoreTexts: false,
        isLoadingTexts: false,
        earnedPointsNotification: null,
        
        setStudiedTexts: (texts, total, hasMore) =>
          set(
            {
              studiedTexts: texts,
              totalTextsCount: total,
              hasMoreTexts: hasMore,
              isLoadingTexts: false,
            },
            false,
            'setStudiedTexts'
          ),
        addStudiedText: (text) =>
          set(
            (state) => ({
              studiedTexts: [text, ...state.studiedTexts],
              totalTextsCount: state.totalTextsCount + 1,
              stats: {
                ...state.stats,
                totalTextsStudied: state.stats.totalTextsStudied + 1,
              },
            }),
            false,
            'addStudiedText'
          ),
        removeStudiedText: (id) =>
          set(
            (state) => ({
              studiedTexts: state.studiedTexts.filter((t) => t.id !== id),
              totalTextsCount: Math.max(0, state.totalTextsCount - 1),
            }),
            false,
            'removeStudiedText'
          ),
        setLoadingTexts: (loading) => set({ isLoadingTexts: loading }, false, 'setLoadingTexts'),
        showPointsNotification: (points) =>
          set({ earnedPointsNotification: points }, false, 'showPointsNotification'),
        hidePointsNotification: () =>
          set({ earnedPointsNotification: null }, false, 'hidePointsNotification'),

        // Search Slice
        searchQuery: '',
        searchResults: [],
        isSearching: false,
        selectedSectionIndex: 0,
        
        setSearchQuery: (query) => set({ searchQuery: query }, false, 'setSearchQuery'),
        setSearchResults: (results) => set({ searchResults: results }, false, 'setSearchResults'),
        setSearching: (searching) => set({ isSearching: searching }, false, 'setSearching'),
        setSelectedSectionIndex: (index) =>
          set({ selectedSectionIndex: index }, false, 'setSelectedSectionIndex'),
        clearSearch: () =>
          set(
            {
              searchQuery: '',
              searchResults: [],
              selectedSectionIndex: 0,
            },
            false,
            'clearSearch'
          ),
      }),
      {
        name: 'talmud-ai-storage',
        partialize: (state) => ({
          userKey: state.userKey,
          stats: state.stats,
        }),
      }
    )
  )
);

// Selectors for better performance
export const selectUserKey = (state: AppStore) => state.userKey;
export const selectStats = (state: AppStore) => state.stats;
export const selectPoints = (state: AppStore) => state.stats.points;
export const selectLevel = (state: AppStore) => state.stats.level;
export const selectStreak = (state: AppStore) => state.stats.streakDays;
export const selectCurrentFlashcard = (state: AppStore) =>
  state.flashcards[state.currentIndex] ?? null;
export const selectFlashcardsProgress = (state: AppStore) => ({
  current: state.currentIndex,
  total: state.flashcards.length,
  remaining: Math.max(0, state.flashcards.length - state.currentIndex),
  progress: state.flashcards.length ? state.currentIndex / state.flashcards.length : 0,
});
