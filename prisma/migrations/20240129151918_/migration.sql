-- AlterTable
ALTER TABLE "Invoice" ADD COLUMN     "clientCity" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "clientCountry" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "clientPostCode" TEXT NOT NULL DEFAULT '';
