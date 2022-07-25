import { Router } from "express";
import SignInCtr from "../../controllers/Auth/SignInCtr.js";
import PostSignInSchemaMd from "../../middlewares/Auth/Schemas/PostSignInSchema.js";

const SignInRoute = Router();

SignInRoute.post('/signin',PostSignInSchemaMd,SignInCtr);

export default SignInRoute;