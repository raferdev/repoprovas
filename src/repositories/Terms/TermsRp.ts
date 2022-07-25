import client from "../../config/database.js"

async function findBy() {
    return await client.terms.findMany({ where:{ disciplines:{none:{categories:{none:{tests:{none:{}}}}}}},include:{disciplines:{include:{categories:{include:{tests:true}}}}}});
}

const Terms = {
    findBy
}

export default Terms;