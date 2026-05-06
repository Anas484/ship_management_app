/*
  Warnings:

  - You are about to drop the column `departuredate` on the `ship_details` table. All the data in the column will be lost.
  - Added the required column `departureDate` to the `ship_details` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ship_details" DROP COLUMN "departuredate",
ADD COLUMN     "departureDate" TIMESTAMP(3) NOT NULL;
