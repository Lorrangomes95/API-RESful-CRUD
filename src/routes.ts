import express from "express"
import filmes from "./controllers/paginaInicial"
import criarFilme from "./controllers/criarFilme"


const route = express.Router()

// listar:
route.get("/filmes", filmes)

// criar:
route.post("/criar", criarFilme)

// editar:
route.put("/editar")

// deletar:
route.delete("/deletar")

export default route