import app from '../src/app.js';
import supertest from 'supertest';
import Factory from './factory/index.js';

describe("TERMS /terms ", () => {
    it("User can get disciplines by terms, expected status 200", async () => {
        const user = await Factory.User.signin();
        const auth = await supertest(app).post("/signin").send(user);
        const result = await supertest(app).get("/terms").set('Authorization', 'Bearer ' + auth.body.token);
        console.log(result.body)
        expect(result.status).toEqual(200);
    });
  });