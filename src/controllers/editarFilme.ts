import { Request, Response } from "express";
import TFilme from "../types/TFilme";
import pool from "../conexaoDB";

const editarFilme = async (req: Request, res: Response) => {
    const { nome, descrição, classificação, tipo, id } = req.body

    if (!nome || !descrição || !classificação || !tipo) {
        res.status(400).json({
            mensagem: "Todos os campos são obrigatórios"
        })
    }

    if (typeof nome !== "string"
        || typeof descrição !== "string"
        || typeof classificação !== "number"
        || typeof tipo !== "string") {
        res.status(400).json({
            mensagem: "Todos os campos são obrigatórios"
        })
    }

    try {
        async function criarFilme(propiedades: TFilme, id: number) {
            const { rows } = await pool.query("UPDATE listar SET nome = $1, descrição = $2 , classificação = $3, tipo = $4 where id = $5 RETURNING *", [propiedades.nome, propiedades.descrição, propiedades.classificação, propiedades.tipo, id])
            return rows[0]
        }

        const editou = await criarFilme({
            nome,
            descrição,
            classificação,
            tipo
        }, id)

        res.status(200).json(editou)
    } catch (error) {
        const erro = error as Error
        res.status(500).json({
            mensagem: erro.message
        })
    }
}

export default editarFilme