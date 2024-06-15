import express from "express"
const app=express();
import cors from "cors"
import cookieParser from "cookie-parser"

// app.use(express.json());

app.use(cors());

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

import userRouter from './routes/user.routes.js'


app.use("/api/users", userRouter)

export { app }
