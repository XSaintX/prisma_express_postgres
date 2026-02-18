-- CreateTable
CREATE TABLE "VideoDetails" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "key" TEXT,
    "metaData" TEXT,
    "url" TEXT NOT NULL,
    "hostingProvider" TEXT NOT NULL,
    "videoId" INTEGER,
    CONSTRAINT "VideoDetails_videoId_fkey" FOREIGN KEY ("videoId") REFERENCES "Video" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "VideoDetails_videoId_key" ON "VideoDetails"("videoId");
