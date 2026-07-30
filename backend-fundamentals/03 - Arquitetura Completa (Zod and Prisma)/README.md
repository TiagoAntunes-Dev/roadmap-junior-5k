# 🎬 Movie Watchlist API

Uma API RESTful completa para gerenciamento de catálogos de filmes e listas de interesses (*Watchlists*) de usuários. Construída com foco em segurança, validação de dados e arquitetura limpa (padrão MVC).

---

## 📑 Índice

- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Funcionalidades](#-funcionalidades)
- [Como Executar o Projeto](#-como-executar-o-projeto)
- [Estrutura do Banco de Dados](#-estrutura-do-banco-de-dados)
- [Endpoints da API](#-endpoints-da-api)
- [Autenticação](#-autenticação)
- [Estrutura de Pastas](#-estrutura-de-pastas)
- [Roadmap](#-próximos-passos-roadmap)

---

## 💻 Tecnologias Utilizadas

| Tecnologia | Descrição |
|---|---|
| **Node.js & Express** | Motor da aplicação e roteamento |
| **Prisma ORM** | Modelagem de banco de dados, migrations e tipagem |
| **PostgreSQL** | Banco de dados relacional (via Neon DB) |
| **Zod** | Validação rigorosa de schemas e payloads |
| **JSON Web Token (JWT)** | Autenticação e proteção de rotas |
| **Bcrypt** | Criptografia (hash) de senhas |
| **Cookie-parser** | Leitura de tokens JWT via cookies `httpOnly` |
| **Dotenvx** | Gerenciamento seguro de variáveis de ambiente |

---

## ⚙️ Funcionalidades

- **Autenticação de Usuários:** registro e login seguros com hash de senha (bcrypt) e geração de tokens JWT.
- **Sessão via Cookie ou Header:** o middleware de autenticação aceita o token tanto via cookie `httpOnly` quanto via header `Authorization: Bearer <token>`, dando flexibilidade para clientes web e mobile.
- **Gestão de Filmes:** banco de dados alimentado através de script de seed automático, contendo informações completas (título, sinopse, ano, gêneros, duração e poster).
- **Watchlist Personalizada:**
  - Adicionar filmes à lista pessoal.
  - Atualizar status (`PLANNED`, `WATCHING`, `COMPLETED`, `DROPPED`), notas e avaliações.
  - Remover filmes da lista.
- **Segurança de Rotas:** middleware dedicado garante que um usuário só possa visualizar, editar ou remover itens da **própria** watchlist.
- **Tratamento de Erros:** respostas padronizadas e claras extraídas das validações do Zod, garantindo integridade dos dados de entrada.

---

## 🚀 Como Executar o Projeto

### 1. Pré-requisitos

- Node.js (v18 ou superior)
- NPM ou Yarn
- Uma string de conexão válida com um banco de dados PostgreSQL (ex: [Neon DB](https://neon.tech))

### 2. Configuração do Ambiente

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
npm install
```

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
DATABASE_URL="postgresql://usuario:senha@host:porta/banco?schema=public"
JWT_SECRET="sua_chave_secreta_gerada_aqui"
JWT_EXPIRES_IN="7d"
PORT=3500
NODE_ENV="development"
```

> 💡 Dica: gere um `JWT_SECRET` forte com o comando `node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"`.

### 3. Banco de Dados e Migrations

Aplique as migrations no banco de dados e gere o Prisma Client:

```bash
npx prisma migrate dev
```

> Esse comando cria/atualiza as tabelas no banco **e** gera o Prisma Client automaticamente. Sempre que o `schema.prisma` for alterado, rode esse comando novamente (ou `npx prisma generate` caso queira apenas regenerar o Client sem tocar no banco).

Popule o banco de dados com a lista inicial de filmes:

```bash
npm run seed:movies
```

### 4. Iniciando o Servidor

Para iniciar a aplicação em modo de desenvolvimento (com hot-reload via Nodemon):

```bash
npm run dev
```

O servidor estará disponível em `http://localhost:3500` (ou na porta definida no seu `.env`).

---

## 🗄️ Estrutura do Banco de Dados

A arquitetura do banco conta com três entidades principais relacionadas:

- **`User`** — armazena credenciais e dados do usuário (nome, e-mail, senha com hash).
- **`Movie`** — catálogo global de filmes do sistema, vinculado ao usuário que o cadastrou (`createdBy`).
- **`WatchlistItem`** — tabela pivô que relaciona um `User` a um `Movie`, armazenando status de visualização, nota pessoal e comentários. Possui uma constraint única (`@@unique([userId, movieId])`) para impedir que o mesmo filme seja adicionado duas vezes à lista do mesmo usuário.

```
User 1 ──── N Movie          (um usuário pode cadastrar vários filmes)
User 1 ──── N WatchlistItem  (um usuário pode ter vários itens na watchlist)
Movie 1 ──── N WatchlistItem (um filme pode estar na watchlist de vários usuários)
```

---

## 📡 Endpoints da API

### Autenticação — `/auth`

| Método | Rota | Descrição | Autenticação |
|---|---|---|---|
| `POST` | `/auth/register` | Cria um novo usuário | Não |
| `POST` | `/auth/login` | Autentica o usuário e retorna o token JWT | Não |
| `GET` | `/auth/logout` | Encerra a sessão (limpa o cookie) | Não |

### Filmes — `/movies`

| Método | Rota | Descrição | Autenticação |
|---|---|---|---|
| `GET` | `/movies` | Lista todos os filmes do catálogo | Não |
| `GET` | `/movies/:id` | Retorna os detalhes de um filme específico | Não |

### Watchlist — `/watchlist`

| Método | Rota | Descrição | Autenticação |
|---|---|---|---|
| `POST` | `/watchlist` | Adiciona um filme à watchlist do usuário logado | Sim |
| `GET` | `/watchlist` | Lista os itens da watchlist do usuário logado | Sim |
| `PATCH` | `/watchlist/:id` | Atualiza status, nota ou notas de um item | Sim |
| `DELETE` | `/watchlist/:id` | Remove um item da watchlist (apenas o dono) | Sim |

**Exemplo de payload — `POST /watchlist`:**

```json
{
  "movieId": "7556a857-f3bc-40f4-bce2-0e70589a9bbe",
  "status": "PLANNED",
  "rating": 9,
  "notes": "Recomendado por um amigo"
}
```

---

## 🔐 Autenticação

O fluxo de autenticação segue o padrão JWT com armazenamento em cookie `httpOnly`:

1. O usuário se registra (`/auth/register`) ou faz login (`/auth/login`).
2. O servidor gera um token JWT assinado (`jsonwebtoken`) contendo o `id` do usuário.
3. O token é enviado de duas formas possíveis:
   - Em um cookie `httpOnly`, `sameSite=strict` (protege contra XSS e CSRF básico).
   - No corpo da resposta JSON (`data.token`), para clientes que preferem armazenar manualmente e enviar via header.
4. Rotas protegidas passam pelo `authMiddleware`, que:
   - Lê o token do header `Authorization: Bearer <token>` **ou** do cookie `jwt`.
   - Valida o token e verifica se o usuário ainda existe no banco.
   - Popula `req.user` com os dados do usuário autenticado (sem a senha).

```javascript
// Exemplo de uso em uma rota protegida
router.post('/watchlist', authMiddleware, addWatchlistController);
```

---

## 📁 Estrutura de Pastas

```
├── prisma/
│   ├── schema.prisma          # Definição dos models (User, Movie, WatchlistItem)
│   ├── migrations/            # Histórico de migrations
│   └── seed.js                # Script de população do banco
├── src/
│   ├── config/ ou database/
│   │   └── db.js              # Instância do Prisma Client
│   ├── controllers/
│   │   ├── authController.js
│   │   └── watchlistController.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── routes/
│   │   ├── authRoutes.route.js
│   │   ├── moviesRoutes.route.js
│   │   └── watchlistRoutes.route.js
│   ├── generated/prisma/      # Prisma Client gerado (customizado)
│   └── server.js              # Ponto de entrada da aplicação
├── util/
│   └── generateToken.js       # Geração e assinatura do JWT
├── .env
└── package.json
```

---

## 🛠️ Próximos Passos (Roadmap)

- [ ] Conteinerização da aplicação utilizando Docker.
- [ ] Desenvolvimento do Front-end em Angular para consumo desta API.
- [ ] Deploy do Back-end na plataforma Hostingator.
- [ ] Testes automatizados (unitários e de integração).
- [ ] Documentação interativa com Swagger/OpenAPI.

---

## 👤 Autor

**Tiago Antunes**