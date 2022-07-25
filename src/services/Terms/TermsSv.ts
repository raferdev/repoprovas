import Repositories from "../../repositories/index.js";

async function findBy() {
    return await Repositories.Terms.findBy();
}

const Terms = {
    findBy
}

export default Terms;