# Docker 🐳

O **Docker** é uma plataforma open-source que automatiza a implantação, o dimensionamento e o gerenciamento de aplicações dentro de recipientes virtuais leves (chamados **containers**).

Com o Docker, você empacota o código da sua aplicação junto com todas as dependências, bibliotecas e configurações necessárias para que ela rode de forma idêntica em qualquer ambiente (desenvolvimento, staging ou produção).

---

## 🛠️ Conceitos Fundamentais

* **Image (Imagem):** Um modelo de leitura (*template*) que contém as instruções para criar um container. É o *blueprint* da aplicação (ex: imagem do Node.js, PostgreSQL ou Python).
* **Container:** A instância em execução de uma imagem. É um ambiente isolado e leve onde a aplicação roda de fato.
* **Dockerfile:** Arquivo de texto sem extensão que contém os comandos sequenciais necessários para construir uma imagem.
* **Docker Hub:** Registro público oficial para armazenar, compartilhar e baixar imagens prontas de diversas tecnologias.
* **Docker Compose:** Ferramenta para definir e rodar aplicações multi-container usando um único arquivo de configuração (`docker-compose.yml`).

---

## 🚀 Guia Rápido de Comandos

### Gerenciamento de Imagens
```bash
# Baixar uma imagem do Docker Hub
docker pull <imagem>:<tag>

# Listar imagens baixadas localmente
docker images

# Remover uma imagem local
docker rmi <imagem_id_ou_nome>
```

### Gerenciamento de Containers
```bash
# Criar e rodar um container em segundo plano (detached) com mapeamento de porta
docker run -d -p <porta_host>:<porta_container> --name <nome_container> <imagem>

# Listar containers em execução
docker ps

# Listar todos os containers (inclusive os parados)
docker ps -a

# Parar um container em execução
docker stop <container_id_ou_nome>

# Iniciar um container parado
docker start <container_id_ou_nome>

# Remover um container (precisa estar parado)
docker rm <container_id_ou_nome>

# Acessar os logs do container
docker logs -f <nome_container>

# Abrir um terminal iterativo dentro de um container rodando
docker exec -it <nome_container> sh
```

---

## 📄 Exemplo Prático: Dockerfile

Um arquivo `Dockerfile` básico para construir uma imagem Node.js:

```dockerfile
# 1. Imagem base
FROM node:20-alpine

# 2. Diretório de trabalho dentro do container
WORKDIR /app

# 3. Copia arquivos de dependências
COPY package*.json ./

# 4. Instala dependências
RUN npm install

# 5. Copia o restante do código da aplicação
COPY . .

# 6. Compila o projeto (se aplicável)
RUN npm run build

# 7. Expõe a porta onde a aplicação roda
EXPOSE 3000

# 8. Comando de inicialização do container
CMD ["npm", "start"]
```

---

## 🧩 Exemplo Prático: Docker Compose

Um arquivo `docker-compose.yml` para subir um ecossistema com Backend e Banco de Dados PostgreSQL:

```yaml
version: '3.8'

services:
  postgres:
    image: postgres:16-alpine
    container_name: postgres_db
    environment:
      POSTGRES_USER: admin
      POSTGRES_PASSWORD: secretpassword
      POSTGRES_DB: app_db
    ports:
      - "5432:5432"
    volumes:
      - pgdata:/var/lib/postgresql/data

  api:
    build: .
    container_name: backend_api
    ports:
      - "3000:3000"
    environment:
      DATABASE_URL: "postgresql://admin:secretpassword@postgres:5432/app_db"
    depends_on:
      - postgres

volumes:
  pgdata:
```

### Comandos do Docker Compose
```bash
# Subir todos os serviços definidos em segundo plano
docker compose up -d

# Parar e remover os containers e redes criadas
docker compose down

# Parar e remover incluindo os volumes de dados persistentes
docker compose down -v
```