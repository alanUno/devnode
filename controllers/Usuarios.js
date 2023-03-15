const UsuarioService = new (require('../services/Usuario'));

module.exports = class Usuarios {

    async create(req, res) {
        console.log("---- ", req.body)
        const retorno = await UsuarioService.create(req.body);
        res.json(retorno);
    }
};
