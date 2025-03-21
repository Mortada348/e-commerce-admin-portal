-- CreateTable
CREATE TABLE "Order" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "productName" TEXT NOT NULL,
    "date" TEXT NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);
