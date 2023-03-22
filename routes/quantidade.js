const express = require("express");
const router = express.Router();

const Produto = require('../models/produto');
const Pedido = require('../models/pedido');

router.get('/', async (req, res) => {
  try {
    const quantidadeProdutos = await Produto.countDocuments();
    const quantidadePedidos = await Pedido.countDocuments();

    res.json({ quantidadeProdutos, quantidadePedidos });
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao obter a quantidade de produtos e pedidos');
  }
});

module.exports = router;
