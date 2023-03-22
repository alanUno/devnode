const express = require("express");
const bodyParser = require("body-parser");
const jwt = require('jsonwebtoken');
const usuarioModel = require('./models/usuario');

const app = express();

app.use(bodyParser.json());

const DB = require('./setup/DB');
DB.connect();

app.use('/teste', express.static('public'));

app.set('view engine', 'ejs');

const pedidosRoutes = require('./routes/pedidos');
app.use('/pedidos', pedidosRoutes);

const produtosRoutes = require('./routes/produtos');
app.use('/produtos', produtosRoutes);

const usuariosRoutes = require('./routes/usuarios');
app.use('/usuarios', usuariosRoutes);

app.post('/auth', async (req, res) => { 
   const { email, senha } = req.body;
   const usuario = await usuarioModel.findOne({ email, senha });
   if (!usuario) {
     return res.status(401).send('Usuário não encontrado ou senha inválida');
   }

   const token = jwt.sign({ email }, 'jwt-dev-evolution');

   res.send({ token });
});

const populateRoutes = require("./routes/populate");
app.use("/populate", populateRoutes);

const quantidadeRoutes = require("./routes/quantidade");
app.use("/quantidade", quantidadeRoutes);

app.listen(3000, () => {
   console.log("Aplicacao rodando!");
});