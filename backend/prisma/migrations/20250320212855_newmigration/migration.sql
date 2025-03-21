-- CreateTable
CREATE TABLE "Admin" (
    "id" SERIAL NOT NULL,
    "usename" TEXT NOT NULL,
    "birthdate" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id")
);
