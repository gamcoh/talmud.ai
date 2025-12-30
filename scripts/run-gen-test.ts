import { batchGenerateFlashcards } from '~/server/ai/flashcard-generator';

(async () => {
  try {
    const result = await batchGenerateFlashcards(1);
    console.log('Batch result:', result);
    process.exit(0);
  } catch (e) {
    console.error('Error running batchGenerateFlashcards:', e);
    process.exit(1);
  }
})();
