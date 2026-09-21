# 🚀 Guia Prático NestJS: Do Zero à Injeção de Dependências

Este repositório contém o resumo prático e a consolidação dos conceitos fundamentais do **NestJS** abordados no curso, cobrindo desde a inicialização do ecossistema até a criação de **Módulos, Controllers e Services**, tanto manualmente quanto utilizando o **Nest CLI**.

---

## 📋 Sumário

* [1. Estrutura do Projeto e Inicialização](#1-estrutura-do-projeto-e-inicialização)
* [2. O Ecossistema HTTP e Ferramentas de Teste](#2-o-ecossistema-http-e-ferramentas-de-teste)
* [3. Os Três Pilares do NestJS](#3-os-três-pilares-do-nestjs)

  * [Módulos](#1-módulos-module)
  * [Controllers](#2-controllers-controller)
  * [Services e Providers](#3-services-e-providers-injectable)
* [4. Injeção de Dependências e Resolução de Erros](#4-injeção-de-dependências--resolução-de-erros-clássicos)
* [5. Cheat Sheet — Nest CLI](#5-cheat-sheet--comandos-essenciais-do-nest-cli)

---

# 1. Estrutura do Projeto e Inicialização

Quando geramos um projeto NestJS, a CLI cria uma estrutura base dentro da pasta `src/`:

```text
src/
├── app.controller.ts   # Controller raiz da aplicação
├── app.module.ts       # Módulo raiz responsável por carregar o sistema
├── app.service.ts      # Serviço raiz com lógica simples
└── main.ts             # Ponto de entrada (Entrypoint) da aplicação
```

## O arquivo `main.ts` e a função `bootstrap()`

O arquivo `main.ts` é o ponto de entrada da aplicação e responsável pela inicialização do servidor HTTP.

```typescript
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';

async function bootstrap() {
  // Cria a instância do aplicativo NestJS usando o módulo raiz (AppModule)
  const app = await NestFactory.create(AppModule);

  // Define a porta em que o servidor ficará escutando requisições HTTP
  await app.listen(3000);
}

bootstrap();
```

### `NestFactory.create()`

Instancia a aplicação NestJS carregando a árvore de módulos a partir do `AppModule`.

### `app.listen(3000)`

Inicia o servidor HTTP na porta `3000`.

A aplicação ficará acessível em:

```text
http://localhost:3000
```

---

# 2. O Ecossistema HTTP e Ferramentas de Teste

## Conceitos básicos de HTTP

### URL / Endpoint

É o endereço de um recurso disponibilizado pela API.

Exemplo:

```text
http://localhost:3000/concepts-cli
```

### Recurso

É o objeto ou entidade exposta pela API.

Exemplos:

```text
concepts-cli
users
products
```

### Método HTTP (Verbo)

Define a ação que o cliente deseja executar.

#### GET

Utilizado para solicitar dados ou recursos do servidor.

No contexto de CRUD:

```text
GET → Read
```

O método `GET` normalmente não deve alterar o estado do servidor.

---

## Testando rotas com a extensão REST Client

Em vez de depender de ferramentas externas como **Postman** ou **Insomnia**, podemos utilizar a extensão **REST Client** do VS Code.

Basta criar um arquivo com extensão:

```text
.http
```

ou:

```text
.rest
```

Exemplo:

```http
### Teste da rota raiz do controller CLI
GET http://localhost:3000/concepts-cli

### Teste da rota do controller manual
GET http://localhost:3000/conceitos-manuais
```

A extensão permite executar as requisições diretamente pelo editor.

---

# 3. Os Três Pilares do NestJS

A estrutura básica pode ser representada da seguinte maneira:

```text
                    ┌───────────────────────┐
                    │       AppModule       │
                    └───────────┬───────────┘
                                │
                              Imports
                                │
                    ┌───────────▼───────────┐
                    │    Feature Module     │
                    │       (Módulo)        │
                    └────────┬───────┬──────┘
                             │       │
                    Controllers   Providers
                             │       │
                  ┌──────────▼───┐ ┌─▼─────────────┐
                  │  Controller  │ │    Service    │
                  │(Recepcionista)│ │   (Cérebro)  │
                  └──────────────┘ └───────────────┘
```

---

## 📦 1. Módulos (`@Module`)

Os **Módulos** agrupam componentes relacionados ao mesmo domínio ou funcionalidade.

O NestJS utiliza módulos para organizar a aplicação em fronteiras bem definidas.

Exemplo:

```typescript
import { Module } from '@nestjs/common';
import { ConceptsCliController } from './concepts-cli.controller.js';
import { ConceptsCliService } from './concepts-cli.service.js';

@Module({
  controllers: [ConceptsCliController], // Controllers registrados neste módulo
  providers: [ConceptsCliService],       // Services registrados neste módulo
  exports: []                            // Services visíveis para outros módulos
})
export class ConceptsCliModule {}
```

### Principais propriedades do `@Module`

| Propriedade   | Função                                      |
| ------------- | ------------------------------------------- |
| `imports`     | Importa outros módulos                      |
| `controllers` | Registra os Controllers                     |
| `providers`   | Registra Services e outros Providers        |
| `exports`     | Disponibiliza Providers para outros módulos |

---

# 🚪 2. Controllers (`@Controller`)

O **Controller** atua como o "Recepcionista" da aplicação.

Ele recebe a requisição HTTP, extrai os dados necessários e envia a resposta de volta ao cliente.

> A ideia é manter a lógica de negócio fora do Controller, delegando o processamento para o Service.

Exemplo:

```typescript
import { Controller, Get } from '@nestjs/common';
import { ConceptsCliService } from './concepts-cli.service.js';

@Controller('concepts-cli')
export class ConceptsCliController {

  // Injeção de dependência do Service no construtor
  constructor(
    private readonly conceptsCliService: ConceptsCliService
  ) {}

  @Get()
  home(): string {
    // Delega o processamento para o Service
    return this.conceptsCliService.testandoServiceCli();
  }
}
```

### `@Controller('concepts-cli')`

Define a rota base do Controller:

```text
http://localhost:3000/concepts-cli
```

### `@Get()`

Mapeia o método HTTP `GET` para a rota definida pelo Controller.

Neste exemplo:

```text
GET http://localhost:3000/concepts-cli
```

---

# 🧠 3. Services e Providers (`@Injectable`)

O **Service** funciona como o "cérebro" da funcionalidade.

Ele pode conter:

* Regras de negócio
* Operações com banco de dados
* Cálculos
* Conversões
* Processamento de dados

Exemplo:

```typescript
import { Injectable } from '@nestjs/common';

@Injectable()
export class ConceptsCliService {

  testandoServiceCli(): string {
    // Regra de negócio ou retorno processado
    return 'Testando Service Cli(Concepts-Cli-Service.ts)';
  }
}
```

### `@Injectable()`

Informa ao NestJS que a classe pode ser gerenciada pelo sistema de **Dependency Injection**.

---

# 4. Injeção de Dependências & Resolução de Erros Clássicos

## Como funciona a Injeção de Dependência (DI)

O NestJS gerencia automaticamente as instâncias das classes através do padrão de **Inversão de Controle (IoC)**.

Quando declaramos um Service no construtor do Controller:

```typescript
constructor(
  private readonly conceptsCliService: ConceptsCliService
) {}
```

O NestJS procura uma instância de `ConceptsCliService` no contexto do módulo e a injeta automaticamente no Controller.

O fluxo pode ser representado assim:

```text
Controller
     │
     │ solicita
     ▼
ConceptsCliService
     │
     │ fornecido pelo NestJS
     ▼
Dependency Injection
```

---

## ⚠️ Erro clássico: dependência não resolvida

Se tentarmos injetar um Service em um Controller sem registrá-lo no array `providers` do Module, o NestJS poderá apresentar um erro semelhante a:

```text
Error: Nest can't resolve dependencies of the ConceptsManualController (?).

Please make sure that the argument ConceptsManualService
at index [0] is available in the ConceptsManualModule context.
```

### Como resolver

Certifique-se de que o Service está registrado no `providers` do módulo.

### ❌ ERRADO

O Service não está registrado:

```typescript
@Module({
  controllers: [ConceptsManualController],
  providers: []
})
export class ConceptsManualModule {}
```

### ✅ CORRETO

O Service foi devidamente registrado:

```typescript
@Module({
  controllers: [ConceptsManualController],
  providers: [ConceptsManualService]
})
export class ConceptsManualModule {}
```

Agora o NestJS consegue localizar e injetar o `ConceptsManualService` no Controller.

---

# 5. Cheat Sheet — Comandos Essenciais do Nest CLI

O **Nest CLI** permite gerar arquivos e estruturas seguindo os padrões oficiais do NestJS.

| Ação                   | Comando longo                   | Atalho            |
| ---------------------- | ------------------------------- | ----------------- |
| Criar Módulo           | `nest generate module nome`     | `nest g mo nome`  |
| Criar Controller       | `nest generate controller nome` | `nest g co nome`  |
| Criar Service          | `nest generate service nome`    | `nest g s nome`   |
| Criar Recurso completo | `nest generate resource nome`   | `nest g res nome` |

---

## 🧪 Sem arquivos de teste

Para gerar um arquivo sem o respectivo arquivo de teste `.spec.ts`, utilize:

```bash
--no-spec
```

Exemplos:

```bash
nest g co nome --no-spec
```

```bash
nest g s nome --no-spec
```

```bash
nest g res nome --no-spec
```

---

## 💡 Dica de produtividade

Ao utilizar comandos da CLI como:

```bash
nest g co produtos
```

ou:

```bash
nest g s produtos
```

o NestJS pode atualizar automaticamente o arquivo `.module.ts` correspondente, adicionando as importações e registrando a classe nos arrays `controllers` ou `providers`.

Isso reduz a necessidade de realizar esses registros manualmente e ajuda a evitar erros de configuração.

---

# 📌 Resumo Visual

Até este ponto, o fluxo principal do NestJS pode ser entendido assim:

```text
                    ┌──────────────┐
                    │  AppModule   │
                    └──────┬───────┘
                           │
                         imports
                           │
                    ┌──────▼───────┐
                    │ FeatureModule│
                    └──────┬───────┘
                           │
              ┌────────────┴────────────┐
              │                         │
       ┌──────▼───────┐         ┌───────▼──────┐
       │  Controller  │────────▶│    Service   │
       │  HTTP / API  │         │ Regras/Logic │
       └──────────────┘         └──────────────┘
```

### Fluxo de uma requisição

```text
Cliente
   │
   │ HTTP Request
   ▼
Controller
   │
   │ chama
   ▼
Service
   │
   │ processa
   ▼
Response
   │
   ▼
Cliente
```

---

## 🚀 Comandos mais utilizados até agora

```bash
# Criar projeto
nest new minha-api

# Criar módulo
nest g mo produtos

# Criar controller
nest g co produtos

# Criar service
nest g s produtos

# Criar recurso completo
nest g res produtos

# Não gerar arquivos de teste
nest g co produtos --no-spec
nest g s produtos --no-spec
```

> **Status do estudo:** Projeto → HTTP → Modules → Controllers → Services → Providers → Injeção de Dependências.
