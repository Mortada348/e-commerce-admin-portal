/*
  Warnings:

  - You are about to drop the column `productId` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `ImageUrl` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `categoryId` on the `Product` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_productId_fkey";

-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_categoryId_fkey";

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "productId",
ADD COLUMN     "productName" TEXT NOT NULL DEFAULT 'Unknown';

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "ImageUrl",
DROP COLUMN "categoryId",
ADD COLUMN     "categoryName" TEXT NOT NULL DEFAULT 'Uncategorized';
