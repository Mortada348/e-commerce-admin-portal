-- AlterTable
ALTER TABLE "Order" ALTER COLUMN "productName" DROP NOT NULL,
ALTER COLUMN "productName" DROP DEFAULT;

-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "categoryName" DROP NOT NULL,
ALTER COLUMN "categoryName" DROP DEFAULT;
