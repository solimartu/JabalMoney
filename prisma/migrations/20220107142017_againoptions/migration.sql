/*
  Warnings:

  - You are about to drop the column `questionId` on the `option` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `option` DROP FOREIGN KEY `Option_questionId_fkey`;

-- AlterTable
ALTER TABLE `option` DROP COLUMN `questionId`;
