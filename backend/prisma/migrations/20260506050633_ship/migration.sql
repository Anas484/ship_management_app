/*
  Warnings:

  - Changed the type of `ship_capacity` on the `ships` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "ships" DROP COLUMN "ship_capacity",
ADD COLUMN     "ship_capacity" INTEGER NOT NULL;
