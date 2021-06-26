import express from "express";

// @types/express
const app = express();

/**
 * GET    => Buscar uma informação
 * POST   => Inserir (Criar) uma informação
 * PUT    => Alterar uma informação
 * DELETE => Remover um dado
 * PATCH  => Alterar uma informação específica
 */

app.get("/test-get", (request, response) => {
	return response.send("Olá Raul via método GET");
});

app.post("/test-post", (request, response) => {
	return response.send("Olá Raul via método POST");
});

// http://localhost:3000
app.listen(3000, () => console.log("Server is running"));
