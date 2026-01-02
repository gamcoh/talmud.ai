# Test Suite for Talmud.AI

This directory contains comprehensive tests for the entire application.

## Test Structure

```
src/__tests__/
├── setup.ts                    # Global test setup and configuration
├── unit/                       # Unit tests for isolated functions/modules
│   ├── server/                 # Server-side logic tests
│   │   ├── flashcards/        # Flashcard service tests (spaced repetition)
│   │   ├── gamification/      # Gamification service tests (points, levels)
│   │   └── ai/                # AI services tests (OpenAI, Sefaria)
│   ├── lib/                   # Utility function tests
│   └── stores/                # Zustand store tests
├── integration/               # Integration tests
│   ├── api/                   # API route tests
│   └── services/              # Service integration tests
└── components/                # React component tests
    ├── ui/                    # UI component tests
    └── dashboard/             # Dashboard component tests
```

## Running Tests

### Run all tests in watch mode
```bash
pnpm test
```

### Run tests once (CI mode)
```bash
pnpm test:run
```

### Run tests with UI
```bash
pnpm test:ui
```

### Run tests with coverage
```bash
pnpm test:coverage
```

### Run specific test file
```bash
pnpm test src/__tests__/unit/server/gamification/service.test.ts
```

### Run tests matching a pattern
```bash
pnpm test flashcard
```

## Test Categories

### Unit Tests

#### Server Services
- **Gamification Service** (`unit/server/gamification/service.test.ts`)
  - `calculateLevel()` - Points to level conversion
  - Tests all level thresholds and edge cases

- **Flashcard Service** (`unit/server/flashcards/service.test.ts`)
  - `scheduleNext()` - Spaced repetition algorithm (SM-2)
  - Tests all grade types (Again, Hard, Good, Easy)
  - Tests interval calculations and ease factor adjustments

- **AI Services**
  - **OpenAI** (`unit/server/ai/openai.test.ts`)
    - `getPointsForDifficulty()` - Point assignment by difficulty
  - **Sefaria** (`unit/server/ai/sefaria-service.test.ts`)
    - `parseReference()` - Parse Talmudic references
    - `normalizeRef()` - Reference normalization
    - `textToString()` - Text array conversion

#### Utilities
- **Mock Data** (`unit/lib/mock-data.test.ts`)
  - `pointsForLevel()` - Level point thresholds
  - `getLevelFromPoints()` - Inverse level calculation

#### State Management
- **Zustand Store** (`unit/stores/appStore.test.ts`)
  - Stats slice (points, levels, streaks)
  - Flashcards slice (current card, progress, results)
  - Dashboard slice (studied texts, notifications)
  - Search slice (query, results, filters)
  - All selectors

### Component Tests

#### UI Components
- **Button** (`components/ui/Button.test.tsx`)
  - Click handling, disabled states, variants
- **Input** (`components/ui/Input.test.tsx`)
  - Value changes, validation, types
- **ProgressBar** (`components/ui/ProgressBar.test.tsx`)
  - Progress display, variants, accessibility

## Test Coverage

Current test coverage includes:
- ✅ Gamification logic (level calculation)
- ✅ Spaced repetition algorithm
- ✅ AI service utilities
- ✅ Reference parsing and normalization
- ✅ State management (all slices)
- ✅ Core UI components
- ✅ Utility functions

### Areas for Future Coverage
- API routes (requires mocking Prisma)
- Component integration tests
- Dashboard hooks
- Auth flow
- Full flashcard generation pipeline

## Writing Tests

### Example Unit Test
```typescript
import { describe, it, expect } from 'vitest';

describe('MyFunction', () => {
  it('should return expected value', () => {
    const result = myFunction(input);
    expect(result).toBe(expected);
  });
});
```

### Example Component Test
```typescript
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

it('should handle user interaction', async () => {
  const user = userEvent.setup();
  render(<MyComponent />);

  await user.click(screen.getByRole('button'));
  expect(screen.getByText('Result')).toBeInTheDocument();
});
```

## Configuration

Tests are configured via `vitest.config.ts`:
- Environment: jsdom (for React components)
- Setup file: `src/__tests__/setup.ts`
- Coverage provider: v8
- Globals: enabled

## CI Integration

Tests can be run in CI with:
```bash
pnpm test:run
```

This will:
- Run all tests once (no watch mode)
- Exit with code 0 on success, 1 on failure
- Generate coverage reports

## Best Practices

1. **Arrange-Act-Assert**: Structure tests clearly
2. **Descriptive names**: Test names should explain what's being tested
3. **One assertion per test**: Keep tests focused
4. **Mock external dependencies**: Use vi.fn() and vi.mock()
5. **Clean up**: Use beforeEach/afterEach for test isolation
6. **Test edge cases**: Include boundary conditions
7. **Accessibility**: Use semantic queries (getByRole, getByLabelText)
