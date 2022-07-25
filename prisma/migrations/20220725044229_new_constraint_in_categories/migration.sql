/*
  Warnings:

  - A unique constraint covering the columns `[name,discipline_id]` on the table `Categories` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Categories_name_key";

-- CreateIndex
CREATE UNIQUE INDEX "Categories_name_discipline_id_key" ON "Categories"("name", "discipline_id");
