import { Router } from "express";
import PostTestCtr from "../../controllers/Tests/PostTestCtr.js";
import TokenBearerMd from "../../middlewares/Auth/TokenBearerMd.js";
import PostTestSchemaMd from "../../middlewares/Tests/Schemas/PostTestSchemaMd.js";

const TestsRoute = Router();

TestsRoute.post('/test',TokenBearerMd,PostTestSchemaMd,PostTestCtr);

export default TestsRoute;