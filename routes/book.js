const { Router } = require('express')
const { getBooks, getBook, postBook, patchBook } = require('../controllers/book')

const router = Router()

router.get('/', getBooks)

router.get('/:id', getBook)

router.post('/', postBook)

router.patch('/:id', patchBook)

router.delete('/', (req, res) => {
	res.send('Você fez uma requisição do tipo DELETE')
})

module.exports = router
