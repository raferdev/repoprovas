import { Router } from "express";
import GetTeachersCtr from "../../controllers/Teachers/GetTeachersCtr.js";
import TokenBearerMd from "../../middlewares/Auth/TokenBearerMd.js";
import TestsRoute from "../Tests/TestsRoute.js";

const TeachersRoute = Router();

TestsRoute.get('/teachers',TokenBearerMd,GetTeachersCtr);

export default TeachersRoute;