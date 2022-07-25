import { Request, Response } from "express";
import Services from "../../services/index.js";
import { Auth } from "../../types/Auth/Auth.js";

async function SignInCtr(req:Request,res:Response) {
    const user:Auth = req.body;
    
   const result = await Services.Auth.signIn(user);

    res.send(result);
}

export default SignInCtr;