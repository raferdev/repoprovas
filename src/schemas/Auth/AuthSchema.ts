import Joi from "joi";
import { Auth, AuthSignUp } from "../../types/Auth/Auth.js";

export const authSchema = Joi.object<Auth>({
    email:Joi.string().email().required(),
    password:Joi.string().min(10).required()
})
export const authSignUpSchema = Joi.object<AuthSignUp>({
    email:Joi.string().email().required(),
    password:Joi.string().min(10).required(),
    confirmPassword:Joi.string().required().valid(Joi.ref('password')),
})