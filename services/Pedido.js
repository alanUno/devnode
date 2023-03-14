const modelPedido = require('../models/pedido');

module.exports = class Pedido {

  async create(body) {
      const pedido = await modelPedido.create(body);
      return pedido;
  }

  async deleteOne(_idPedido) {
    const pedido = await modelPedido.deleteOne({_id: _idPedido});
    return pedido;
  }

  async updateOne(_idPedido, body) {
    const pedido = await modelPedido.updateOne({_id: _idPedido}, {$set: body});
    return pedido;
}

async findOne(_idPedido) {
  const pedido = await modelPedido.findOne({_id: _idPedido});
  return pedido;
}


};