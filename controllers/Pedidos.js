const PedidoService = new (require('../services/Pedido'));

module.exports = class Pedidos {

    async create(req, res) {
        console.log("---- ", req.body)
        const retorno = await PedidoService.create(req.body);
        res.json(retorno);
    }

    async deleteOne(req, res) {
        const retorno = await PedidoService.deleteOne(req.params.id);
        res.json(retorno);
    }

    async updateOne(req, res) {
        const retorno = await PedidoService.updateOne(req.params.id, req.body);
        res.json(retorno);
    }



};