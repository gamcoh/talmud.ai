# Talmud.AI Setup Guide

## Database Setup

### 1. Start the Database
```bash
./start-database.sh
```

### 2. Run Migrations
```bash
pnpm db:generate
```

### 3. Seed the Database with Fake Data
```bash
pnpm db:seed
```

This will create a demo user with:
- **User Key**: `demo-user`
- **Level**: 5 (1240 points)
- **Streak**: 6 days current, 14 days longest
- **Goals**: 
  - Daily: 30 minutes study time (18/30 progress)
  - Daily: 5 texts studied (3/5 progress)
  - Weekly: 20 flashcards reviewed (12/20 progress)
- **Study History**: 30 days of varied study sessions
- **Studied Texts**: 5 sample texts from Genesis, Berakhot, Pirkei Avot, etc.
- **Flashcards**: 3 sample flashcards

## Development

### Start the Dev Server
```bash
pnpm dev
```

The dashboard will automatically connect to the database and display:
- ✅ Real-time stats (points, level, streak)
- ✅ Dynamic weekly calendar from study sessions
- ✅ Daily goals with live progress
- ✅ Daily wisdom from Pirkei Avot (fetched from Sefaria API)
- ✅ Study history from the database
- ✅ Sefaria search integration

### User Key Management

The app uses localStorage to track the current user. By default, it's set to `demo-user` which matches the seeded data.

To use a different user, change the localStorage key:
```javascript
localStorage.setItem("talmud-user-key", "your-user-key");
```

## API Endpoints

### GET `/api/gamification/stats`
Headers: `x-user-key: demo-user`

Returns:
- User level and total points
- Current and longest streak
- Recent point history
- Study sessions (last 30 days)
- Active goals
- Weekly calendar data (last 7 days)
- Current focus (last studied text)
- Daily wisdom from Pirkei Avot

### POST `/api/gamification/study`
Headers: `x-user-key: demo-user`
Body: `{ "type": "text" | "flashcard", "ref": "optional-reference" }`

Awards points and updates:
- Study session for today
- Goal progress
- Streak (if first study today)
- Point history

### POST `/api/studied-texts`
Body: `{ "userKey": "demo-user", "ref": "...", "title": "...", ... }`

Records a studied text and awards points.

## Database Schema

Key tables:
- **User**: User profiles with unique keys
- **Streak**: Current and longest streaks
- **Level**: User levels and total points
- **Points**: Point history with actions and metadata
- **StudySession**: Daily study sessions (date, duration, counts)
- **Goal**: User goals with type, target, progress, period
- **StudiedText**: Texts studied with Sefaria references
- **Flashcard**: Flashcards with prompts and answers
- **FlashcardReview**: Review history with spaced repetition data

## Re-seeding the Database

To reset and re-seed:
```bash
pnpm db:seed
```

This will delete existing demo-user data and create fresh seed data.
