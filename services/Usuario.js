const modelUsuario = require('../models/usuario');

module.exports = class Produto {

  async create(body) {
      const usuario = await modelUsuario.create(body);
      return usuario;
  }
};
