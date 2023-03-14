const express = require("express");
const router = express.Router();

const PedidosController = new (require('../controllers/Pedidos'));

const validate = require('../auth/validate');

router.post('/',  (req, res) => {
    PedidosController.create(req, res);
});

module.exports = router;