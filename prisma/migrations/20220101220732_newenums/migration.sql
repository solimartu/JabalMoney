/*
  Warnings:

  - You are about to alter the column `incomes` on the `assessmentanswer` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum("AssessmentAnswer_incomes")`.
  - You are about to alter the column `objective1` on the `assessmentanswer` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum("AssessmentAnswer_objective1")`.
  - You are about to alter the column `objective2` on the `assessmentanswer` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum("AssessmentAnswer_objective2")`.
  - You are about to alter the column `objective3` on the `assessmentanswer` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum("AssessmentAnswer_objective3")`.

*/
-- AlterTable
ALTER TABLE `assessmentanswer` MODIFY `incomes` ENUM('Fijos', 'SoyAutonomo', 'EstoyEnElParo') NOT NULL DEFAULT 'Fijos',
    MODIFY `objective1` ENUM('SalirDeDeudas', 'Ahorrar', 'AdministrarMisFinanzas') NOT NULL DEFAULT 'SalirDeDeudas',
    MODIFY `objective2` ENUM('SalirDeDeudas', 'Ahorrar', 'AdministrarMisFinanzas') NOT NULL DEFAULT 'Ahorrar',
    MODIFY `objective3` ENUM('SalirDeDeudas', 'Ahorrar', 'AdministrarMisFinanzas') NOT NULL DEFAULT 'AdministrarMisFinanzas';
