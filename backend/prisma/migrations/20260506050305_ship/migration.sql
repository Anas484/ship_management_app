/*
  Warnings:

  - Added the required column `arrivalDate` to the `ship_details` table without a default value. This is not possible if the table is not empty.
  - Added the required column `departuredate` to the `ship_details` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ship_details" ADD COLUMN     "arrivalDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "departuredate" TIMESTAMP(3) NOT NULL;
