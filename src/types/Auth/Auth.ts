import {User} from "@prisma/client";

export type Auth = Omit<User,"id"|"created_at">

export type Token = { id:number }

export interface AuthSignUp extends Auth {
    confirmPassword:string
}