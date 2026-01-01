# Profile & User Menu Features

## Overview
Added complete profile management system with user menu dropdown in the navigation.

## Features Added

### 1. User Menu Dropdown
**Location:** Top-right corner of navigation (in AppShell)

**Components:**
- User avatar/initial button with gradient background
- Dropdown menu with:
  - User info display (name, email)
  - Profile link
  - Sign Out button

**File:** `src/components/ui/UserMenu.tsx`

**Features:**
- Click outside to close
- Profile image support or fallback to user initials
- Smooth animations and transitions
- Proper accessibility with ARIA labels

### 2. Profile Page
**Route:** `/profile`

**Sections:**

#### Profile Information
- **Name:** Editable text field
- **Email:** Display only (cannot be changed)
- **Profile Image:** Optional URL field for avatar image
- **Actions:** Edit/Save/Cancel buttons

#### Change Password
- Current password verification
- New password input (min 6 characters)
- Confirm password validation
- Only available for credential-based accounts (not OAuth)

#### Danger Zone
- **Delete Account:** Permanently removes user and all associated data
- Includes confirmation dialog
- Cascading delete for all user-related data:
  - Studied texts
  - Flashcard completions
  - Points history
  - Streaks
  - Levels
  - Goals
  - OAuth accounts
  - Sessions

**Files:**
- `src/app/profile/page.tsx` - Server component
- `src/app/profile/ProfileClient.tsx` - Client component with forms

### 3. API Endpoints

#### `PATCH /api/profile`
Update user profile information (name, image)

**Request Body:**
```json
{
  "name": "string (optional)",
  "image": "string (URL, optional)"
}
```

#### `PATCH /api/profile/password`
Change user password

**Request Body:**
```json
{
  "currentPassword": "string",
  "newPassword": "string"
}
```

#### `DELETE /api/profile`
Delete user account and all associated data

**Response:**
```json
{
  "success": true
}
```

**Files:**
- `src/app/api/profile/route.ts`
- `src/app/api/profile/password/route.ts`

## UI/UX Features

- Consistent with existing app design (dark theme, gradients, rounded corners)
- Form validation with error messages
- Success messages after operations
- Loading states during API calls
- Disabled states to prevent duplicate submissions
- Responsive layout

## Security Features

- All routes require authentication (via `requireUser()`)
- Password hashing with bcrypt
- Current password verification before changing
- Confirmation dialog for destructive actions
- Automatic sign-out after account deletion

## Usage

### User Menu
1. Click the avatar/initial button in the top-right corner
2. Select "Profile" to go to profile settings
3. Select "Sign Out" to log out

### Update Profile
1. Navigate to `/profile`
2. Click "Edit Profile"
3. Update name or image URL
4. Click "Save Changes"

### Change Password
1. Navigate to `/profile`
2. Click "Change Password"
3. Enter current password
4. Enter and confirm new password
5. Click "Change Password"

### Delete Account
1. Navigate to `/profile`
2. Scroll to "Danger Zone"
3. Click "Delete Account"
4. Confirm in the dialog
5. Account and all data will be permanently deleted

## Integration

The UserMenu component is integrated into the AppShell header:
- Automatically shows when user is authenticated
- Hidden on public pages
- Positioned to the right of navigation links
