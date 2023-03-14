const express = require("express");
const router = express.Router();

const ProdutosController = new (require('../controllers/Produtos'));

const validate = require('../auth/validate');

router.post('/',  (req, res) => {
    ProdutosController.create(req, res);
});

router.delete('/deletar/:id',  (req, res) => {
    ProdutosController.deleteOne(req, res);
});

router.put('/:id', (req, res) => {
    console.log("Rota de update ", req.params.id);
    ProdutosController.updateOne(req, res);
});

router.get('/:id', (req, res) => {
    ProdutosController.findOne(req, res);
}); 

module.exports = router;