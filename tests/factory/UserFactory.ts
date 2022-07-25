import { faker } from '@faker-js/faker'
import client from '../../src/config/database.js'
import bcrypt from 'bcrypt';
import 'dotenv/config';

function signup() {
    const password =  faker.internet.password();
    const user = {
        email:faker.internet.email(),
        password,
        confirmPassword:password
    }
    return user;
}
async function signin() {
    const password = faker.internet.password()
    const user = {
        email:faker.internet.email(),
        password
    }
    user.password = bcrypt.hashSync(user.password,+process.env.SALT_ROUNDS)
    const inserted = await client.user.create({data:user})

    return {email:inserted.email,password}
}

const User = {
    signup,
    signin
};

export default User;