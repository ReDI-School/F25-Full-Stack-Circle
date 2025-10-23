/*
  Warnings:

  - You are about to drop the column `title_id` on the `Video` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[movie_title_id]` on the table `Video` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Video" DROP CONSTRAINT "Video_season_id_fkey";

-- DropForeignKey
ALTER TABLE "Video" DROP CONSTRAINT "Video_title_id_fkey";

-- DropIndex
DROP INDEX "Video_title_id_key";

-- AlterTable
ALTER TABLE "Video" DROP COLUMN "title_id",
ADD COLUMN     "movie_title_id" INTEGER,
ALTER COLUMN "season_id" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Video_movie_title_id_key" ON "Video"("movie_title_id");

-- AddForeignKey
ALTER TABLE "Video" ADD CONSTRAINT "Video_movie_title_id_fkey" FOREIGN KEY ("movie_title_id") REFERENCES "Title"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Video" ADD CONSTRAINT "Video_season_id_fkey" FOREIGN KEY ("season_id") REFERENCES "Season"("id") ON DELETE SET NULL ON UPDATE CASCADE;
