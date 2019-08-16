const productosCtrl = {};

const Producto = require('../models/Productos')

productosCtrl.getProductos = async (req, res, next) => {
    const productos =await Producto.find()
    res.json(productos)
}
productosCtrl.postProducto = async (req, res, next) => {
 await Producto.create(req.body)
 
res.json({msg: 'Producto Guardado'})
}
productosCtrl.deleteProducto = async (req, res, next) => {
    await Producto.findByIdAndDelete(req.params.id)
    res.json({msg: 'Producto eliminado'})
}
productosCtrl.updateProducto = async (req, res, next) => {
await Producto.findOneAndUpdate({_id: req.params.id}, req.body)
res.json({msg: 'Producto Actualizado'})
}
productosCtrl.getProducto = async (req, res, next) => {

 const producto = await Producto.findById(req.params.id)
 res.json(producto)

}

module.exports  = productosCtrl;