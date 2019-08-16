const { Schema, model } = require('mongoose');

const productoSchema = new Schema({
    precioPlatillo: Number,
    nombrePlatillo: 
        {type: String,
        required: true},
    categoria: String,},
    {
        timestamps: true
    }
);

module.exports = model('Producto', productoSchema);

