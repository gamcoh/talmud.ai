# Authentication Setup Guide

## ✅ Completed Steps

1. ✅ Installed NextAuth.js v5 and dependencies
2. ✅ Updated Prisma schema with NextAuth models (User, Account, Session, VerificationToken)
3. ✅ Removed userKey system in favor of authenticated userId
4. ✅ Added environment variables for NextAuth (AUTH_SECRET, AUTH_GOOGLE_ID, AUTH_GOOGLE_SECRET)
5. ✅ Created NextAuth configuration at `src/lib/auth.ts`
6. ✅ Created API routes for auth (`/api/auth/[...nextauth]`, `/api/auth/signup`)
7. ✅ Created auth UI pages (signin, signup, error)
8. ✅ Updated middleware for route protection
9. ✅ Updated Zustand store (removed userKey)
10. ✅ Updated API routes to use authenticated user
11. ✅ Updated gamification service functions (userKey → userId)

## 🔧 Remaining Manual Steps

### 1. Update SearchSection Component

File: `src/components/dashboard/sections/SearchSection.tsx`

Remove `userKey` prop since it's handled by authenticated actions:

```tsx
// Remove userKey from Props type
type Props = {
  onAddStudied: (data: any) => Promise<void>;
  isPending: boolean;
};

// Remove userKey from function signature
export function SearchSection({ onAddStudied, isPending }: Props) {
  // ... rest of code

  // Update handleAddStudied to not include userKey
  const handleAddStudied = async () => {
    if (!searchResult) return;

    // ... existing logic

    const data = {
      // Remove: userKey,
      ref: searchResult.ref || query.trim(),
      heRef: searchResult.heRef,
      url: searchResult.url,
      title: searchResult.indexTitle || searchResult.ref,
      snippet: snippetToSave,
    };

    await onAddStudied(data);
  };
```

### 2. Update DashboardClient Component

File: `src/components/dashboard/DashboardClient.tsx`

Remove `userKey` props from child components:

```tsx
// Line ~211: Remove userKey prop
<SearchSection
  onAddStudied={handleAddStudiedItem}
  isPending={isPending}
/>

// Line ~220: Remove userKey prop  
<StudyHistorySection
  studied={studiedTexts.map(t => ({ ...t, createdAt: String(t.createdAt) }))}
  totalCount={totalTextsCount}
/>
```

Also update `handleAddStudiedItem` to use userId from session instead of userKey.

### 3. Update StudyHistorySection Component

File: `src/components/dashboard/sections/StudyHistorySection.tsx`

Remove `userKey` prop if it exists and uses authenticated actions instead.

### 4. Generate Prisma Migration

```bash
cd /home/gamzer/Desktop/_code/talmud.ai
pnpm prisma migrate dev --name add_nextauth
```

This will create a migration for:
- Adding NextAuth tables (Account, Session, VerificationToken)
- Updating User model (email, password, name, image, emailVerified)
- Removing userKey from User
- Updating StudiedText to use userId instead of userKey

### 5. Set Environment Variables

Create or update `.env` file:

```bash
# Generate a secret (run in terminal):
openssl rand -base64 32

# Add to .env:
AUTH_SECRET="your-generated-secret"

# Get Google OAuth credentials from:
# https://console.cloud.google.com/apis/credentials
# Authorized redirect URIs: http://localhost:3000/api/auth/callback/google

AUTH_GOOGLE_ID="your-google-client-id"
AUTH_GOOGLE_SECRET="your-google-client-secret"
```

### 6. Update Homepage Call-to-Action

File: `src/app/page.tsx`

Update the "Get Started" link to point to `/auth/signup` for new users:

```tsx
<Link href="/auth/signup">
  <Button variant="primary" size="lg">
    Get Started →
  </Button>
</Link>

// Also add a sign in link:
<Link href="/auth/signin">
  <Button variant="secondary" size="lg">
    Sign In
  </Button>
</Link>
```

### 7. Add User Profile/Logout Button

File: `src/components/app/AppShell.tsx`

Add user menu with logout:

```tsx
"use client";

import { useSession, signOut } from "next-auth/react";

// In your navigation:
const { data: session } = useSession();

{session && (
  <button onClick={() => signOut()}>
    {session.user.name || session.user.email}
  </button>
)}
```

### 8. Handle Existing Data Migration (If Needed)

If you have existing users with the old `userKey` system, you'll need a data migration script. The new system requires users to create accounts with email/password or OAuth.

## 🧪 Testing Checklist

- [ ] Sign up with email/password works
- [ ] Sign in with email/password works
- [ ] Google OAuth sign in works
- [ ] Protected routes redirect to `/auth/signin` when not authenticated
- [ ] Authenticated routes work (dashboard, flashcards)
- [ ] Points and stats save correctly per user
- [ ] Studied texts are user-specific
- [ ] Flashcards completion is user-specific
- [ ] Sign out works correctly

## 📝 Notes

- The landing page (`/`) remains public
- All other pages require authentication
- User sessions are JWT-based (stored in cookies)
- Google OAuth needs to be configured in Google Cloud Console
- Password hashing uses bcryptjs (10 rounds)
