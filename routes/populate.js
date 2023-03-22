const express = require("express");
const router = express.Router();
const ProdutoModel = require("../models/produto");

router.post("/", async (req, res) => {
  try {
    const produtos = [
      { nome: "Maça", preco: 10.0 },
      { nome: "Banana", preco: 20.0 },
      { nome: "Laranja", preco: 30.0 },
    ];

    await ProdutoModel.insertMany(produtos);

    res.send("Coleção populada com sucesso!");
  } catch (error) {
    console.log(error);
    res.status(500).send("Erro ao popular a coleção de produtos.");
  }
});

module.exports = router;