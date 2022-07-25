import { Request, Response } from "express";
import Services from "../../services/index.js";
import { TestsPost } from "../../types/Tests/Tests.js";

async function PostTestCtr(req:Request,res:Response) {
    const newTest:TestsPost = req.body;

    await Services.Tests.create(newTest)

    res.sendStatus(200);
}

export default PostTestCtr;