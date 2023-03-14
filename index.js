const express = require("express");
const bodyParser = require("body-parser");
const jwt = require('jsonwebtoken'); //importa a biblioteca de token JWT
const usuarios = require('./usuarios.json');

const app = express();

app.use(bodyParser.json()); //usado para a aplicação trabalhar/receber os dados em JSON

const DB = require('./setup/DB');
DB.connect();

app.use('/teste', express.static('public'));

app.set('view engine', 'ejs');


app.get('/home', (req, res) => {
   res.render('index.ejs', {
      aluno: "Alan",
      aulas: ["Javascript", "NodeJS"]
   })
});

const pedidosRoutes = require('./routes/pedidos'); //  Rota para fazer pedidos, ok
app.use('/pedidos', pedidosRoutes); 

const produtosRoutes = require('./routes/produtos'); //  Rota para fazer pedidos, ok
app.use('/produtos', produtosRoutes); 


/*const carrosRoutes = require('./routes/carros'); //require do arquivo de rotas dos carros
app.use('/carros', carrosRoutes); //definição do arquivo de rotas dos carros*/


app.post('/auth', (req, res) => {
   const { email, senha } = req.body; //obtém o email e senha do corpo da requisição
   const usuario = usuarios.find(u => u.email === email && u.senha === senha); //procura pelo usuário com email e senha informados
 
   if (!usuario) {
     return res.status(401).send('Usuário não encontrado ou senha inválida'); //retorna erro de autenticação se usuário não for encontrado
   }
 
   const token = jwt.sign({ email }, 'chave-secreta-do-token'); //gera um token JWT com o email do usuário
 
   res.send({ token }); //retorna o token gerado
 });

app.listen(3000, () => {
   console.log("Aplicacao rodando!");
});