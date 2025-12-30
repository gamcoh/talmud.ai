-- CreateEnum
CREATE TYPE "Difficulty" AS ENUM ('EASY', 'MEDIUM', 'HARD');

-- CreateEnum
CREATE TYPE "FlashcardJobStatus" AS ENUM ('PENDING', 'PROCESSING', 'COMPLETED', 'FAILED');

-- CreateTable
CREATE TABLE "GeneratedFlashcard" (
    "id" TEXT NOT NULL,
    "ref" TEXT NOT NULL,
    "heRef" TEXT,
    "question" TEXT NOT NULL,
    "options" TEXT[],
    "correctAnswer" TEXT NOT NULL,
    "difficulty" "Difficulty" NOT NULL,
    "points" INTEGER NOT NULL,
    "contextText" TEXT,
    "generatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isActive" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "GeneratedFlashcard_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserFlashcardCompletion" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "flashcardId" TEXT NOT NULL,
    "wasCorrect" BOOLEAN NOT NULL,
    "pointsEarned" INTEGER NOT NULL,
    "completedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserFlashcardCompletion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FlashcardGenerationJob" (
    "id" TEXT NOT NULL,
    "ref" TEXT NOT NULL,
    "status" "FlashcardJobStatus" NOT NULL DEFAULT 'PENDING',
    "error" TEXT,
    "attempts" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "completedAt" TIMESTAMP(3),

    CONSTRAINT "FlashcardGenerationJob_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "GeneratedFlashcard_ref_idx" ON "GeneratedFlashcard"("ref");

-- CreateIndex
CREATE INDEX "GeneratedFlashcard_difficulty_idx" ON "GeneratedFlashcard"("difficulty");

-- CreateIndex
CREATE INDEX "GeneratedFlashcard_generatedAt_idx" ON "GeneratedFlashcard"("generatedAt");

-- CreateIndex
CREATE INDEX "UserFlashcardCompletion_userId_completedAt_idx" ON "UserFlashcardCompletion"("userId", "completedAt");

-- CreateIndex
CREATE INDEX "UserFlashcardCompletion_flashcardId_idx" ON "UserFlashcardCompletion"("flashcardId");

-- CreateIndex
CREATE UNIQUE INDEX "UserFlashcardCompletion_userId_flashcardId_key" ON "UserFlashcardCompletion"("userId", "flashcardId");

-- CreateIndex
CREATE UNIQUE INDEX "FlashcardGenerationJob_ref_key" ON "FlashcardGenerationJob"("ref");

-- CreateIndex
CREATE INDEX "FlashcardGenerationJob_status_createdAt_idx" ON "FlashcardGenerationJob"("status", "createdAt");

-- AddForeignKey
ALTER TABLE "UserFlashcardCompletion" ADD CONSTRAINT "UserFlashcardCompletion_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserFlashcardCompletion" ADD CONSTRAINT "UserFlashcardCompletion_flashcardId_fkey" FOREIGN KEY ("flashcardId") REFERENCES "GeneratedFlashcard"("id") ON DELETE CASCADE ON UPDATE CASCADE;
