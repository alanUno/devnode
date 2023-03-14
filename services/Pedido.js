const modelPedido = require('../models/pedido');

module.exports = class Pedido {

  async create(body) {
      const pedido = await modelPedido.create(body);
      return pedido;
  }

};