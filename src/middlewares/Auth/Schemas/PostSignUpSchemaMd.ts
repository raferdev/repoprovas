import { NextFunction, Request, Response } from "express";
import { AuthSignUp } from "../../../types/Auth/Auth.js";
import { authSignUpSchema } from "../../../schemas/Auth/AuthSchema.js";

function PostSignUpSchemaMd(req:Request,res:Response,next:NextFunction) {
    const newUser:AuthSignUp = req.body;

    const validate = authSignUpSchema.validate(newUser)

    if(validate.error) {
        throw {type:'schema_validation', message:validate.error.message}
    }

    next()
}

export default PostSignUpSchemaMd;