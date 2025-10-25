library-api/
│
├── src/
│   ├── config/
│   │   └── database.js          # Configuração de conexão com MongoDB
│   │
│   ├── models/
│   │   ├── Author.js             # Schema de Autor
│   │   ├── User.js               # Schema de Usuário
│   │   ├── Book.js               # Schema de Livro
│   │   └── Loan.js               # Schema de Empréstimo
│   │
│   ├── routes/
│   │   ├── authorRoutes.js       # Endpoints de autores
│   │   ├── userRoutes.js         # Endpoints de usuários
│   │   ├── bookRoutes.js         # Endpoints de livros
│   │   └── loanRoutes.js         # Endpoints de empréstimos
│   │
│   ├── controllers/
│   │   ├── authorController.js   # Lógica de negócio dos autores
│   │   ├── userController.js     # Lógica de negócio dos usuários
│   │   ├── bookController.js     # Lógica de negócio dos livros
│   │   └── loanController.js     # Lógica de negócio dos empréstimos
│   │
│   └── app.js                    # Configuração da aplicação Express/Fastify
│
├── scripts/
│   └── collections.js            # Script para limpar as coleções
│
├── .env                          # Variáveis de ambiente (não commitar!)
├── .env.example                  # Exemplo de arquivo env (commitar este)
├── .gitignore                    # Arquivos a serem ignorados no git
├── package.json                  # Dependências e scripts
├── README.md                     # Documentação do projeto
├── routes.http                   # Cenários de teste da API
└── server.js                     # Ponto de entrada para iniciar o servidor