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

function alterBookById(modifications, id) {
	let currentBooks = JSON.parse(fs.readFileSync("books.json"))
	const indexModify = currentBooks.findIndex(book => book.id === id)

	const modifyContent = { ...currentBooks[indexModify], ...modifications }

	currentBooks[indexModify] = modifyContent

	fs.writeFileSync("books.json", JSON.stringify(currentBooks))
}

function deleteBookById(id) {
	let currentBooks = JSON.parse(fs.readFileSync("books.json"))

	const filterBooks = currentBooks.filter(book => book.id !== id)
	fs.writeFileSync("books.json", JSON.stringify(filterBooks))
}

module.exports = {
	getAllBooks,
	getBookById,
	insertBook,
	alterBookById,
	deleteBookById
}
