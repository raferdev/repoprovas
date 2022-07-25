import { Request, Response, Router } from "express";
import SignInRoute from "./Auth/SignInRoute.js";
import SignUpRoute from "./Auth/SignUpRoute.js";

const router = Router();

router.get('/',(req:Request,res:Response)=>{
    res.send('Hello world!');
});

//auth
router.use(SignInRoute);
router.use(SignUpRoute);

export default router;