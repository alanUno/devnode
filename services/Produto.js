const modelProduto = require('../models/produto');

module.exports = class Produto {

    async create(body) {
        const produto = await modelProduto.create(body);
        return produto;
    }

    async deleteOne(_idProduto) {
        const produto = await modelProduto.deleteOne({_id: _idProduto});
        return produto;
    }

    async updateOne(_idProduto, body) {
        const produto = await modelProduto.updateOne({_id: _idProduto}, {$set: body});
        return produto;
    }

    async findOne(_idProduto) {
        const produto = await modelProduto.findOne({_id: _idProduto});
        return produto;
    }

    async findAll() {
        const produto = await modelProduto.find({});
        return produto;
    }
};
