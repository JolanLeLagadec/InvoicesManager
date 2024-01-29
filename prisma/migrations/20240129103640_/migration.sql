/*
  Warnings:

  - Added the required column `clientAddress` to the `Invoice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date` to the `Invoice` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Items" DROP CONSTRAINT "Items_invoiceId_fkey";

-- AlterTable
ALTER TABLE "Invoice" ADD COLUMN     "clientAddress" TEXT NOT NULL,
ADD COLUMN     "date" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Items" ADD CONSTRAINT "Items_invoiceId_fkey" FOREIGN KEY ("invoiceId") REFERENCES "Invoice"("id") ON DELETE CASCADE ON UPDATE CASCADE;
