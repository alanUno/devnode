const mongoose = require('mongoose');

const usuarioSchema = mongoose.Schema({
    email: String,
    senha: String
});

module.exports = mongoose.model('usuario', usuarioSchema, 'usuario');