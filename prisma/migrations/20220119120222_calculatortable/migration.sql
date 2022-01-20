/*
  Warnings:

  - You are about to drop the column `type` on the `calculator` table. All the data in the column will be lost.
  - Added the required column `tipo` to the `Calculator` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `calculator` DROP COLUMN `type`,
    ADD COLUMN `tipo` VARCHAR(191) NOT NULL;
