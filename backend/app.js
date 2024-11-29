import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
dotenv.config(
    {
        path: "./.env"
    }
)
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())

import userRouter from "../backend/routes/user.routes.js"
app.use("/user", userRouter)

export {app}
