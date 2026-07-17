# ⚙️ Setup — Node.js + Express

Guia de configuração inicial para projetos backend com Node.js e Express.

---

## 📦 Iniciar o projeto

```bash
npm init -y
```

---

## 📥 Dependências

### Produção
```bash
npm install express cors date-fns uuid
```

| Pacote | Uso |
|--------|-----|
| `express` | Framework web para criar o servidor e as rotas |
| `cors` | Controla quais domínios podem acessar o servidor |
| `date-fns` | Formata datas para o sistema de log |
| `uuid` | Gera IDs únicos para cada entrada de log |

### Desenvolvimento
```bash
npm install -D nodemon
```

| Pacote | Uso |
|--------|-----|
| `nodemon` | Reinicia o servidor automaticamente ao salvar um arquivo |

---

## 🛠️ Configurar scripts no package.json

```json
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}
```

- `npm start` → roda em produção
- `npm run dev` → roda em desenvolvimento com nodemon

---

## 📁 Estrutura de pastas recomendada

```
projeto/
├── middleware/
│   ├── logEvents.js       ← logger + error handler
│   └── errorHandler.js
├── public/                ← arquivos estáticos (CSS, JS, imagens)
│   └── css/
│       └── styles.css
├── views/                 ← páginas HTML
│   ├── index.html
│   ├── new-page.html
│   └── 404.html
├── logs/                  ← gerado automaticamente
│   ├── reqLog.txt
│   └── errLog.txt
├── server.js
└── package.json
```

---

## 🧩 Ordem dos middlewares no server.js

```javascript
app.use(cors(corsOptions));        // 1º — bloqueia domínios não autorizados
app.use(logger);                   // 2º — registra todas as requisições
app.use(express.urlencoded(...));  // 3º — processa dados de formulário HTML
app.use(express.json());           // 4º — processa dados JSON
app.use(express.static(...));      // 5º — serve arquivos públicos

// rotas aqui...

app.all('*splat', ...);            // penúltimo — 404 catch-all
app.use(errorHandler);             // último — captura erros de todas as rotas
```

> ⚠️ A ordem importa — o Express executa os middlewares de cima para baixo.

---

## ⚠️ Atenção: Express 5

Este projeto usa **Express 5**, que tem duas diferenças em relação ao Express 4:

| Express 4 | Express 5 |
|-----------|-----------|
| `app.all('*', ...)` | `app.all('*splat', ...)` |
| `app.get('^/$\|/index.html', ...)` | Separar em duas rotas distintas |

---

## 🚀 Rodar o projeto

```bash
npm run dev
```

Servidor disponível em: `http://localhost:3500`