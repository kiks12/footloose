/*
  Warnings:

  - Added the required column `src` to the `Image` table without a default value. This is not possible if the table is not empty.
  - Added the required column `brand` to the `Shoes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Image" ADD COLUMN     "src" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Shoes" ADD COLUMN     "brand" TEXT NOT NULL;
