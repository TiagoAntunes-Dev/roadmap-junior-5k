# 🚀 Laboratório 02: Express.js (A Camada de Conveniência)

> "A evolução da arquitetura: trocando verbosidade por produtividade."

Após entender o fluxo de dados bruto no laboratório anterior, este diretório introduz o ecossistema moderno. Aqui, refatoramos o servidor nativo utilizando o Express.js. O foco é visualizar o quanto a arquitetura de código encolhe e se torna mais legível quando delegamos o trabalho pesado de rede para um framework maduro.

## 🎯 Objetivos de Aprendizado (O que foi dominado aqui)

*   **Abstração de Roteamento:** Substituição dos complexos `if/else` nativos por rotas semânticas (`app.get`, `app.post`) e divisão de responsabilidades.
*   **Middlewares na Prática:** A essência do Express. Entendimento lógico de como interceptar uma requisição antes que ela chegue ao seu destino final (o Controller), ideal para validações e logs.
*   **Manipulação de JSON (Body Parser):** O fim do agrupamento manual de Buffers. Como o Express traduz a corrente de dados (streams) da rede diretamente para um objeto JavaScript manipulável em uma única linha de configuração.
*   **Separação de Contexto:** Como estruturar o projeto para que o arquivo principal do servidor apenas "ligue" a máquina, enquanto outros arquivos gerenciam as rotas.

## 🧠 Por que este laboratório existe?
Para marcar a transição de um script isolado para uma aplicação escalável, preparando o terreno para a injeção de regras de negócio complexas e integração com o banco de dados.