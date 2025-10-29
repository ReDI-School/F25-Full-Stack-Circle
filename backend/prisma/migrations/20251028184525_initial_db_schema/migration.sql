-- DropForeignKey
ALTER TABLE "Video" DROP CONSTRAINT "Video_season_id_fkey";

-- DropIndex
DROP INDEX "Video_season_id_key";
