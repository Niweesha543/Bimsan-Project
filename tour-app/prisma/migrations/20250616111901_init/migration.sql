/*
  Warnings:

  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `emailVerified` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `emailVerifyStatus` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `passwordResetToken` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `passwordResetTokenExpire` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `User` table. All the data in the column will be lost.
  - The `id` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `Account` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Admin` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Allocation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Authenticator` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Candidate` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Company` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CompanyCordinator` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `DepartmentCordinator` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Feedback` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Panelist` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Session` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `VerificationToken` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `firstName` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `User` table without a default value. This is not possible if the table is not empty.
  - Made the column `createdAt` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `password` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Account" DROP CONSTRAINT "Account_userId_fkey";

-- DropForeignKey
ALTER TABLE "Admin" DROP CONSTRAINT "Admin_admin_id_fkey";

-- DropForeignKey
ALTER TABLE "Allocation" DROP CONSTRAINT "Allocation_candidate_id_fkey";

-- DropForeignKey
ALTER TABLE "Allocation" DROP CONSTRAINT "Allocation_company_id_fkey";

-- DropForeignKey
ALTER TABLE "Allocation" DROP CONSTRAINT "Allocation_panelist_id_fkey";

-- DropForeignKey
ALTER TABLE "Authenticator" DROP CONSTRAINT "Authenticator_userId_fkey";

-- DropForeignKey
ALTER TABLE "Candidate" DROP CONSTRAINT "Candidate_candidate_id_fkey";

-- DropForeignKey
ALTER TABLE "CompanyCordinator" DROP CONSTRAINT "CompanyCordinator_company_id_fkey";

-- DropForeignKey
ALTER TABLE "CompanyCordinator" DROP CONSTRAINT "CompanyCordinator_cordinator_id_fkey";

-- DropForeignKey
ALTER TABLE "DepartmentCordinator" DROP CONSTRAINT "DepartmentCordinator_cordinator_id_fkey";

-- DropForeignKey
ALTER TABLE "Feedback" DROP CONSTRAINT "Feedback_candidate_id_fkey";

-- DropForeignKey
ALTER TABLE "Feedback" DROP CONSTRAINT "Feedback_company_id_fkey";

-- DropForeignKey
ALTER TABLE "Panelist" DROP CONSTRAINT "Panelist_company_id_fkey";

-- DropForeignKey
ALTER TABLE "Panelist" DROP CONSTRAINT "Panelist_panelist_id_fkey";

-- DropForeignKey
ALTER TABLE "Session" DROP CONSTRAINT "Session_userId_fkey";

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "emailVerified",
DROP COLUMN "emailVerifyStatus",
DROP COLUMN "image",
DROP COLUMN "name",
DROP COLUMN "passwordResetToken",
DROP COLUMN "passwordResetTokenExpire",
DROP COLUMN "role",
DROP COLUMN "updatedAt",
ADD COLUMN     "firstName" TEXT NOT NULL,
ADD COLUMN     "lastName" TEXT NOT NULL,
ALTER COLUMN "createdAt" SET NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ALTER COLUMN "password" SET NOT NULL,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");

-- DropTable
DROP TABLE "Account";

-- DropTable
DROP TABLE "Admin";

-- DropTable
DROP TABLE "Allocation";

-- DropTable
DROP TABLE "Authenticator";

-- DropTable
DROP TABLE "Candidate";

-- DropTable
DROP TABLE "Company";

-- DropTable
DROP TABLE "CompanyCordinator";

-- DropTable
DROP TABLE "DepartmentCordinator";

-- DropTable
DROP TABLE "Feedback";

-- DropTable
DROP TABLE "Panelist";

-- DropTable
DROP TABLE "Session";

-- DropTable
DROP TABLE "VerificationToken";

-- DropEnum
DROP TYPE "Department";
