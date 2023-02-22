const { Router } = require('express')
const { getBooks } = require('../controllers/book')

const router = Router()

router.get('/', getBooks)

router.post('/', (req, res) => {
	res.send('Você fez uma requisição do tipo POST')
})

router.patch('/', (req, res) => {
	res.send('Você fez uma requisição do tipo PATCH')
})

router.delete('/', (req, res) => {
	res.send('Você fez uma requisição do tipo DELETE')
})

module.exports = router
