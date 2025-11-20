-- DropForeignKey
ALTER TABLE "UserReaction" DROP CONSTRAINT "UserReaction_video_id_fkey";

-- AlterTable
ALTER TABLE "Video" ADD COLUMN     "image" TEXT;

-- AddForeignKey
ALTER TABLE "UserReaction" ADD CONSTRAINT "UserReaction_video_id_fkey" FOREIGN KEY ("video_id") REFERENCES "Video"("id") ON DELETE CASCADE ON UPDATE CASCADE;
