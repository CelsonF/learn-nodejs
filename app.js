const express = require("express");
const routerBook = require("./routes/book")

const app = express();

app.use('/livros', routerBook)


const port = 8000;


app.listen(port, () => {
	console.log(`Escutando a porta ${port}`);
})
