import { faker } from "@faker-js/faker";

function create() {

    const Test = {
        name:faker.internet.userName(),
        pdfUrl:faker.internet.url(),
        teacher:"Bruna Hamori",
        discipline:"Planejamento",
        category:"Projeto"
    }
    return Test;
}

const Tests = {
    create
};

export default Tests;