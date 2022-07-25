import Repositories from "../../repositories/index.js";

async function findBy() {
    return await Repositories.Teachers.findBy();
}

const Teachers = {
    findBy
}

export default Teachers;