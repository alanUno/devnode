const express = require("express");
const router = express.Router();

const PedidosController = new (require('../controllers/Pedidos'));

const validate = require('../auth/validate');

router.post('/',  (req, res) => {
    PedidosController.create(req, res);
});

router.delete('/deletar/:id',  (req, res) => {
    PedidosController.deleteOne(req, res);
});

router.put('/:id', (req, res) => {
    console.log("Rota de update ", req.params.id);
    PedidosController.updateOne(req, res);
});

router.get('/:id', (req, res) => {
    PedidosController.findOne(req, res);
});

module.exports = router;