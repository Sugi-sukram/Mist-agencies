-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "unit" ADD VALUE 'G';
ALTER TYPE "unit" ADD VALUE 'LITRE';
ALTER TYPE "unit" ADD VALUE 'PC';
ALTER TYPE "unit" ADD VALUE 'DOZEN';
ALTER TYPE "unit" ADD VALUE 'PACKET';
ALTER TYPE "unit" ADD VALUE 'METER';
ALTER TYPE "unit" ADD VALUE 'CENTIMETER';
ALTER TYPE "unit" ADD VALUE 'INCH';
ALTER TYPE "unit" ADD VALUE 'FEET';
