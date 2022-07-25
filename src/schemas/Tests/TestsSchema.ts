import Joi from "joi";
import { TestsPost } from "../../types/Tests/Tests.js";


export const TestsSchema = Joi.object<TestsPost>({
    name:Joi.string().required(),
    pdfUrl:Joi.string().uri().required(),
    teacher:Joi.string().required(),
    discipline:Joi.string().required(),
    category:Joi.string().required()
})