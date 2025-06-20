-- CreateEnum
CREATE TYPE "Department" AS ENUM ('Electronic_and_Telecommunication_Engineering', 'Electrical_Engineering', 'Mechanical_Engineering', 'Civil_Engineering', 'Material_Science_and_Engineering', 'Chemical_and_Process_Engineering', 'Transport_Management_and_Logistics_Engineering', 'Textile_and_Apparel_Engineering', 'Earth_Resources_Engineering', 'Computer_Science_and_Engineering', 'Information_Technology', 'Interdisciplinary_Studies', 'Computational_Mathematics');

-- CreateTable
CREATE TABLE "User" (
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "emailVerified" TIMESTAMP(3),
    "id" TEXT NOT NULL,
    "image" TEXT,
    "name" TEXT,
    "emailVerifyStatus" BOOLEAN NOT NULL DEFAULT false,
    "password" TEXT,
    "passwordResetToken" TEXT DEFAULT '',
    "passwordResetTokenExpire" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "role" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Candidate" (
    "candidate_id" TEXT NOT NULL,
    "firstName" TEXT,
    "lastName" TEXT,
    "nameWithInitials" TEXT,
    "universityID" TEXT,
    "contactNo" TEXT,
    "department" TEXT,
    "degree" TEXT,
    "cvUrl" TEXT,
    "imgUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "prefCompany1" TEXT,
    "prefCompany2" TEXT,
    "prefCompany3" TEXT,
    "prefCompany4" TEXT
);

-- CreateTable
CREATE TABLE "CompanyCordinator" (
    "cordinator_id" TEXT NOT NULL,
    "company_id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3)
);

-- CreateTable
CREATE TABLE "DepartmentCordinator" (
    "cordinator_id" TEXT NOT NULL,
    "department" "Department" NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3)
);

-- CreateTable
CREATE TABLE "Panelist" (
    "panelist_id" TEXT NOT NULL,
    "pannel_number" INTEGER,
    "company_id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3)
);

-- CreateTable
CREATE TABLE "Admin" (
    "admin_id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3)
);

-- CreateTable
CREATE TABLE "Company" (
    "company_id" TEXT NOT NULL,
    "company_name" TEXT NOT NULL,
    "company_logo" TEXT,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("company_id")
);

-- CreateTable
CREATE TABLE "Feedback" (
    "feedback_id" TEXT NOT NULL,
    "feedback" TEXT NOT NULL,
    "candidate_id" TEXT NOT NULL,
    "company_id" TEXT NOT NULL,
    "communicationSkill" INTEGER NOT NULL,
    "experienceAndProject" INTEGER NOT NULL,
    "problemSolvingSkill" INTEGER NOT NULL,
    "technicalSkill" INTEGER NOT NULL,

    CONSTRAINT "Feedback_pkey" PRIMARY KEY ("feedback_id")
);

-- CreateTable
CREATE TABLE "Allocation" (
    "allocation_id" TEXT NOT NULL,
    "allocation_date" TEXT,
    "allocation_timeSlot" TEXT,
    "allocated_panel_number" INTEGER,
    "attendance" BOOLEAN NOT NULL DEFAULT false,
    "allocation_status" TEXT DEFAULT 'pending',
    "candidate_id" TEXT NOT NULL,
    "company_id" TEXT NOT NULL,
    "panelist_id" TEXT NOT NULL,

    CONSTRAINT "Allocation_pkey" PRIMARY KEY ("allocation_id")
);

-- CreateTable
CREATE TABLE "Account" (
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "Account_pkey" PRIMARY KEY ("provider","providerAccountId")
);

-- CreateTable
CREATE TABLE "Session" (
    "sessionToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3)
);

-- CreateTable
CREATE TABLE "VerificationToken" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "VerificationToken_pkey" PRIMARY KEY ("identifier","token")
);

-- CreateTable
CREATE TABLE "Authenticator" (
    "credentialID" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "credentialPublicKey" TEXT NOT NULL,
    "counter" INTEGER NOT NULL,
    "credentialDeviceType" TEXT NOT NULL,
    "credentialBackedUp" BOOLEAN NOT NULL,
    "transports" TEXT,

    CONSTRAINT "Authenticator_pkey" PRIMARY KEY ("userId","credentialID")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Candidate_candidate_id_key" ON "Candidate"("candidate_id");

-- CreateIndex
CREATE UNIQUE INDEX "Candidate_universityID_key" ON "Candidate"("universityID");

-- CreateIndex
CREATE UNIQUE INDEX "CompanyCordinator_cordinator_id_key" ON "CompanyCordinator"("cordinator_id");

-- CreateIndex
CREATE UNIQUE INDEX "CompanyCordinator_company_id_key" ON "CompanyCordinator"("company_id");

-- CreateIndex
CREATE UNIQUE INDEX "DepartmentCordinator_cordinator_id_key" ON "DepartmentCordinator"("cordinator_id");

-- CreateIndex
CREATE UNIQUE INDEX "Panelist_panelist_id_key" ON "Panelist"("panelist_id");

-- CreateIndex
CREATE UNIQUE INDEX "Panelist_pannel_number_company_id_key" ON "Panelist"("pannel_number", "company_id");

-- CreateIndex
CREATE UNIQUE INDEX "Admin_admin_id_key" ON "Admin"("admin_id");

-- CreateIndex
CREATE UNIQUE INDEX "Allocation_allocated_panel_number_candidate_id_company_id_key" ON "Allocation"("allocated_panel_number", "candidate_id", "company_id");

-- CreateIndex
CREATE UNIQUE INDEX "Session_sessionToken_key" ON "Session"("sessionToken");

-- CreateIndex
CREATE UNIQUE INDEX "Authenticator_credentialID_key" ON "Authenticator"("credentialID");

-- AddForeignKey
ALTER TABLE "Candidate" ADD CONSTRAINT "Candidate_candidate_id_fkey" FOREIGN KEY ("candidate_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompanyCordinator" ADD CONSTRAINT "CompanyCordinator_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "Company"("company_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompanyCordinator" ADD CONSTRAINT "CompanyCordinator_cordinator_id_fkey" FOREIGN KEY ("cordinator_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DepartmentCordinator" ADD CONSTRAINT "DepartmentCordinator_cordinator_id_fkey" FOREIGN KEY ("cordinator_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Panelist" ADD CONSTRAINT "Panelist_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "Company"("company_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Panelist" ADD CONSTRAINT "Panelist_panelist_id_fkey" FOREIGN KEY ("panelist_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Admin" ADD CONSTRAINT "Admin_admin_id_fkey" FOREIGN KEY ("admin_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Feedback" ADD CONSTRAINT "Feedback_candidate_id_fkey" FOREIGN KEY ("candidate_id") REFERENCES "Candidate"("candidate_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Feedback" ADD CONSTRAINT "Feedback_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "Company"("company_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Allocation" ADD CONSTRAINT "Allocation_candidate_id_fkey" FOREIGN KEY ("candidate_id") REFERENCES "Candidate"("candidate_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Allocation" ADD CONSTRAINT "Allocation_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "Company"("company_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Allocation" ADD CONSTRAINT "Allocation_panelist_id_fkey" FOREIGN KEY ("panelist_id") REFERENCES "Panelist"("panelist_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Authenticator" ADD CONSTRAINT "Authenticator_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
