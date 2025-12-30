# AI Flashcards - Quick Reference

## 🚀 Getting Started (5 minutes)

### 1. Add OpenAI API Key
```bash
# Add to .env file
echo 'OPENAI_API_KEY="sk-your-key-here"' >> .env
echo 'CRON_SECRET="'$(openssl rand -base64 32)'"' >> .env
```

### 2. Test Locally
```bash
# Start dev server
pnpm dev

# In another terminal, trigger generation
curl http://localhost:3000/api/cron/generate-flashcards
```

### 3. Check Results
```bash
# Get flashcards (replace YOUR_USER_KEY with value from browser localStorage)
curl "http://localhost:3000/api/flashcards/generated?userKey=YOUR_USER_KEY&limit=5"
```

## 📡 API Quick Reference

### Fetch Flashcards
```bash
GET /api/flashcards/generated?userKey={key}&limit={num}&difficulty={level}
```

### Submit Answer
```bash
POST /api/flashcards/generated
Body: { "userKey": "...", "flashcardId": "...", "selectedAnswer": "..." }
```

### Trigger Generation (Manual)
```bash
GET /api/cron/generate-flashcards?secret={CRON_SECRET}
```

## 🗄️ Database Queries

### Check Generation Status
```sql
SELECT ref, status, attempts, error FROM "FlashcardGenerationJob" ORDER BY createdAt DESC LIMIT 10;
```

### Count Flashcards
```sql
SELECT difficulty, COUNT(*) FROM "GeneratedFlashcard" GROUP BY difficulty;
```

### User Stats
```sql
SELECT 
  u.userKey,
  COUNT(*) as completed,
  SUM(pointsEarned) as points
FROM "UserFlashcardCompletion" ufc
JOIN "User" u ON u.id = ufc.userId
GROUP BY u.userKey;
```

## 🔧 Useful Commands

### Regenerate Prisma Client
```bash
pnpm prisma generate
```

### Open Database Studio
```bash
pnpm prisma studio
```

### Check TypeScript Errors
```bash
pnpm typecheck
```

### Run Migration
```bash
pnpm prisma migrate dev
```

## 📊 Point Values

- **EASY**: 5 points
- **MEDIUM**: 10 points
- **HARD**: 20 points

## ⚙️ Configuration

### Cron Schedule (vercel.json)
```json
{
  "crons": [
    {
      "path": "/api/cron/generate-flashcards",
      "schedule": "0 2 * * *"  // Daily at 2 AM UTC
    }
  ]
}
```

### Batch Size
Default: 20 refs per run
Location: `src/app/api/cron/generate-flashcards/route.ts`

### Rate Limiting
Default: 1 second delay between calls
Location: `src/server/ai/flashcard-generator.ts`

## 🐛 Troubleshooting

### OpenAI Error 401
→ Check `OPENAI_API_KEY` in `.env`

### No Flashcards Generated
→ Run `SELECT COUNT(*) FROM "StudiedText"` to check if texts exist
→ Manually trigger: `curl http://localhost:3000/api/cron/generate-flashcards`

### Rate Limit Error (429)
→ Reduce batch size or increase delay

### Stuck PROCESSING Jobs
```sql
UPDATE "FlashcardGenerationJob" SET status = 'PENDING' WHERE status = 'PROCESSING' AND "updatedAt" < NOW() - INTERVAL '1 hour';
```

## 📚 Documentation Files

- **Full Docs**: `FLASHCARDS_AI_GENERATION.md`
- **Setup Guide**: `FLASHCARDS_SETUP_GUIDE.md`
- **Implementation**: `IMPLEMENTATION_SUMMARY.md`
- **This File**: `QUICK_REFERENCE.md`

## 🎯 Next TODOs

1. [ ] Add `OPENAI_API_KEY` to `.env`
2. [ ] Test generation locally
3. [ ] Update flashcards page UI
4. [ ] Deploy to production
5. [ ] Monitor first cron run

## 💡 Tips

- Use Prisma Studio to inspect database: `pnpm prisma studio`
- Monitor OpenAI usage: https://platform.openai.com/usage
- Check Vercel logs for cron job status
- Test with simple refs first (e.g., "Avot 1:1")
- Keep batch size reasonable to avoid rate limits
