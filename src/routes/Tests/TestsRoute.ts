import { Router } from "express";
import PostTestCtr from "../../controllers/Tests/PostTestCtr.js";
import PostTestSchemaMd from "../../middlewares/Tests/Schemas/PostTestSchemaMd.js";

const TestsRoute = Router();

TestsRoute.post('/test',PostTestSchemaMd,PostTestCtr);

export default TestsRoute;