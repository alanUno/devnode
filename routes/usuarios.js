const express = require("express");
const router = express.Router();

const UsuariosController = new (require('../controllers/Usuarios'));

const validate = require('../auth/validate');

router.post('/',  (req, res) => {
    UsuariosController.create(req, res);
});


module.exports = router;