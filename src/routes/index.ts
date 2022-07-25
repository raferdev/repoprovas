import { Request, Response, Router } from "express";
import SignInRoute from "./Auth/SignInRoute.js";
import SignUpRoute from "./Auth/SignUpRoute.js";
import TeachersRoute from "./Teachers/TeachersRoute.js";
import TermsRoute from "./Terms/TermsRoute.js";
import TestsRoute from "./Tests/TestsRoute.js";

const router = Router();

router.get('/',(req:Request,res:Response)=>{
    res.send('Hello world!');
});

//auth
router.use(SignInRoute);
router.use(SignUpRoute);

router.use(TestsRoute);
router.use(TermsRoute);
router.use(TeachersRoute);

export default router;