const PedidoService = new (require('../services/Pedido'));

module.exports = class Carros {

    async create(req, res) {
        console.log("---- ", req.body)
        const retorno = await PedidoService.create(req.body);
        res.json(retorno);
    }

};