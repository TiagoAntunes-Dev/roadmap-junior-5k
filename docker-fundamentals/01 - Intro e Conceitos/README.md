
# Docker: Introdução, Conceitos e Deploy

Este README foi organizado com base no conteúdo do transcript sobre Docker e tem como objetivo explicar de forma prática os conceitos essenciais para entender por que o Docker existe, como ele funciona e como aplicar esses conceitos em um projeto real, como esse exemplo de API Spring Boot.

## 1. O problema que o Docker resolve

Imagine que você é um cozinheiro e prepara uma receita incrível, mas quando tenta reproduzi-la em outra cozinha, o resultado muda: os ingredientes são diferentes, o forno aquece de forma diferente e a receita não fica igual.

Esse é o mesmo problema que acontece no desenvolvimento de software: uma aplicação pode funcionar perfeitamente em um ambiente e falhar em outro. Isso é o famoso "it works on my machine".

O Docker resolve esse problema ao virtualizar o ambiente necessário para a aplicação executar, incluindo dependências, configurações e bibliotecas, de forma isolada e reproduzível.

---

## 2. O que é Docker?

Docker é uma tecnologia de virtualização leve que permite empacotar uma aplicação e tudo o que ela precisa para rodar dentro de um container.

Um container é uma unidade executável que contém:

- a aplicação;
- suas dependências;
- as bibliotecas necessárias;
- configurações do ambiente;
- e tudo que o software precisa para funcionar.

A grande diferença é que o container compartilha o sistema operacional do host, ao contrário de uma máquina virtual, que precisa de um sistema operacional completo dentro dela.

---

## 3. Docker vs. Máquina Virtual

### Máquina virtual
- precisa de um sistema operacional dentro da VM;
- é mais pesada;
- consome mais recursos;
- geralmente leva mais tempo para subir;
- cada VM é uma máquina independente.

### Container Docker
- não precisa de um sistema operacional separado por container;
- usa o sistema operacional do host;
- é mais leve;
- executa processos isolados em namespaces e cgroups;
- consegue rodar vários containers no mesmo host com menos custo de recursos.

Em resumo: Docker oferece isolamento e portabilidade com muito menos overhead do que uma VM.

---

## 4. Por que usar Docker?

Porque ele permite que a mesma aplicação seja executada da mesma forma em diferentes ambientes, como:

- máquina local;
- servidor de desenvolvimento;
- ambiente de testes;
- VPS;
- cloud;
- produção.

Com Docker, você não precisa depender do ambiente específico da máquina onde a aplicação está sendo executada. O ambiente fica encapsulado dentro do container.

---

## 5. Conceitos fundamentais

### Dockerfile
É um arquivo que define como a imagem da aplicação será construída. Ele funciona como um blueprint do ambiente necessário para rodar a app.

Ele contém instruções como:

- `FROM`: imagem base
- `WORKDIR`: diretório de trabalho
- `COPY`: copia arquivos para o container
- `RUN`: executa comandos de instalação/compilação
- `EXPOSE`: expõe porta
- `ENTRYPOINT` ou `CMD`: define o comando de execução da aplicação

### Imagem
É a "fotografia" do ambiente necessário para executar a aplicação. Ela contém tudo que a app precisa.

### Container
É uma instância de uma imagem em execução. Uma imagem pode originar vários containers distintos.

### Registry / Hub
É um repositório onde imagens Docker são armazenadas e compartilhadas. Exemplos:

- Docker Hub
- AWS ECR
- Azure Container Registry
- GitHub Container Registry

---

## 6. Comandos básicos do Docker

### Verificar se o Docker está instalado

```bash
docker --version
```

### Listar containers em execução

```bash
docker ps
```

### Listar todos os containers (ativos e parados)

```bash
docker ps -a
```

### Baixar uma imagem

```bash
docker pull nome-da-imagem
```

### Criar uma imagem a partir de um Dockerfile

```bash
docker build -t nome-da-imagem:versao .
```

### Executar um container

```bash
docker run nome-da-imagem:versao
```

### Executar um container com mapeamento de portas

```bash
docker run -p 8080:8080 nome-da-imagem:versao
```

### Interagir com um container em execução

```bash
docker exec -it <container_id> bash
```

### Parar um container

```bash
docker stop <container_id>
```

### Remover um container

```bash
docker rm <container_id>
```

### Remover imagem

```bash
docker rmi nome-da-imagem:versao
```

---

## 7. Entendendo o isolamento de rede

