/*
  Warnings:

  - You are about to drop the column `is_expired` on the `order` table. All the data in the column will be lost.
  - Added the required column `payment_method` to the `order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "order" DROP COLUMN "is_expired",
ADD COLUMN     "overdue_time" TIMESTAMP(3) NOT NULL DEFAULT NOW() + interval '24 hours',
ADD COLUMN     "payment_method" TEXT NOT NULL,
ADD COLUMN     "promo_code" TEXT;
