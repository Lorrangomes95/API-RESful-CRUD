import { Request, Response } from "express";
import pool from "../conexaoDB";

const deletarFilme = async (req: Request, res: Response) => {
    const { nome } = req.body

    if (!nome || typeof nome !== "string") {
        res.status(400).json({
            mensagem: "Campo nome é obrigatório!"
        })
    }

    try {
        async function deletarFilme(nome: string) {
            const { rowCount } = await pool.query("DELETE FROM listar WHERE nome = $1", [nome])
            return rowCount
        }

        await deletarFilme(nome)

        res.status(200).json("Filme deletado com sucesso !")
    } catch (error) {
        const erro = error as Error
        res.status(500).json({
            mensagem: erro.message
        })
    }
}

export default deletarFilme