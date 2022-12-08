-- CreateEnum
CREATE TYPE "userType" AS ENUM ('OWNER', 'ADMIN', 'USER');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "userType" "userType" NOT NULL DEFAULT 'ADMIN';
