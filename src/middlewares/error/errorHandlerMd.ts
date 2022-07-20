import { NextFunction, Request, Response } from "express";

async function errorHandlerMd(error:any,req:Request,res:Response,next:NextFunction) {

    console.log(error);
    res.sendStatus(501);

}

export default errorHandlerMd;