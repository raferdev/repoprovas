import app from '../src/app.js';
import supertest from 'supertest';

describe("GET / - Server is running with inital setup", () => {
    it("Get will return Hello world message", async () => {
        const result = await supertest(app).get("/");
        expect(result.text).toEqual("Hello world!")
    });
  });