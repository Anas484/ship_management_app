/*
  Warnings:

  - Added the required column `drillType` to the `drills` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dueDate` to the `tasks` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "drills" ADD COLUMN     "drillType" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "tasks" ADD COLUMN     "dueDate" TIMESTAMP(3) NOT NULL;
