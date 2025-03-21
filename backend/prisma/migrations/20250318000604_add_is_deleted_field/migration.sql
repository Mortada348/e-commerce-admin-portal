/*
  Warnings:

  - Added the required column `isDeleted` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isDeleted` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isDeleted` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Category" ADD COLUMN     "isDeleted" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "isDeleted" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "isDeleted" BOOLEAN NOT NULL;
