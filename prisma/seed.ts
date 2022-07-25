import client from "../src/config/database.js";

async function terms() {
  await client.terms.createMany({
    data: [
      { number: 1 },
      { number: 2 },
      { number: 3 },
      { number: 4 },
      { number: 5 },
      { number: 6 },
    ],
  });

}
async function teachers() {
    await client.teachers.createMany({
      data: [{ name: "Diego Pinho" }, { name: "Bruna Hamori" }],
    });
}

async function disciplines() {
    await client.disciplines.createMany({
        data: [
            { name: "HTML e CSS", teacher_id: 1, terms_id: 1 },
            { name: "JavaScript", teacher_id: 1, terms_id: 2 },
            { name: "React", teacher_id: 1, terms_id: 3 },
            { name: "Humildade", teacher_id: 2, terms_id: 1 },
            { name: "Planejamento", teacher_id: 2, terms_id: 2 },
            { name: "Autoconfiança", teacher_id: 2, terms_id: 3 },
          ],
      });
}
async function categories() {
    await client.categories.createMany({
      data: [
        { name: "Projeto", discipline_id: 1 },
        { name: "Prática", discipline_id: 1 },
        { name: "Recuperação", discipline_id: 1 },
        { name: "Projeto", discipline_id: 2 },
        { name: "Prática", discipline_id: 2 },
        { name: "Recuperação", discipline_id: 2 },
        { name: "Projeto", discipline_id: 3 },
        { name: "Prática", discipline_id: 3 },
        { name: "Recuperação", discipline_id: 3 },
        { name: "Projeto", discipline_id: 4 },
        { name: "Prática", discipline_id: 4 },
        { name: "Recuperação", discipline_id: 4 },
        { name: "Projeto", discipline_id: 5 },
        { name: "Prática", discipline_id: 5 },
        { name: "Recuperação", discipline_id: 5 },
        { name: "Projeto", discipline_id: 6 },
        { name: "Prática", discipline_id: 6 },
        { name: "Recuperação", discipline_id: 6 },
      ],
    });
}
async function main() {
    
    await terms()
    await teachers()
    await disciplines()
    await categories()
}
main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await client.$disconnect();
  });
