import express from "express"
import listarFilmes from "./controllers/listarFilmes"
import criarFilme from "./controllers/criarFilme"
import editarFilme from "./controllers/editarFilme"
import deletarFilme from "./controllers/deletarFIlme"


const route = express.Router()

// listar:
route.get("/filmes", listarFilmes)

// criar:
route.post("/criar", criarFilme)

// editar:
route.put("/editar", editarFilme)

// deletar:
route.delete("/deletar", deletarFilme)

export default route