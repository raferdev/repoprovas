import { NextFunction, Request, Response } from "express";
import { Auth } from "../../../types/Auth/Auth.js";
import { authSchema } from "../../../schemas/Auth/AuthSchema.js";

function PostSignInSchemaMd(req:Request,res:Response,next:NextFunction) {
    const newUser:Auth = req.body;

    const validate = authSchema.validate(newUser);

    if(validate.error) {
        throw {type:'schema_validation', message:validate.error.message}
    }

    next()
}

export default PostSignInSchemaMd;