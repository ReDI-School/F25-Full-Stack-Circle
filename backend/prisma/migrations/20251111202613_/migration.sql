/*
  Warnings:

  - You are about to drop the column `titleId` on the `Category` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Category" DROP CONSTRAINT "Category_titleId_fkey";

-- AlterTable
ALTER TABLE "Category" DROP COLUMN "titleId";

-- CreateTable
CREATE TABLE "_CategoryToTitle" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_CategoryToTitle_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_CategoryToTitle_B_index" ON "_CategoryToTitle"("B");

-- AddForeignKey
ALTER TABLE "_CategoryToTitle" ADD CONSTRAINT "_CategoryToTitle_A_fkey" FOREIGN KEY ("A") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToTitle" ADD CONSTRAINT "_CategoryToTitle_B_fkey" FOREIGN KEY ("B") REFERENCES "Title"("id") ON DELETE CASCADE ON UPDATE CASCADE;
