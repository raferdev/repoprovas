import app from '../src/app.js';
import supertest from 'supertest';
import Factory from './factory/index.js';

describe("TESTS /tests ", () => {
    it("User can post test, expected status 200", async () => {
        const test = Factory.Tests.create()
        const result = await supertest(app).post("/test").send(test);
        expect(result.status).toEqual(200);
    });
  });