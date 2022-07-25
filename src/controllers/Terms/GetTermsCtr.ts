import { Request, Response } from "express";
import Services from "../../services/index.js";

async function GetTermsCtr(req:Request,res:Response) {

    const result = await Services.Terms.findBy();

    res.status(200).send(result);
}

export default GetTermsCtr;