const mongoose = require('mongoose');

const pedidoSchema = mongoose.Schema({
    nome: String
});

module.exports = mongoose.model('pedido', pedidoSchema, 'pedido');