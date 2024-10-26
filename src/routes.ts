import { Router} from "express"
import filmes from "./controllers/paginaInicial"


const route = Router()

// listar:
route.get("/", filmes)

// criar:
route.post("/criar")

// editar:
route.put("/editar")

// deletar:
route.delete("/deletar")

export default route