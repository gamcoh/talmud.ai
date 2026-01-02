import '@testing-library/jest-dom';
import { beforeAll, afterEach, vi } from 'vitest';

// Mock environment variables
beforeAll(() => {
  process.env.DATABASE_URL = 'postgresql://test:test@localhost:5432/test';
  process.env.NEXTAUTH_URL = 'http://localhost:3000';
  process.env.NEXTAUTH_SECRET = 'test-secret';
  process.env.AUTH_SECRET = 'test-secret';
  process.env.OPENAI_API_KEY = 'test-openai-key';
  process.env.AUTH_GOOGLE_ID = 'test-google-id';
  process.env.AUTH_GOOGLE_SECRET = 'test-google-secret';
});

// Cleanup after each test
afterEach(() => {
  vi.clearAllMocks();
});

// Global test utilities
global.fetch = vi.fn();

// Mock Next.js modules
vi.mock('next/cache', () => ({
  revalidatePath: vi.fn(),
  unstable_cache: vi.fn((fn) => fn),
}));

vi.mock('next/navigation', () => ({
  redirect: vi.fn(),
  useRouter: () => ({
    push: vi.fn(),
    replace: vi.fn(),
    prefetch: vi.fn(),
  }),
  useSearchParams: () => ({
    get: vi.fn(),
  }),
  usePathname: () => '/',
}));
