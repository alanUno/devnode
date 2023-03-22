const express = require("express");
const bodyParser = require("body-parser");
const jwt = require('jsonwebtoken');
const usuarioModel = require('./models/usuario');
const pedidosRoutes = require('./routes/pedidos');
const produtosRoutes = require('./routes/produtos');
const usuariosRoutes = require('./routes/usuarios');
const populateRoutes = require("./routes/populate");
const quantidadeRoutes = require("./routes/quantidade");
const DB = require('./setup/DB');

const app = express();

// middleware
app.use(bodyParser.json());

// static files
app.use('/teste', express.static('public'));

// view engine
app.set('view engine', 'ejs');

// database connection
DB.connect();

// routes
app.use('/pedidos', pedidosRoutes);
app.use('/produtos', produtosRoutes);
app.use('/usuarios', usuariosRoutes);
app.use("/populate", populateRoutes);
app.use("/quantidade", quantidadeRoutes);

// authentication route
app.post('/auth', async (req, res) => { 
   const { email, senha } = req.body;
   const usuario = await usuarioModel.findOne({ email, senha });
   
   if (!usuario) {
     return res.status(401).send('Usuário não encontrado ou senha inválida');
   }

   const token = jwt.sign({ email }, 'jwt-dev-evolution');

   res.send({ token });
});

// server listening
app.listen(3000, () => {
   console.log("Aplicacao rodando!");
});
