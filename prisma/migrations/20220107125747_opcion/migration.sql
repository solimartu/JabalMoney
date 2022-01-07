/*
  Warnings:

  - You are about to drop the column `option` on the `option` table. All the data in the column will be lost.
  - Added the required column `opcion` to the `Option` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `option` DROP COLUMN `option`,
    ADD COLUMN `opcion` VARCHAR(191) NOT NULL;
