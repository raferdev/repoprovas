import client from "../../config/database.js";
import { TestsPost } from "../../types/Tests/Tests.js";

async function find(newTest: TestsPost) {
  return await client.teachers.findFirstOrThrow({
    where: { name: newTest.teacher },
    include: {
      disciplines: {
        where: { name: newTest.discipline },
        include: { categories: { where: { name: newTest.category } } },
      },
    },
  });
}

const Category = {
  find,
};

export default Category;
