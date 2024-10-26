import express from "express"
import filmes from "./controllers/paginaInicial"
import criarFilme from "./controllers/criarFilme"
import editarFilme from "./controllers/editarFilme"


const route = express.Router()

// listar:
route.get("/filmes", filmes)

// criar:
route.post("/criar", criarFilme)

// editar:
route.put("/editar", editarFilme)

// deletar:
route.delete("/deletar")

export default route