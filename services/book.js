const fs = require('fs')

function getAllBooks() {
	return JSON.parse(fs.readFileSync("books.json"))
}

function getBookById(id) {
	const books = JSON.parse(fs.readFileSync("books.json"))
	const bookFilter = books.filter(book => book.id === id)[0]

	return bookFilter
}

function insertBook(newBook) {
	const books = JSON.parse(fs.readFileSync("books.json"))

	const newListBooks = [...books, newBook]

	fs.writeFileSync("books.json", JSON.stringify(newListBooks))
}


module.exports = {
	getAllBooks,
	getBookById,
	insertBook
}
