/*
  Warnings:

  - You are about to drop the column `userId` on the `GeneratedFlashcard` table. All the data in the column will be lost.

  Migration strategy: Flashcards are now shared across all users who studied the same source.

*/

-- DropForeignKey
ALTER TABLE "GeneratedFlashcard" DROP CONSTRAINT "GeneratedFlashcard_userId_fkey";

-- DropIndex
DROP INDEX "GeneratedFlashcard_userId_idx";

-- DropIndex
DROP INDEX "GeneratedFlashcard_userId_ref_idx";

-- AlterTable
ALTER TABLE "GeneratedFlashcard" DROP COLUMN "userId";
