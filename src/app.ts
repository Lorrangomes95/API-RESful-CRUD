import dotenv from "dotenv"
import express, { Application } from "express";
import route from "./routes"

dotenv.config()

const app: Application = express()

app.use(express.json())
app.use(route)

export default app
