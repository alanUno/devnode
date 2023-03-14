const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json()); //usado para a aplicação trabalhar/receber os dados em JSON

const DB = require('./setup/DB');
DB.connect();

app.use('/teste', express.static('public'));

app.set('view engine', 'ejs');


app.get('/home', (req, res) => {
   res.render('index.ejs', {
      aluno: "Wagner Frana",
      aulas: ["Javascript", "NodeJS"]
   })
});

const pedidosRoutes = require('./routes/pedidos'); //require do arquivo de rotas dos usuarios
app.use('/pedidos', pedidosRoutes); //definição do arquivo de rotas dos usuarios

/*const carrosRoutes = require('./routes/carros'); //require do arquivo de rotas dos carros
app.use('/carros', carrosRoutes); //definição do arquivo de rotas dos carros*/

app.listen(3000, () => {
   console.log("Aplicacao rodando!");
});