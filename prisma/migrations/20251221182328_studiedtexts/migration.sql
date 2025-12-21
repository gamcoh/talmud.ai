-- CreateTable
CREATE TABLE "StudiedText" (
    "id" TEXT NOT NULL,
    "userKey" TEXT NOT NULL,
    "ref" TEXT NOT NULL,
    "heRef" TEXT,
    "url" TEXT,
    "title" TEXT,
    "snippet" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "StudiedText_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "StudiedText_userKey_createdAt_idx" ON "StudiedText"("userKey", "createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "StudiedText_userKey_ref_key" ON "StudiedText"("userKey", "ref");
