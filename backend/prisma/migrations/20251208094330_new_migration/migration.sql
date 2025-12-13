/*
  Warnings:

  - A unique constraint covering the columns `[age_restriction]` on the table `Category` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "Genre" AS ENUM ('Action', 'Adventure', 'Thriller', 'Fantasy', 'Comedy', 'Family', 'Documentary', 'Biography', 'Sports', 'Travel', 'Nature', 'Culture', 'Music', 'Horror', 'SciFi');

-- AlterTable
ALTER TABLE "Title" ADD COLUMN     "cast" TEXT[],
ADD COLUMN     "genre" "Genre"[],
ADD COLUMN     "synopsis" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Category_age_restriction_key" ON "Category"("age_restriction");
