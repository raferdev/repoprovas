import client from "../../config/database.js";
import { Auth } from "../../types/auth.js";

async function create(newUser:Auth) {
    return await client.user.create({data:newUser})
}
async function find(user:Auth) {
    return await client.user.findUniqueOrThrow({where:{email:user.email},select:{id:true,email:true,password:true}})
}
const User = {
    create,
    find
};

export default User;