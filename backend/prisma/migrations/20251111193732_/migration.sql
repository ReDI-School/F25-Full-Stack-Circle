/*
  Warnings:

  - You are about to drop the column `title_id` on the `Category` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Category" DROP CONSTRAINT "Category_title_id_fkey";

-- AlterTable
ALTER TABLE "Category" DROP COLUMN "title_id",
ADD COLUMN     "titleId" INTEGER;

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_titleId_fkey" FOREIGN KEY ("titleId") REFERENCES "Title"("id") ON DELETE SET NULL ON UPDATE CASCADE;
