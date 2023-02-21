const express = require("express");

const app = express();

const port = 8000;

app.get('/', (req, res) => {
	res.send("Olá Mundo - Bem vindo ao treinamento de NODE.JS com Celson Fernando Rodrigues de Araujo!")
})

app.listen(port, () => {
	console.log(`Escutando a porta ${port}`);
})
