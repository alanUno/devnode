const ProdutoService = new (require('../services/Produto'));

module.exports = class Produtos {

    async create(req, res) {
        console.log("---- ", req.body)
        const retorno = await ProdutoService.create(req.body);
        res.json(retorno);
    }

    async deleteOne(req, res) {
        const retorno = await ProdutoService.deleteOne(req.params.id);
        res.json(retorno);
    }

    async updateOne(req, res) {
        const retorno = await ProdutoService.updateOne(req.params.id, req.body);
        res.json(retorno);
    }

    async findOne(req, res) {
        const retorno = await ProdutoService.findOne(req.params.id);
        res.json(retorno);
    }

    async findAll(req, res) {
        const retorno = await ProdutoService.findAll();
        res.json(retorno);
    }
};
