/*
  Warnings:

  - Added the required column `incomes` to the `AssessmentAnswer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `objective1` to the `AssessmentAnswer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `objective2` to the `AssessmentAnswer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `objective3` to the `AssessmentAnswer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `percentessentialoutcomes` to the `AssessmentAnswer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `percentexpendableoutcomes` to the `AssessmentAnswer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `percentfixedoutcomes` to the `AssessmentAnswer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `assessmentanswer` ADD COLUMN `incomes` INTEGER NOT NULL,
    ADD COLUMN `objective1` VARCHAR(191) NOT NULL,
    ADD COLUMN `objective2` VARCHAR(191) NOT NULL,
    ADD COLUMN `objective3` VARCHAR(191) NOT NULL,
    ADD COLUMN `percentessentialoutcomes` INTEGER NOT NULL,
    ADD COLUMN `percentexpendableoutcomes` INTEGER NOT NULL,
    ADD COLUMN `percentfixedoutcomes` INTEGER NOT NULL;
