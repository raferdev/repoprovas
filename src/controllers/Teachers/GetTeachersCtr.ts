import { Request, Response } from "express";
import Services from "../../services/index.js";

async function GetTeachersCtr(req:Request,res:Response) {

    const result = await Services.Teachers.findBy();

    res.status(200).send(result);
}

export default GetTeachersCtr;