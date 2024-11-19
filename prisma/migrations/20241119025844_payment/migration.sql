-- AlterTable
ALTER TABLE "order" ADD COLUMN     "receipt" TEXT,
ALTER COLUMN "overdue_time" SET DEFAULT NOW() + interval '24 hours',
ALTER COLUMN "payment_method" SET DEFAULT 'Cash';
