/*
  Warnings:

  - You are about to alter the column `incomes` on the `assessmentanswer` table. The data in that column could be lost. The data in that column will be cast from `Enum("assessmentanswer_incomes")` to `VarChar(191)`.
  - You are about to alter the column `objective1` on the `assessmentanswer` table. The data in that column could be lost. The data in that column will be cast from `Enum("assessmentanswer_objective1")` to `VarChar(191)`.
  - You are about to alter the column `objective2` on the `assessmentanswer` table. The data in that column could be lost. The data in that column will be cast from `Enum("assessmentanswer_objective2")` to `VarChar(191)`.
  - You are about to alter the column `objective3` on the `assessmentanswer` table. The data in that column could be lost. The data in that column will be cast from `Enum("assessmentanswer_objective3")` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `assessmentanswer` MODIFY `incomes` VARCHAR(191) NOT NULL,
    MODIFY `objective1` VARCHAR(191) NOT NULL,
    MODIFY `objective2` VARCHAR(191) NOT NULL,
    MODIFY `objective3` VARCHAR(191) NOT NULL;
