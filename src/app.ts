import dotenv from "dotenv"
import express from "express"
import route from "./routes"

dotenv.config()

const app = express()

app.use(express.json())
app.use(route)

export default app
