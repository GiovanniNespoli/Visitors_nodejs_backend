-- CreateTable
CREATE TABLE "Visitors" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Visitors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Configurations" (
    "password" TEXT NOT NULL,

    CONSTRAINT "Configurations_pkey" PRIMARY KEY ("password")
);

-- CreateIndex
CREATE UNIQUE INDEX "Configurations_password_key" ON "Configurations"("password");
