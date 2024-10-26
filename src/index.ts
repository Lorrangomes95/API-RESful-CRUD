import app from "./app";

const PORTA = process.env.PORT || 3000

app.listen(PORTA, () => console.log(`API RODANDO NA ${PORTA}`))
