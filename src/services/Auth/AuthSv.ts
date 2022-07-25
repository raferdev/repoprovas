import { Auth, AuthSignUp } from "../../types/Auth/Auth.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Repositories from "../../repositories/index.js";
import "dotenv/config";

async function create(authSignUp:AuthSignUp) {
    const newUser = {
        email :authSignUp.email,
        password:bcrypt.hashSync(authSignUp.password, +process.env.SALT_ROUNDS)
    }

    return await Repositories.User.create(newUser)
}

async function signIn(user:Auth) {
    const userDb = await Repositories.User.find(user);
    if(!userDb.password) {
        throw {type:"auth_error",message:"Invalid password or email"}
    }
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