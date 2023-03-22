# devnode

A API baseia-se no principio de fazer um pedido, que tem um nome, e relacionar a esse pedidos os produtos já inseridos ou criar novos.

1 - A rota http://localhost:3000/usuarios serve para criar usuário na api através do metodo post, passando um email e senha no json. Ex: {"email": "teste@gmail.com",
  "senha": "senha123"}

 2- A rota http://localhost:3000/auth serve para pegar o token de autenticação deste usuário, através de um post informando o usuário criado anteriormente, o token servirá para autenticação das rotas.

 3 - A rota http://localhost:3000/populate ao acessado pelo método post, popula a base de dados de produtos, que servirá para realizar os pedidos.

 4 - CRUD de produtos:
Inserir: http://localhost:3000/produtos  POST - Esperado nome e preço. Ex: {"nome": "maça", "preco": "5"}
Buscar todos: http://localhost:3000/produtos GET - Ao acessar será listado todos os produtos
Buscar específico: http://localhost:3000/produtos/:id GET - Após saber os ids dos produtos é possível buscar apenas pelo desejado
Deletar: http://localhost:3000/produtos/deletar/:id DELETE - Deleta o id informado
Atualizar: http://localhost:3000/produtos/:id PUT - Atualiza o produto com o id informado

5 - CRUD  de pedidos:
Inserir: http://localhost:3000/pedidos POST - Inserir o nome do pedido e o id de produtos, ex: {
  "nome": "Nome do pedido",
  "produtos": [
    "64178cf4e2f2e9e54f6ca853"]}
Buscar todos: http://localhost:3000/pedidos GET
Buscar específico: http://localhost:3000/pedidos/:id GET
Deletar: http://localhost:3000/pedidos/deletar/:id DELETE - Deleta o id informado
Atualizar: http://localhost:3000/pedidos/:id PUT - Atualiza o produto com o id informado

*Sobre a autenticação, como estava com problema na 'chave secreta', tirei das rotas para ser possível fazer acesso
