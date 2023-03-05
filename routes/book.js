const { Router } = require('express')
const { getBooks, getBook, postBook } = require('../controllers/book')

const router = Router()

router.get('/', getBooks)

router.get('/:id', getBook)

router.post('/', postBook)

router.patch('/', (req, res) => {
	res.send('Você fez uma requisição do tipo PATCH')
})

router.delete('/', (req, res) => {
	res.send('Você fez uma requisição do tipo DELETE')
})

module.exports = router
