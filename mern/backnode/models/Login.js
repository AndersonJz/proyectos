const { Schema, model } = require('mongoose');

const usuarioSchema = new Schema({
    usuario: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    }
});

module.exports = model('usuarios', usuarioSchema);