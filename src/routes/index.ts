import { Request, Response, Router } from "express";
import SignInRoute from "./auth/SignInRoute.js";
import SignUpRoute from "./auth/SignUpRoute.js";

const router = Router();

router.get('/',(req:Request,res:Response)=>{
    res.send('Hello world!');
});

//auth
router.use(SignInRoute);
router.use(SignUpRoute);

export default router;