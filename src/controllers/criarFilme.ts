import { Request, Response } from "express";
import TFilme from "../types/TFilme";
import pool from "../conexaoDB";

const criarFilme = async(req: Request, res: Response) => {
    const {nome, descrição, classificação, tipo} = req.body

    if(!nome || !descrição || !classificação || !tipo){
        res.status(400).json({
            mensagem: "Todos os campos são obrigatórios"
        })
    }

    if(typeof nome !== "string" 
        ||typeof descrição !== "string" 
        ||typeof classificação!== "number" 
        ||typeof tipo !== "string"){
        res.status(400).json({
            mensagem: "Todos os campos são obrigatórios"
        })
    }

    try {
        async function criarFilme(propiedades:TFilme) {
            const {rows} = await pool.query("INSERT INTO listar(nome, descrição, classificação, tipo) values($1,$2,$3,$4) RETURNING *", [propiedades.nome, propiedades.descrição, propiedades.classificação, propiedades.tipo])
            return rows[0] 
        }

        const criou = await criarFilme({
            nome,
            descrição,
            classificação,
            tipo
        })

        res.status(201).json(criou)
    } catch (error) {
        const erro = error as Error
        res.status(500).json({
            mensagem: erro.message
        })
    }
}

export default criarFilme