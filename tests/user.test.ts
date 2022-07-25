import app from '../src/app.js';
import supertest from 'supertest';
import Factory from './factory/index.js';

describe("USER / signin and signup", () => {
    it("User can signup, expected status 200", async () => {
        const user = Factory.User.signup();
        const result = await supertest(app).post("/signup").send(user);
        expect(result.status).toEqual(200);
    });

    it("User can signin, expected token", async () => {
        const user = await Factory.User.signin();
        const result = await supertest(app).post("/signin").send(user);
        expect(result.body.token).toBeDefined();
    });

  });