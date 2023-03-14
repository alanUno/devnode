const mongoose = require('mongoose');

const produtoSchema = mongoose.Schema({
    nome: String,
    preco: Number
});

module.exports = mongoose.model('produto', produtoSchema, 'produto');