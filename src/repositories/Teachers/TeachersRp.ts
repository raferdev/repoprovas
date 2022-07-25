import client from "../../config/database.js"

async function findBy() {
    return await client.teachers.findMany({ where:{ disciplines:{ none:{ categories:{ none:{ tests:{ none:{}}}}}}},include:{disciplines:{include:{categories:{include:{tests:true}}}}}});
}

const Teachers = {
    findBy
}

export default Teachers;