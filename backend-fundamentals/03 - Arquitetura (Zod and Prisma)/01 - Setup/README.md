# 🏛️ Laboratório 03: Arquitetura Completa (Express, Zod e Prisma)

> "Onde a tipagem encontra a persistência."

Este é o estágio final da base do backend. Com a rede configurada (Express), este diretório integra as duas pontas cruciais de uma API madura: a blindagem dos dados de entrada (Zod) e a persistência estruturada (Prisma). A arquitetura aqui foca no fluxo claro da informação, do momento em que o JSON bate na porta do servidor até ser gravado de forma relacional.

## 🎯 Objetivos de Aprendizado (O que foi dominado aqui)

*   **A Prova de Fogo dos Tipos com Zod:** Criação de *schemas* de validação. A lógica de garantir que os contratos de entrada (o que o frontend envia) sejam rigorosamente respeitados antes da regra de negócio ser executada, inferindo tipagens automáticas para o TypeScript.
*   **Modelagem de Dados Eficiente:** Uso do Prisma ORM para traduzir a arquitetura relacional em código estático. Aplicação de uma estrutura de banco de dados intencionalmente simplificada e direta, garantindo que o foco permaneça no entendimento do fluxo de dados e não em configurações verbosas desnecessárias.
*   **Camadas da Aplicação:** Separação definitiva entre *Routes* (caminhos), *Controllers* (gerentes da requisição) e *Services* (regras de negócio puras).
*   **Migrations e Sincronia:** Entendimento lógico de como o esquema do Prisma cria um histórico de evolução (migrations) e mantém o código perfeitamente alinhado com as tabelas reais do banco de dados.

## 🧠 Por que este laboratório existe?
Para consolidar o "motor" da aplicação. Uma API que possui entrada validada (Zod) e comunicação tipada com o banco (Prisma) está pronta para o mercado, livre de vulnerabilidades básicas e pronta para ser consumida por qualquer cliente Frontend de forma segura.