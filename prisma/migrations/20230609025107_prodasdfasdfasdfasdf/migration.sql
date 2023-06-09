/*
  Warnings:

  - Made the column `status` on table `Announcement` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Announcement" ALTER COLUMN "status" SET NOT NULL;
