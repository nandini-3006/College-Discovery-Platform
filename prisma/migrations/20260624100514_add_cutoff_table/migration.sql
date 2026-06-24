-- CreateTable
CREATE TABLE "Cutoff" (
    "id" SERIAL NOT NULL,
    "exam" TEXT NOT NULL,
    "collegeId" INTEGER NOT NULL,
    "maxRank" INTEGER NOT NULL,

    CONSTRAINT "Cutoff_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Cutoff" ADD CONSTRAINT "Cutoff_collegeId_fkey" FOREIGN KEY ("collegeId") REFERENCES "College"("id") ON DELETE CASCADE ON UPDATE CASCADE;
