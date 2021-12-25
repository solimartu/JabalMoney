/*
  Warnings:

  - You are about to alter the column `percentessentialoutcomes` on the `assessmentanswer` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.
  - You are about to alter the column `percentexpendableoutcomes` on the `assessmentanswer` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.
  - You are about to alter the column `percentfixedoutcomes` on the `assessmentanswer` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.

*/
-- AlterTable
ALTER TABLE `assessmentanswer` MODIFY `percentessentialoutcomes` DOUBLE NOT NULL,
    MODIFY `percentexpendableoutcomes` DOUBLE NOT NULL,
    MODIFY `percentfixedoutcomes` DOUBLE NOT NULL;
