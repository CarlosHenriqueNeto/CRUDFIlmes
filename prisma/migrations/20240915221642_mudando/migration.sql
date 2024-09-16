/*
  Warnings:

  - The primary key for the `Catalogo` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Catalogo" DROP CONSTRAINT "Catalogo_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Catalogo_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Catalogo_id_seq";
