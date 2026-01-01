/*
  Warnings:

  - Added the required column `userId` to the `GeneratedFlashcard` table without a default value. This is not possible if the table is not empty.

  Migration strategy: Delete all existing flashcards. They will be regenerated per-user by the cron job.

*/

-- Delete all existing flashcards (they will be regenerated per-user)
DELETE FROM "GeneratedFlashcard";

-- AlterTable
ALTER TABLE "GeneratedFlashcard" ADD COLUMN     "userId" TEXT NOT NULL;

-- CreateIndex
CREATE INDEX "GeneratedFlashcard_userId_idx" ON "GeneratedFlashcard"("userId");

-- CreateIndex
CREATE INDEX "GeneratedFlashcard_userId_ref_idx" ON "GeneratedFlashcard"("userId", "ref");

-- AddForeignKey
ALTER TABLE "GeneratedFlashcard" ADD CONSTRAINT "GeneratedFlashcard_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
