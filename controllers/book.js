function getBooks(req, res) {
	try {
		res.send('Olá Pessoas do planeta terra')
	} catch (error) {
		res.status(500)
		res.send(error.message)
	}
}

module.exports = {
	getBooks
}
