import { Router } from "express";
import GetTermsCtr from "../../controllers/Terms/GetTermsCtr.js";
import TokenBearerMd from "../../middlewares/Auth/TokenBearerMd.js";

const TermsRoute = Router();

TermsRoute.get('/terms', TokenBearerMd, GetTermsCtr);

export default TermsRoute;