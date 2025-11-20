-- DropForeignKey
ALTER TABLE "Season" DROP CONSTRAINT "Season_title_id_fkey";

-- AlterTable
ALTER TABLE "Season" ALTER COLUMN "title_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Season" ADD CONSTRAINT "Season_title_id_fkey" FOREIGN KEY ("title_id") REFERENCES "Title"("id") ON DELETE SET NULL ON UPDATE CASCADE;
