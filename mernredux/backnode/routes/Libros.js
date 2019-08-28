const { Router } = require('express');
const router = Router();
const { getLibros, postLibro, getLibro, putLibro, deleteLibro } = require('../controllers/libro.controller')

router.route('/')
.get(getLibros)
.post(postLibro)

router.route('/:id')
.get(getLibro)
.put(putLibro)
.delete(deleteLibro)

module.exports = router;