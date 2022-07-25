import { Router } from "express";
import SignUpCtr from "../../controllers/Auth/SignUpCtr.js";
import PostSignUpSchemaMd from "../../middlewares/Auth/Schemas/PostSignUpSchemaMd.js";

const SignUpRoute = Router();

SignUpRoute.post('/signup',PostSignUpSchemaMd,SignUpCtr);

export default SignUpRoute;