Um ponto importante do Docker é que os containers possuem rede isolada do host.

Mesmo que a aplicação dentro do container esteja ouvindo na porta 8080, isso não significa que a porta 8080 do host também estará acessível.

Por isso, quando executamos um container, precisamos mapear a porta do container para uma porta do host:

```bash
docker run -p 8080:8080 nome-da-imagem:versao
```

Nesse exemplo:

- `8080` = porta da máquina host
- `8080` = porta do container

Isso permite acessar a aplicação em `http://localhost:8080`.

---

## 8. Exemplo prático com esta API Spring Boot

Neste projeto, a aplicação já possui um `Dockerfile` pronto. Ele usa uma imagem Maven para compilar a aplicação e uma imagem JDK para executar o jar final.

### Estrutura básica do Dockerfile

```dockerfile
FROM maven:3.9-eclipse-temurin-17 AS build
WORKDIR /app

COPY pom.xml .
COPY src ./src

RUN mvn clean package -DskipTests

FROM eclipse-temurin:17-jre
WORKDIR /app

COPY --from=build /app/target/*.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]
```

### O que esse Dockerfile faz?

1. Utiliza a imagem Maven para compilar o projeto;
2. copia o código e o `pom.xml` para o container;
3. executa o comando `mvn clean package -DskipTests`;
4. usa uma imagem JRE para executar o jar gerado;
5. expõe a porta 8080;
6. inicia a aplicação com `java -jar app.jar`.

---

## 9. Como gerar e executar a imagem localmente

Na raiz do projeto, execute:

```bash
docker build -t animequiz-api:1.0 .
```

Depois, rode o container com o mapeamento de portas:

```bash
docker run -p 8080:8080 animequiz-api:1.0
```

Se a aplicação estiver funcionando, você pode testar no navegador ou via curl:

```bash
curl http://localhost:8080/api/hello
```

Como exemplo, o endpoint pode responder algo como:

```text
Bem-vindo à API do AnimeQuiz!
```

---

## 10. Como interagir com o container

Se você quiser entrar dentro do container e inspecionar o ambiente, pode usar:

```bash
docker ps
```

Depois:

```bash
docker exec -it <container_id> bash
```

Isso permite abrir um terminal dentro do container e verificar arquivos, diretórios e processos internos.

---

## 11. Deploy em VPS / servidor remoto

O transcript também mostra a etapa final de deploy em um servidor na nuvem (VPS). A ideia é:

1. acessar o servidor via SSH;
2. instalar Docker no host;
3. copiar a imagem ou o Dockerfile para o servidor;
4. executar o container no servidor;
5. mapear a porta do container para a porta pública do servidor;
6. disponibilizar a aplicação para acesso externo.

A lógica é a mesma da execução local, só que em um ambiente remoto.

---

## 12. Resumo final

Docker foi criado para resolver o problema de compatibilidade entre ambientes e facilitar o deploy de aplicativos.

Ele permite:

- empacotar a aplicação com suas dependências;
- reproduzir o mesmo ambiente em qualquer máquina;
- reduzir o "works on my machine";
- rodar aplicações em containers leves e isolados;
- facilitar o deploy em servidores e nuvens.

Se você entendeu esses conceitos, já está pronto para começar a trabalhar com Docker de forma prática.

---

## 13. Comandos essenciais em um resumo rápido

```bash
docker build -t nome-da-imagem:versao .
docker run -p 8080:8080 nome-da-imagem:versao
docker ps
docker ps -a
docker stop <container_id>
docker exec -it <container_id> bash
docker images
docker rm <container_id>
```

---

## 14. Dica prática

Para projetos reais, o ideal é manter o `Dockerfile` na raiz do projeto, versionado junto com o código, para que qualquer pessoa consiga reproduzir o ambiente com um único comando.

Esse é um dos principais benefícios do Docker: padronizar o ambiente e facilitar a colaboração entre times e deploys.
=======
# ⛩AnimeQuiz API — Spring Boot RESTful Service

API Backend em Java e Spring Boot desenvolvida para gerenciar quizzes de animes, pontuações, usuários e perguntas.

---

##  Como Executar o Projeto

1. Certifique-se de ter o **Java 17+** e o **Maven** instalados.
2. Clone o repositório:
   ```bash
   git clone [https://github.com/mobile-animequiz/animequiz-api.git](https://github.com/mobile-animequiz/animequiz-api.git)
   cd animequiz-api
>>>>>>> 63465dfad712a766372264d7f44b6e12cfd4f8f6
