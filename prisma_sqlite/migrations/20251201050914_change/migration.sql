/*
  Warnings:

  - You are about to drop the column `bio` on the `Instructor` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Instructor" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "zip" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "city" TEXT NOT NULL
);
INSERT INTO "new_Instructor" ("city", "country", "email", "id", "name", "zip") SELECT "city", "country", "email", "id", "name", "zip" FROM "Instructor";
DROP TABLE "Instructor";
ALTER TABLE "new_Instructor" RENAME TO "Instructor";
CREATE UNIQUE INDEX "Instructor_email_key" ON "Instructor"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
