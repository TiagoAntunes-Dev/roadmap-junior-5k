/*
  Warnings:

  - You are about to drop the column `posteUrl` on the `Movie` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId,movieId]` on the table `WatchlistItem` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Movie" DROP COLUMN "posteUrl",
ADD COLUMN     "posterUrl" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "WatchlistItem_userId_movieId_key" ON "WatchlistItem"("userId", "movieId");
