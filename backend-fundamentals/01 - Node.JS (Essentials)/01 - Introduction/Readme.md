# 🧪 Laboratório 01: Node.js Raiz (Fundamentos e HTTP Puro)

> "Entender o motor antes de dirigir o carro." 

Este diretório é o ponto de partida do diário de bordo de engenharia reversa do backend. O objetivo aqui não é criar uma API rápida, mas sim entender como a web funciona por baixo dos panos utilizando apenas os módulos nativos do Node.js, sem nenhuma biblioteca externa ou framework de roteamento.

## 🎯 Objetivos de Aprendizado (O que foi dominado aqui)

*   **O Protocolo HTTP "de verdade":** Como levantar um servidor utilizando estritamente o módulo `node:http`. Entendimento prático de portas, *status codes* e a anatomia de uma requisição/resposta (Headers e Body).
*   **Roteamento Manual:** Construção de rotas do zero interceptando a URL (`req.url`) e o método (`req.method`) sem a abstração de frameworks.
*   **Buffers e Streams:** A lógica de como os dados trafegam na rede. Compreensão de que um JSON enviado via POST não chega inteiro, mas sim em "pedaços" (chunks), e como o Node os agrupa na memória antes da manipulação.
*   **O Event Loop:** Como o JavaScript lida com múltiplas requisições de forma assíncrona, não bloqueando a *thread* principal.

## 🧠 Por que este laboratório existe?
Para provar que ferramentas modernas (como Express ou Fastify) não são mágica, mas sim camadas de conveniência construídas em cima dessa base nativa. Ao dominar essa etapa, qualquer erro de roteamento no futuro será facilmente diagnosticado.