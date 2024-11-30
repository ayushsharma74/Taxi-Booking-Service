import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import cors from "cors"
dotenv.config(
    {
        path: "./.env"
    }
)
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())
app.use(cors(
    {
        origin: "http://localhost:5173",
    }
))

import userRouter from "../backend/routes/user.routes.js"
import driverRouter from "../backend/routes/driver.routes.js"
app.use("/user", userRouter)
app.use("/driver", driverRouter)

export {app}
