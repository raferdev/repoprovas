
import {Tests} from "@prisma/client";

export type TestsSchema = Omit<Tests,"id"|"categorie_id">
export type TestsInsert = Omit<Tests, "id">

export interface TestsPost extends TestsSchema {
    category:string
    discipline:string
    teacher:string
}