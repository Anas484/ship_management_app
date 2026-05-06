/*
  Warnings:

  - You are about to drop the column `ship_destination` on the `ships` table. All the data in the column will be lost.
  - You are about to drop the column `ship_source` on the `ships` table. All the data in the column will be lost.
  - Added the required column `ship_capacity` to the `ships` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ship_model` to the `ships` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ships" DROP COLUMN "ship_destination",
DROP COLUMN "ship_source",
ADD COLUMN     "ship_capacity" TEXT NOT NULL,
ADD COLUMN     "ship_model" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "ship_details" (
    "id" SERIAL NOT NULL,
    "ship_id" INTEGER NOT NULL,
    "ship_source" TEXT NOT NULL,
    "ship_destination" TEXT NOT NULL,

    CONSTRAINT "ship_details_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ship_details" ADD CONSTRAINT "ship_details_ship_id_fkey" FOREIGN KEY ("ship_id") REFERENCES "ships"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
