/*
  Warnings:

  - You are about to drop the column `imageId` on the `Hero` table. All the data in the column will be lost.
  - You are about to drop the column `imageId` on the `Latests` table. All the data in the column will be lost.
  - Added the required column `img` to the `Hero` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Hero` table without a default value. This is not possible if the table is not empty.
  - Added the required column `img` to the `Latests` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Latests` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Hero" DROP CONSTRAINT "Hero_imageId_fkey";

-- DropForeignKey
ALTER TABLE "Latests" DROP CONSTRAINT "Latests_imageId_fkey";

-- AlterTable
ALTER TABLE "Hero" DROP COLUMN "imageId",
ADD COLUMN     "img" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Latests" DROP COLUMN "imageId",
ADD COLUMN     "img" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL;
