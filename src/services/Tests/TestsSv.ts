import Helper from "../../helper/index.js";
import Repositories from "../../repositories/index.js";
import { TestsPost } from "../../types/Tests/Tests.js";

async function create(TestsPost:TestsPost) {
    const categoryId = await Helper.Database.findCategory(TestsPost);
    const newTest = {
        name:TestsPost.name,
        pdfUrl:TestsPost.pdfUrl,
        categorie_id:categoryId
    };

    return await Repositories.Tests.create(newTest);
}

const Tests = {
    create,
};

export default Tests;