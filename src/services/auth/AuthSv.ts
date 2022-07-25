import { Auth } from "../../types/auth.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";
import Repositories from "../../repositories/index.js";

async function create(newUser:Auth) {
    
    newUser.password = bcrypt.hashSync(newUser.password, +process.env.SALT_ROUNDS);

    return await Repositories.user.create(newUser)
}

async function signIn(user:Auth) {
    const userDb = await Repositories.user.find(user);

    const validPassword = bcrypt.compareSync(user.password,userDb.password);

    if(!validPassword) {
        throw {type:"auth_error",message:"Invalid password or email"}
    }
    const token = jwt.sign({id:userDb.id},process.env.JWT_SECRET,{ expiresIn:'12h' });

    const result = {
        token,
        email:userDb.email
    }

    return result;
}

const Auth = {
    create,
    signIn
};

export default Auth;