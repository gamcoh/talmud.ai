# AI-Generated Flashcards Feature

## Overview

This feature automatically generates educational flashcards from Torah and Talmud texts that users have studied. It uses OpenAI's GPT-4o-mini model to create multiple-choice questions (QCMs) based on the sources users add to their study history.

## How It Works

### 1. Text Collection
- Users add texts to their study history through the dashboard
- The system tracks all unique references (refs) from studied texts
- Each ref is stored in the `StudiedText` table

### 2. Nightly Generation (Cron Job)
- A cron job runs every night at 2 AM (UTC)
- It identifies newly added refs that haven't had flashcards generated yet
- For each ref, it:
  - Fetches the text content from Sefaria.org API
  - For segmented references (e.g., "Avoda Zara 2b:12"), fetches the full page context
  - Sends the text to OpenAI GPT-4o-mini to generate 5-10 questions
  - Stores the generated questions in the database

### 3. Question Generation
- Questions are generated in three difficulty levels:
  - **EASY** (5 points): Basic comprehension questions
  - **MEDIUM** (10 points): Understanding concepts and relationships
  - **HARD** (20 points): Deep analysis and complex interpretations
- Each question has 3-4 multiple choice answers
- All questions are grounded in the actual text

### 4. User Experience
- Users see generated flashcards based on texts they've studied
- Questions are presented in order: easier first, then harder
- Users select an answer and receive immediate feedback
- Correct answers award points based on difficulty
- System tracks which flashcards each user has completed

## Database Schema

### New Tables

#### `GeneratedFlashcard`
Stores AI-generated flashcard questions
- `id`: Unique identifier
- `ref`: Source reference (e.g., "Avot 1:1")
- `heRef`: Hebrew reference (optional)
- `question`: The question text
- `options`: Array of 3-4 possible answers
- `correctAnswer`: The correct answer from options
- `difficulty`: EASY, MEDIUM, or HARD
- `points`: Points awarded for correct answer
- `contextText`: Full context for segmented sources
- `generatedAt`: When the flashcard was created
- `isActive`: Whether the flashcard is active

#### `UserFlashcardCompletion`
Tracks which users completed which flashcards
- `userId`: Reference to User
- `flashcardId`: Reference to GeneratedFlashcard
- `wasCorrect`: Whether the answer was correct
- `pointsEarned`: Points earned (0 if incorrect)
- `completedAt`: When the flashcard was completed

#### `FlashcardGenerationJob`
Tracks generation job status to prevent duplicates
- `ref`: Source reference (unique)
- `status`: PENDING, PROCESSING, COMPLETED, or FAILED
- `error`: Error message if failed
- `attempts`: Number of generation attempts
- `completedAt`: When the job completed

## API Endpoints

### GET `/api/flashcards/generated`
Fetch flashcards for a user

**Query Parameters:**
- `userKey` (required): User identifier
- `limit` (optional): Number of flashcards to return (default 10, max 50)
- `difficulty` (optional): Filter by difficulty (EASY, MEDIUM, or HARD)

**Response:**
```json
{
  "flashcards": [
    {
      "id": "clx123...",
      "ref": "Avot 1:1",
      "heRef": "אבות א:א",
      "question": "Who said 'Be deliberate in judgment'?",
      "options": ["Moses", "The Men of the Great Assembly", "Hillel", "Shammai"],
      "difficulty": "MEDIUM",
      "points": 10
    }
  ],
  "count": 1
}
```

### POST `/api/flashcards/generated`
Submit an answer to a flashcard

**Body:**
```json
{
  "userKey": "user123",
  "flashcardId": "clx123...",
  "selectedAnswer": "The Men of the Great Assembly"
}
```

**Response:**
```json
{
  "success": true,
  "wasCorrect": true,
  "correctAnswer": "The Men of the Great Assembly",
  "pointsEarned": 10,
  "difficulty": "MEDIUM"
}
```

### GET/POST `/api/cron/generate-flashcards`
Trigger flashcard generation (protected by CRON_SECRET)

**Query Parameters:**
- `secret` (required): Must match CRON_SECRET environment variable

**Response:**
```json
{
  "success": true,
  "message": "Flashcard generation completed",
  "processed": 15,
  "succeeded": 14,
  "failed": 1,
  "errors": [
    {
      "ref": "Invalid Reference",
      "error": "Sefaria API error: 404"
    }
  ],
  "timestamp": "2025-12-30T09:30:00.000Z"
}
```

## Configuration

### Environment Variables

Add these to your `.env` file:

```env
# OpenAI API Key (required)
OPENAI_API_KEY=sk-...your-key-here...

# Cron Secret (optional, but recommended for production)
CRON_SECRET=your-random-secret-string
```

### Vercel Cron Setup

The `vercel.json` file configures automatic execution:

```json
{
  "crons": [
    {
      "path": "/api/cron/generate-flashcards",
      "schedule": "0 2 * * *"
    }
  ]
}
```

This runs the job daily at 2 AM UTC. Adjust the cron schedule as needed:
- `0 2 * * *` - Daily at 2 AM
- `0 */6 * * *` - Every 6 hours
- `0 0 * * 0` - Weekly on Sunday at midnight

### Alternative Cron Setup

If not using Vercel, you can trigger the endpoint from:

