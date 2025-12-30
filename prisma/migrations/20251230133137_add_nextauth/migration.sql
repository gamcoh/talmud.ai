/*
  Warnings:

  - You are about to drop the column `userKey` on the `StudiedText` table. All the data in the column will be lost.
  - You are about to drop the column `userKey` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId,ref]` on the `StudiedText` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the `User` will be added. If there are existing duplicate values, this will fail.
  - Made the column `userId` on table `StudiedText` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `email` to the `User` table without a default value. This is not possible if the table is not empty.

*/

-- Clean up existing data (development only - adapt for production)
DELETE FROM "StudiedText";
DELETE FROM "UserFlashcardCompletion";  
DELETE FROM "Points";
DELETE FROM "Goal";
DELETE FROM "StudySession";
DELETE FROM "Streak";
DELETE FROM "Level";
DELETE FROM "User";

-- DropForeignKey
ALTER TABLE "StudiedText" DROP CONSTRAINT "StudiedText_userId_fkey";

-- DropIndex
DROP INDEX "StudiedText_userKey_createdAt_idx";

-- DropIndex
DROP INDEX "StudiedText_userKey_ref_key";

-- DropIndex
DROP INDEX "User_userKey_idx";

-- DropIndex
DROP INDEX "User_userKey_key";

-- AlterTable
ALTER TABLE "StudiedText" DROP COLUMN "userKey",
ALTER COLUMN "userId" SET NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "userKey",
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "emailVerified" TIMESTAMP(3),
ADD COLUMN     "image" TEXT,
ADD COLUMN     "name" TEXT,
ADD COLUMN     "password" TEXT;

-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "sessionToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VerificationToken" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE INDEX "Account_userId_idx" ON "Account"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "Session_sessionToken_key" ON "Session"("sessionToken");

-- CreateIndex
CREATE INDEX "Session_userId_idx" ON "Session"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_token_key" ON "VerificationToken"("token");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_identifier_token_key" ON "VerificationToken"("identifier", "token");

-- CreateIndex
CREATE UNIQUE INDEX "StudiedText_userId_ref_key" ON "StudiedText"("userId", "ref");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "User_email_idx" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudiedText" ADD CONSTRAINT "StudiedText_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
