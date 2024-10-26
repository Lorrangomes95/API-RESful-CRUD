import { Request, Response } from "express";

const filmes = async (req: Request, res: Response) => {
    
    try {
        
    } catch (error) {
        const erro = error as Error
        res.status(500).json({
            mensagem: erro.message
        })
    }
}

export default filmes