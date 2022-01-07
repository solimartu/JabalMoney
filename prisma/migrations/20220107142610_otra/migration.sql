/*
  Warnings:

  - You are about to drop the `option` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `option`;

-- CreateTable
CREATE TABLE `Opcion` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `opcion` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
