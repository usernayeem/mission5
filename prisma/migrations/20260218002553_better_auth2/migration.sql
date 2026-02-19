-- CreateEnum
CREATE TYPE "Role" AS ENUM ('Super_Admin', 'Admin', 'Doctor', 'Patient');

-- CreateEnum
CREATE TYPE "UserStatus" AS ENUM ('Blocked', 'Deleted', 'Active');

-- AlterTable
ALTER TABLE "user" ADD COLUMN     "deletedAt" TIMESTAMP(3),
ADD COLUMN     "isDeleted" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "needPasswordChange" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'Patient',
ADD COLUMN     "status" "UserStatus" NOT NULL DEFAULT 'Active';