1. **GitHub Actions** (`.github/workflows/cron-flashcards.yml`):
```yaml
name: Generate Flashcards
on:
  schedule:
    - cron: '0 2 * * *'
jobs:
  generate:
    runs-on: ubuntu-latest
    steps:
      - name: Trigger generation
        run: |
          curl -X POST "https://yourdomain.com/api/cron/generate-flashcards?secret=${{ secrets.CRON_SECRET }}"
```

2. **External Cron Service** (cron-job.org, EasyCron, etc.):
   - Set URL: `https://yourdomain.com/api/cron/generate-flashcards?secret=YOUR_SECRET`
   - Set schedule: Daily at 2 AM

3. **Server Crontab**:
```bash
0 2 * * * curl -X POST "https://yourdomain.com/api/cron/generate-flashcards?secret=YOUR_SECRET"
```

## Cost Considerations

### OpenAI API Costs
- Model: GPT-4o-mini (cost-effective)
- Approximate cost: $0.15 per 1M input tokens, $0.60 per 1M output tokens
- Per flashcard generation (10 questions): ~$0.01-0.03
- For 100 new refs per day: ~$1-3/day, ~$30-90/month

### Optimization Strategies
1. **Batch Size**: Adjust batch size in cron job (default 20 refs per run)
2. **Rate Limiting**: 1-second delay between API calls to avoid rate limits
3. **Retry Logic**: Failed jobs are tracked and can be retried
4. **Context Optimization**: Only fetch full context for segmented references

## Monitoring

### Check Generation Status
Query the database to see job status:

```sql
-- Recent generation jobs
SELECT ref, status, attempts, error, completedAt 
FROM "FlashcardGenerationJob" 
ORDER BY createdAt DESC 
LIMIT 20;

-- Generation success rate
SELECT 
  status, 
  COUNT(*) as count,
  AVG(attempts) as avg_attempts
FROM "FlashcardGenerationJob"
GROUP BY status;
```

### Check Generated Flashcards
```sql
-- Flashcards by difficulty
SELECT difficulty, COUNT(*) as count
FROM "GeneratedFlashcard"
WHERE isActive = true
GROUP BY difficulty;

-- User completion stats
SELECT 
  u.userKey,
  COUNT(*) as completed,
  SUM(CASE WHEN wasCorrect THEN 1 ELSE 0 END) as correct,
  SUM(pointsEarned) as totalPoints
FROM "UserFlashcardCompletion" ufc
JOIN "User" u ON u.id = ufc.userId
GROUP BY u.userKey;
```

## Development & Testing

### Manual Trigger
During development, you can manually trigger generation:

```bash
# Without secret (if CRON_SECRET not set in dev)
curl http://localhost:3000/api/cron/generate-flashcards

# With secret
curl "http://localhost:3000/api/cron/generate-flashcards?secret=YOUR_SECRET"
```

### Test Single Ref Generation
Create a test script (`scripts/test-generation.ts`):

```typescript
import { generateFlashcardsForRef } from "~/server/ai/flashcard-generator";

async function test() {
  const result = await generateFlashcardsForRef("Avot 1:1");
  console.log(result);
}

test();
```

Run with: `tsx scripts/test-generation.ts`

## Troubleshooting

### Common Issues

1. **OpenAI API Key Invalid**
   - Error: "OpenAI API error: 401"
   - Solution: Verify OPENAI_API_KEY in `.env`

2. **Sefaria API Errors**
   - Error: "Sefaria API error: 404"
   - Solution: Check if the ref exists on Sefaria.org

3. **Rate Limiting**
   - Error: "OpenAI API error: 429"
   - Solution: Reduce batch size or increase delay between calls

4. **Database Errors**
   - Error: "Unique constraint violation"
   - Solution: Clear stuck PROCESSING jobs or retry failed jobs

### Clear Stuck Jobs
```sql
-- Reset stuck processing jobs (older than 1 hour)
UPDATE "FlashcardGenerationJob"
SET status = 'PENDING'
WHERE status = 'PROCESSING'
  AND "updatedAt" < NOW() - INTERVAL '1 hour';
```

### Retry Failed Jobs
```sql
-- Reset failed jobs with few attempts
UPDATE "FlashcardGenerationJob"
SET status = 'PENDING', error = NULL
WHERE status = 'FAILED'
  AND attempts < 3;
```

## Future Enhancements

1. **Smart Scheduling**: Prioritize refs that multiple users studied
2. **Adaptive Difficulty**: Adjust difficulty based on user performance
3. **Spaced Repetition**: Integrate with existing flashcard review system
4. **Hebrew Questions**: Generate questions in Hebrew for advanced users
5. **Context Hints**: Provide hints that reference the original text
6. **Multi-Language**: Support questions in multiple languages
7. **Custom Prompts**: Allow admins to customize question generation prompts

## Security Notes

1. **Protect Cron Endpoint**: Always set CRON_SECRET in production
2. **API Key Security**: Never commit OPENAI_API_KEY to version control
3. **Rate Limiting**: Consider adding rate limiting to public API endpoints
4. **Input Validation**: All user inputs are validated with Zod schemas
5. **Error Handling**: Errors are logged but don't expose sensitive information

## Support

For issues or questions:
1. Check the logs in Vercel dashboard (or your hosting platform)
2. Review database records for job status
3. Test API endpoints manually with curl
4. Check OpenAI API dashboard for usage and errors
