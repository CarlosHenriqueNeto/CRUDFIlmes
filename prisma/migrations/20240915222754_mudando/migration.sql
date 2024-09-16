/*
  Warnings:

  - Added the required column `lancamento` to the `Catalogo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Catalogo" ADD COLUMN     "lancamento" TEXT NOT NULL;
