const libroCtrl = {};

const Libro = require('../models/Libro');

libroCtrl.getLibros = async (req, res, next) => {
const libros = await Libro.find();
res.status(200).json(libros);
}

libroCtrl.postLibro = async (req, res, next) => {
    console.log(req.body);
    
    await Libro.create(req.body);
    res.status(201).json({msg: 'Libro Creado'})
}

libroCtrl.getLibro = async (req, res, next) => {
    const libro = await Libro.findById(req.params.id);
    res.status(200).json(libro);
}
libroCtrl.putLibro = async (req, res, next) => {
    await Libro.findByIdAndUpdate({_id: req.params.id}, req.body);
    res.status(200).json({msg: 'Libro Actualizado'});
}
libroCtrl.deleteLibro = async (req, res, next) => {
    await Libro.findByIdAndDelete(req.params.id);
    res.status(200).json({msg: 'Libro Eliminado'});
}
module.exports = libroCtrl;