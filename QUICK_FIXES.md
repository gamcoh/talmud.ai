# Quick Fix Guide for Remaining TypeScript Errors

## Files to Fix

### 1. SearchSection.tsx

**Location**: `src/components/dashboard/sections/SearchSection.tsx`

**Changes**:
```tsx
// Remove userKey from Props
type Props = {
  onAddStudied: (data: any) => Promise<void>;
  isPending: boolean;
};

// Update function signature
export function SearchSection({ onAddStudied, isPending }: Props) {
  // ... rest stays the same

  // In handleAddStudied, remove userKey from data object
  const handleAddStudied = async () => {
    if (!searchResult) return;

    // ... existing snippet logic

    const data = {
      // REMOVE: userKey,
      ref: searchResult.ref || query.trim(),
      heRef: searchResult.heRef,
      url: searchResult.url,
      title: searchResult.indexTitle || searchResult.ref,
      snippet: snippetToSave,
    };

    await onAddStudied(data);
  };
```

### 2. StudyHistorySection.tsx

**Location**: `src/components/dashboard/sections/StudyHistorySection.tsx`

**Changes**:
```tsx
// Remove userKey from Props
type Props = {
  studied: StudiedText[];
  totalCount: number;
};

// Update function signature
export function StudyHistorySection({ studied, totalCount }: Props) {
  // ...

  // Update loadMore function to get session
  const loadMore = async () => {
    setIsLoadingMore(true);
    try {
      const nextPage = Math.ceil(studied.length / 6) + 1;
      // Call API endpoint instead since we need auth
      const res = await fetch(`/api/studied-texts?page=${nextPage}&limit=6`);
      const result = await res.json();
      
      if (result.items) {
        setStudiedTexts(studied.concat(result.items), result.totalCount, result.hasMore);
      }
    } catch (error) {
      console.error('Failed to load more:', error);
    }
    setIsLoadingMore(false);
  };
```

### 3. DashboardClient.tsx

**Location**: `src/components/dashboard/DashboardClient.tsx`

**Line ~212 & ~220**: Remove userKey props

```tsx
// Around line 211
<SearchSection
  onAddStudied={handleAddStudiedItem}
  isPending={isPending}
/>

// Around line 217
<StudyHistorySection
  studied={studiedTexts.map(t => ({ ...t, createdAt: String(t.createdAt) }))}
  totalCount={totalTextsCount}
/>
```

**Line ~176**: Fix lastStudiedText type - the issue is that types/constants might define StudiedText differently

Check `src/components/dashboard/types.ts` or `constants.ts` and ensure StudiedText type matches the store type (should use `userId` not `userKey`).

### 4. Update addStudiedText server action call

**Location**: `src/components/dashboard/DashboardClient.tsx` (Line ~119)

The `handleAddStudiedItem` function needs to get userId from session. Since we're in a client component, we can either:

Option A: Update the server action to get userId from session automatically (recommended):

```tsx
// In DashboardClient.tsx - keep it simple, server action handles auth
const handleAddStudiedItem = async (data: Omit<Parameters<typeof addStudiedText>[0], 'userId'>) => {
  // Optimistic UI updates
  confetti({ /* ... */ });

  const optimisticItem: StudiedText = {
    id: `temp-${Date.now()}`,
    userId: '', // Server will set correct value
    ref: data.ref,
    heRef: data.heRef ?? null,
    url: data.url ?? null,
    title: data.title ?? null,
    snippet: data.snippet ?? null,
    createdAt: new Date().toISOString(),
  };

  addStudiedTextToStore(optimisticItem);
  showPointsNotification(10);

  startTransition(async () => {
    try {
      const result = await addStudiedText(data); // Server action gets userId from session
      removeStudiedText(optimisticItem.id);
      addStudiedTextToStore(result as any);
      
      if (result.pointsAwarded) {
        showPointsNotification(result.pointsAwarded);
      }
    } catch (error) {
      console.error('Failed to add studied text:', error);
      removeStudiedText(optimisticItem.id);
    }
  });
};
```

Then update the server action:

```tsx
// In src/server/actions/dashboard.ts
export async function addStudiedText(data: {
  ref: string;
  heRef?: string | null;
  url?: string | null;
  title?: string | null;
  snippet?: string | null;
}) {
  const session = await auth();
  if (!session?.user?.id) {
    throw new Error("Unauthorized");
  }

  const created = await db.studiedText.upsert({
    where: { userId_ref: { userId: session.user.id, ref: data.ref } },
    update: {
      heRef: data.heRef,
      url: data.url,
      title: data.title,
      snippet: data.snippet,
    },
    create: {
      userId: session.user.id,
      ...data
    },
  });

  const pointsResult = await awardPoints(session.user.id, "STUDY_TEXT", { ref: data.ref });

  revalidateTag(`user-${session.user.id}`);
  revalidateTag("studied-texts");
  
  return { ...created, pointsAwarded: pointsResult.points, newTotalPoints: pointsResult.newTotalPoints };
}
```

## Quick Commands

```bash
# Check for type errors
cd /home/gamzer/Desktop/_code/talmud.ai
pnpm typecheck

# Run dev server
pnpm dev

# Generate Prisma client if needed
pnpm prisma generate
```

## Summary

The main pattern is:
1. **Remove `userKey` from all prop types**
2. **Server actions get `userId` from session** via `await auth()`
3. **Client components don't need to pass userId** - it's automatic via authentication
4. **Types in store match database schema** (userId not userKey)

All API routes and server actions now handle authentication internally, so client code becomes simpler!