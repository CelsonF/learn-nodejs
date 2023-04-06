const { getAllBooks, getBookById, insertBook, alterBookById , deleteBookById } = require("../services/book")

function getBooks(req, res) {
	try {
		const books = getAllBooks()
		res.send(books)
	} catch (error) {
		res.status(500)
		res.send(error.message)
	}
}

function getBook(req, res) {
	try {
		const id = Number(req.params.id)
		if(id && Number(id)) {
			const book = getBookById(id)
			res.send(book)
		} else {
			res.status(422)
			res.send("Id inválido !!!")
		}
		
	} catch (error) {
		res.status(500)
		res.send(error.message)
	}
}

function postBook(req, res) {
	try {
		const newBook = req.body
		insertBook(newBook)
		res.status(201)
		res.send("Livro inserido com sucesso !!!")
	} catch (error) {
		res.status(500)
		res.send(error.message)
	}
}

function patchBook(req, res) {
	try {
		const id = Number(req.params.id)

		if(id && Number(id)) {
			const body = req.body
			alterBookById(body, id)
			res.send("Item modificado com sucesso !!!")
		} else {
			res.status(422)
			res.send("Id inválido !!!")
		}

	} catch (error) {
		res.status(500)
		res.send(error.message)
	}
}

function deleteBook(req, res) {
	try {
		const id = Number(req.params.id)

		if(id && Number(id)) {
			deleteBookById(id)
			res.send("Item deletado com sucesso !!!")
		} else {
			res.status(422)
			res.send("Id inválido !!!")
		}
	} catch (error) {
		res.status(500)
		res.send(error.message)
	}
}

module.exports = {
	getBooks,
	getBook,
	postBook,
	patchBook,
	deleteBook
}
