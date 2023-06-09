-- CreateEnum
CREATE TYPE "GenderOption" AS ENUM ('MALE', 'FEMALE', 'UNISEX');

-- CreateEnum
CREATE TYPE "HeroStatus" AS ENUM ('ACTIVE', 'INACTIVE');

-- CreateTable
CREATE TABLE "Size" (
    "sizeId" SERIAL NOT NULL,
    "size" DOUBLE PRECISION NOT NULL,
    "shoeId" INTEGER NOT NULL,

    CONSTRAINT "Size_pkey" PRIMARY KEY ("sizeId")
);

-- CreateTable
CREATE TABLE "Image" (
    "imageId" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "shoeId" INTEGER NOT NULL,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("imageId")
);

-- CreateTable
CREATE TABLE "Shoes" (
    "shoeId" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "gender" "GenderOption" NOT NULL,
    "color" TEXT NOT NULL,

    CONSTRAINT "Shoes_pkey" PRIMARY KEY ("shoeId")
);

-- CreateTable
CREATE TABLE "Hero" (
    "heroId" SERIAL NOT NULL,
    "status" "HeroStatus" NOT NULL,
    "imageId" INTEGER NOT NULL,

    CONSTRAINT "Hero_pkey" PRIMARY KEY ("heroId")
);

-- CreateTable
CREATE TABLE "Latests" (
    "latestId" SERIAL NOT NULL,
    "status" "HeroStatus" NOT NULL,
    "imageId" INTEGER NOT NULL,

    CONSTRAINT "Latests_pkey" PRIMARY KEY ("latestId")
);

-- CreateTable
CREATE TABLE "Announcement" (
    "announcementId" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "subtitle" TEXT NOT NULL,
    "link" TEXT NOT NULL,

    CONSTRAINT "Announcement_pkey" PRIMARY KEY ("announcementId")
);

-- AddForeignKey
ALTER TABLE "Size" ADD CONSTRAINT "Size_shoeId_fkey" FOREIGN KEY ("shoeId") REFERENCES "Shoes"("shoeId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_shoeId_fkey" FOREIGN KEY ("shoeId") REFERENCES "Shoes"("shoeId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Hero" ADD CONSTRAINT "Hero_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "Image"("imageId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Latests" ADD CONSTRAINT "Latests_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "Image"("imageId") ON DELETE RESTRICT ON UPDATE CASCADE;
