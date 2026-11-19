![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)

Repositório dedicado aos meus estudos de Node.js. O código é baseado em um curso que acompanho diretamente do YouTube, sendo utilizado e modificado conforme as aulas passam, como forma de praticar e consolidar os conceitos aprendidos.

>  **Projeto em desenvolvimento:

## 🎯 Objetivos


- [x] Aprender os conceitos básicos de Node.js
- [x] Compreender a criação e o funcionamento de APIs e rotas
- [ ] Evoluir para o uso do framework Express
- [X] Revisar conhecimentos de banco de dados
- [ ] Praticar métodos HTTP e operações CRUD completas *(em andamento)*
- [ ] Conectar a API a um banco de dados *(em andamento)*
- [x] Lidar com variáveis de ambiente e configurações sensíveis
- [x] Testar rotas com a ferramenta Insomnia

## 🛠️ Tecnologias

- Node.js (módulo `http` nativo)
- pnpm
- PostgreSQL
- Bibliotecas: `pg`, `dotenv`, `chalk`
- Insomnia (testes de rotas)

## O que já foi feito ✅

- [x] Criação manual do `package.json` para entender o que ele contém
- [x] Servidor HTTP com o módulo nativo `http` (sem frameworks), em `src/server.mjs`
- [x] Roteamento manual com `method` e `url`
- [x] Rotas de leitura (`GET`) para produtos e carros, incluindo busca por ID
- [x] Criação (`POST`), atualização parcial (`PATCH`) e remoção (`DELETE`) de carros
- [x] Leitura do corpo da requisição com `req.on("data")` e `req.on("end")`
- [x] Respostas com status codes (200, 201, 204, 404)
- [x] Funções auxiliares (`extrairID`, `findById`) para evitar repetição
- [x] Log de cada requisição no console (método, hora, URL e status)
- [x] Testes das rotas no Insomnia
- [x] Conexão com o PostgreSQL via `pg` (Pool) e variáveis de ambiente com `dotenv`
- [x] Mensagem de servidor rodando com `chalk`
- [x] Uso do pnpm e script `dev`

## Próximos passos

- [ ] Criar as rotas da API
- [ ] Implementar o CRUD completo
- [ ] Migrar para o Express
- [ ] Testar as rotas no Insomnia

## Como rodar o projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   cd nome-do-repositorio
   ```
2. Instale as dependências:
   ```bash
   pnpm install
   ```
3. Crie o arquivo `.env` a partir do exemplo e preencha com os seus dados:
   ```bash
   cp .env.example .env
   ```
4. Rode o servidor:
   ```bash
   pnpm dev
   ```

## 📁 Estrutura do projeto

​```
├── src/
│   ├── server.mjs
│   └── (arquivo de conexão com o banco)
├── .env.example
├── .gitignore
├── package.json
└── pnpm-lock.yaml
​```

## Sobre

Feito por **Luiz**, estudante de desenvolvimento web.
