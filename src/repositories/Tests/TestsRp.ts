import client from "../../config/database.js";
import { TestsInsert } from "../../types/Tests/Tests.js";

async function create(newTest:TestsInsert) {
    return await client.tests.create({data:newTest})
}

const Tests = {
    create
};

export default Tests;