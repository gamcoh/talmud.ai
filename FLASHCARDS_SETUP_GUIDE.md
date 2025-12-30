# AI Flashcards Setup Guide

## Quick Start

### 1. Get OpenAI API Key

1. Go to [OpenAI Platform](https://platform.openai.com/)
2. Sign up or log in
3. Navigate to API Keys section
4. Create a new API key
5. Copy the key (starts with `sk-`)

### 2. Configure Environment Variables

Add to your `.env` file:

```env
OPENAI_API_KEY="sk-your-actual-api-key-here"
CRON_SECRET="generate-this-with-openssl-rand-base64-32"
```

Generate a secure cron secret:
```bash
openssl rand -base64 32
```

### 3. Database Migration

The migration has already been applied. Verify with:

```bash
pnpm prisma studio
```

Check that these tables exist:
- `GeneratedFlashcard`
- `UserFlashcardCompletion`
- `FlashcardGenerationJob`

### 4. Test the System

#### A. Add a Studied Text

1. Start your dev server: `pnpm dev`
2. Go to the dashboard
3. Search for and add a text (e.g., "Avot 1:1")

#### B. Manually Trigger Generation

```bash
curl http://localhost:3000/api/cron/generate-flashcards
```

Or if you set CRON_SECRET:
```bash
curl "http://localhost:3000/api/cron/generate-flashcards?secret=YOUR_SECRET"
```

#### C. Check Generated Flashcards

```bash
# Get your userKey from localStorage in browser console:
# localStorage.getItem('talmud.ai:user-key')

curl "http://localhost:3000/api/flashcards/generated?userKey=YOUR_USER_KEY&limit=5"
```

### 5. Deploy to Production

#### Vercel Deployment

1. **Add Environment Variables** in Vercel Dashboard:
   - `OPENAI_API_KEY`: Your OpenAI API key
   - `CRON_SECRET`: Your generated secret
   - `DATABASE_URL`: Your production database URL

2. **Deploy**:
   ```bash
   git add .
   git commit -m "Add AI flashcard generation"
   git push
   ```

3. **Enable Vercel Cron**:
   - Vercel automatically picks up `vercel.json` cron configuration
   - Check Vercel Dashboard > Project > Cron Jobs to verify it's enabled
   - First run will be at 2 AM UTC the next day

4. **Test Production Endpoint** (optional):
   ```bash
   curl "https://yourdomain.com/api/cron/generate-flashcards?secret=YOUR_SECRET"
   ```

## Usage Flow

### For Users

1. **Study texts** on the dashboard by searching and adding them
2. **Next day**, flashcards will be automatically generated overnight
3. **Access flashcards** through the flashcards page (needs UI update - see below)
4. **Answer questions** and earn points based on difficulty

### For Developers

#### Update Flashcards Page UI

The current flashcards page uses the old system. You'll need to update it to use the new generated flashcards API:

```typescript
// src/app/flashcards/page.tsx
// Replace the current implementation with a call to:
// GET /api/flashcards/generated?userKey=...

// When user answers:
// POST /api/flashcards/generated with flashcardId and selectedAnswer
```

Example integration:

```typescript
const fetchFlashcards = async (userKey: string) => {
  const res = await fetch(
    `/api/flashcards/generated?userKey=${userKey}&limit=10`
  );
  const data = await res.json();
  return data.flashcards;
};

const submitAnswer = async (
  userKey: string,
  flashcardId: string,
  selectedAnswer: string
) => {
  const res = await fetch("/api/flashcards/generated", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userKey, flashcardId, selectedAnswer }),
  });
  return res.json();
};
```

## Monitoring

### Check Cron Job Logs

**Vercel:**
1. Go to Vercel Dashboard
2. Select your project
3. Go to "Logs" tab
4. Filter by `/api/cron/generate-flashcards`

**Local:**
- Check terminal output when running `pnpm dev`

### Database Queries

```sql
-- See what's been generated
SELECT ref, status, attempts, createdAt, completedAt
FROM "FlashcardGenerationJob"
ORDER BY createdAt DESC
LIMIT 10;

-- Count flashcards by difficulty
SELECT difficulty, COUNT(*)
FROM "GeneratedFlashcard"
GROUP BY difficulty;

-- See recent user activity
SELECT u.userKey, COUNT(*) as completed, SUM(pointsEarned) as points
FROM "UserFlashcardCompletion" ufc
JOIN "User" u ON u.id = ufc.userId
GROUP BY u.userKey
ORDER BY points DESC;
```

## Cost Management

### Expected Costs

- **Development**: ~$1-5/month (testing)
- **Small app** (10-20 new texts/day): ~$10-20/month
- **Medium app** (50-100 new texts/day): ~$30-90/month
- **Large app** (200+ new texts/day): ~$100-300/month

### Reduce Costs

1. **Adjust batch size** in cron endpoint:
   ```typescript
   // Change from 20 to 10
   const result = await batchGenerateFlashcards(10);
   ```

2. **Run cron less frequently**:
   ```json
   // vercel.json - change to every 3 days
   {
     "crons": [
       {
         "path": "/api/cron/generate-flashcards",
         "schedule": "0 2 */3 * *"
       }
     ]
   }
   ```

3. **Filter texts** to only generate for popular refs:
   - Modify `getPendingRefsForGeneration` to prioritize refs studied by multiple users

## Troubleshooting

### "OpenAI API Key not found"

- Verify `OPENAI_API_KEY` is in `.env`
- Restart dev server after adding env vars
- In production, check Vercel environment variables

### "No flashcards generated"

- Check if you have studied texts: `SELECT * FROM "StudiedText" LIMIT 5;`
- Manually trigger: `curl http://localhost:3000/api/cron/generate-flashcards`
- Check logs for errors

### "Cron not running in Vercel"

- Verify `vercel.json` is in project root
- Check Vercel Dashboard > Cron Jobs
- Ensure you're on a plan that supports Cron (Hobby/Pro)
- First run happens at next scheduled time (2 AM UTC)

### "Rate limit exceeded"

- OpenAI has rate limits on API keys
- Reduce batch size
- Increase delay between calls in `flashcard-generator.ts`
- Check your OpenAI usage dashboard

## Next Steps

1. **Update Flashcards UI**: Integrate the new API into the flashcards page
2. **Add Progress Tracking**: Show users which texts have flashcards ready
3. **Statistics Dashboard**: Create admin view for generation stats
4. **Error Notifications**: Set up alerts for failed generation jobs
5. **Advanced Features**: Hebrew questions, adaptive difficulty, spaced repetition

## Resources

- [Full Documentation](./FLASHCARDS_AI_GENERATION.md)
- [OpenAI API Docs](https://platform.openai.com/docs)
- [Vercel Cron Docs](https://vercel.com/docs/cron-jobs)
- [Prisma Docs](https://www.prisma.io/docs)
