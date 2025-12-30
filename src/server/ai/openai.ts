import OpenAI from "openai";
import { env } from "~/env";

export type GeneratedQuestion = {
  question: string;
  options: string[];
  correctAnswer: string;
  difficulty: "EASY" | "MEDIUM" | "HARD";
  explanation?: string;
};

type OpenAIMessage = {
  role: "system" | "user" | "assistant";
  content: string;
};

const client = new OpenAI({ apiKey: env.OPENAI_API_KEY });

/**
 * Generate flashcard questions from a Talmudic/Torah text using OpenAI
 * Uses the official `openai` package for requests
 */
export async function generateFlashcardsFromText(
  ref: string,
  heRef: string | null,
  textContent: string,
  contextText?: string
): Promise<GeneratedQuestion[]> {
  const systemPrompt = `You are an expert in Jewish texts, Talmud, Torah, and Rabbinic literature. 
Your task is to create educational multiple-choice questions (QCMs) based on the provided text.

Rules:
1. Generate 5-10 questions of varying difficulty (EASY, MEDIUM, HARD)
2. Each question must have 3-4 answer options
3. Questions must be grounded in the actual text provided
4. EASY questions: Basic comprehension (who, what, when, where)
5. MEDIUM questions: Understanding concepts, relationships, or simple inferences
6. HARD questions: Deep analysis, connections to other texts, or complex interpretations
7. All questions and answers should be clear and unambiguous
8. Use both Hebrew terms and English explanations when appropriate
9. When generating a medium or hard question, use both Hebrew and English terminology.
10. Most of the time when using expressions from the text, use the Hebrew terms.
11. If you feel the need to provide some context from the source text, include it in the question.
12. Return ONLY valid JSON, no additional text

Format your response as a JSON array. Important: correctAnswer must be the exact option text (not an index):
[
  {
    "question": "Question text here?",
    "options": ["Option A", "Option B", "Option C", "Option D"],
    "correctAnswer": "Option A",
    "difficulty": "EASY",
    "explanation": "Brief explanation why this is correct (optional)"
  }
]`;

  // Truncate long texts to avoid exceeding model prompt limits
  const MAX_TEXT_CHARS = 3000;
  const truncatedText = textContent.length > MAX_TEXT_CHARS ? `${textContent.slice(0, MAX_TEXT_CHARS)}\n... [TRUNCATED]` : textContent;
  const truncatedContext = contextText && contextText.length > MAX_TEXT_CHARS ? `${contextText.slice(0, MAX_TEXT_CHARS)}\n... [TRUNCATED]` : contextText;

  const userPrompt = `Text Reference: ${ref}${heRef ? ` (${heRef})` : ""}

Text Content:
${truncatedText}

${truncatedContext ? `\nAdditional Context:\n${truncatedContext}\n` : ""}

Generate 5-10 educational multiple-choice questions based on this text. Ensure a mix of difficulty levels and that all questions are directly answerable from the text.`;

  const messages: OpenAIMessage[] = [
    { role: "system", content: systemPrompt },
    { role: "user", content: userPrompt },
  ];

  try {
    const response = await client.chat.completions.create({
      model: "gpt-5-nano",
      messages,
      max_completion_tokens: 16000,
    });

    const content = response.choices?.[0]?.message?.content;
      if (!content) {
        console.error('OpenAI raw response:', JSON.stringify(response, null, 2));
        throw new Error("No content in OpenAI response");
      }

    let parsed: { questions?: GeneratedQuestion[] } | GeneratedQuestion[];
    try {
      parsed = JSON.parse(content);
    } catch (e) {
      console.error("Failed to parse OpenAI response:", content);
      throw new Error("Invalid JSON from OpenAI");
    }

    const questions = Array.isArray(parsed) ? parsed : parsed.questions ?? [];

    const validQuestions = questions.filter(
      (q): q is GeneratedQuestion =>
        typeof q === "object" &&
        q !== null &&
        typeof q.question === "string" &&
        Array.isArray(q.options) &&
        q.options.length >= 3 &&
        q.options.length <= 4 &&
        typeof q.correctAnswer === "string" &&
        q.options.includes(q.correctAnswer) &&
        ["EASY", "MEDIUM", "HARD"].includes(q.difficulty)
    );

    if (validQuestions.length === 0) {
      throw new Error("No valid questions generated");
    }

    return validQuestions;
  } catch (error) {
    console.error("Error generating flashcards with OpenAI:", error);
    throw error;
  }
}

/**
 * Calculate points for a question based on difficulty
 */
export function getPointsForDifficulty(difficulty: "EASY" | "MEDIUM" | "HARD"): number {
  switch (difficulty) {
    case "EASY":
      return 5;
    case "MEDIUM":
      return 10;
    case "HARD":
      return 20;
    default:
      return 5;
  }
}
