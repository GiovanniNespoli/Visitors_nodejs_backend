/*
  Warnings:

  - You are about to drop the column `email` on the `Visitors` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Visitors" DROP COLUMN "email",
ADD COLUMN     "church" TEXT,
ADD COLUMN     "observation" TEXT;

-- CreateTable
CREATE TABLE "Church" (
    "id" SERIAL NOT NULL,
    "label" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Church_pkey" PRIMARY KEY ("id")
);
