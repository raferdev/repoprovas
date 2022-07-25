
import {Tests} from "@prisma/client";

export type TestsSchema = Omit<Tests,"id"|"categorie_id">

export interface TestsPost extends TestsSchema {
    name:string
    category:number,
}
export type Token = { id:number }

export interface AuthSignUp extends Auth {
    confirmPassword:string
}