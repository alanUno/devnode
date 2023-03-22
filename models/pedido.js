const mongoose = require('mongoose');

const pedidoSchema = mongoose.Schema({
  nome: String,
  produtos: [{ type: mongoose.Schema.Types.ObjectId, ref: "produto" }],
});

pedidoSchema.statics.getPedidoComProdutos = function (id) {
  return this.aggregate([
    {
      $match: { _id: new mongoose.Types.ObjectId(id) }
    },
    {
      $lookup: {
        from: "produtos",
        localField: "produtos",
        foreignField: "_id",
        as: "produtos"
      }
    }
  ]);
};

module.exports = mongoose.model('pedido', pedidoSchema, 'pedido');
