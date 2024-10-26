import { Router, Request, Response } from "express"


const route = Router()

// Rotas:
route.get("/", (req: Request, res: Response) => {
    res.status(200).json({
        massage: "OK"
    })
})

export default route