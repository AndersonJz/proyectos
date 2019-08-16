const { Router } = require('express');
const router = Router();
const { getProductos, postProducto, deleteProducto, updateProducto, getProducto } = require('../controllers/productos.controller')

router.route('/')
.get(getProductos)
.post(postProducto)

router.route('/:id')
.get(getProducto)
.put(updateProducto)
.delete(deleteProducto)
module.exports = router