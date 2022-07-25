import { NextFunction, Request, Response } from "express";
import { TestsSchema } from "../../../schemas/Tests/TestsSchema.js";
import { TestsPost } from "../../../types/Tests/Tests.js";

function PostTestSchemaMd(req:Request,res:Response,next:NextFunction) {
    const newUser:TestsPost = req.body;

    const validate = TestsSchema.validate(newUser);

    if(validate.error) {
        throw {type:'schema_validation', message:validate.error.message}
    }

    next()
}

export default PostTestSchemaMd;