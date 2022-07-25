import { Request, Response } from "express";
import Services from "../../services/index.js";
import { AuthSignUp } from "../../types/Auth/Auth.js";

async function SignUpCtr(req:Request,res:Response) {
    const newUser:AuthSignUp = req.body;

    await Services.Auth.create(newUser)
    
    res.sendStatus(200);
}

export default SignUpCtr;