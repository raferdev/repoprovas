import chalk from "chalk";
import "dotenv/config";
import app from "./app.js";

const PORT = +process.env.PORT | 5000
app.listen(process.env.PORT, ()=> {
    console.log(`${chalk.green('SERVER ONLINE:')} On port ${chalk.green(PORT)}`)
})