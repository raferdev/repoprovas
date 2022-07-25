import Repositories from "../../repositories/index.js";
import { TestsPost } from "../../types/Tests/Tests.js";

async function findCategory(findTest:TestsPost) {
    const result =  await Repositories.Category.find(findTest);
    return result.disciplines[0].categories[0].id;
}

const Database = {
    findCategory
};

export default Database;