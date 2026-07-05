# 🃏 TypeScript Blackjack Game

## 📖 Sobre o Projeto
Este projeto é uma aplicação de linha de comando (CLI) construída em Node.js usando TypeScript. Consiste em uma versão simplificada do clássico jogo de cartas Blackjack, também conhecido como 21[cite: 1]. 

O objetivo principal deste projeto final foi praticar e solidificar conceitos fundamentais de programação, incluindo a sintaxe do TypeScript, Programação Orientada a Objetos (OOP) e lógica básica de desenvolvimento de jogos[cite: 1].

## 🎮 Regras do Jogo
Esta versão do jogo foca na mecânica principal do Blackjack, implementando as seguintes regras e condições:

* O jogo utiliza um baralho padrão de 52 cartas[cite: 1].
* Cartas numéricas (2 a 10) valem o seu valor de face[cite: 1].
* Cartas de figura (Valete, Dama, Rei) valem 10 pontos cada[cite: 1].
* Os Ases podem valer 1 ou 11 pontos, dependendo do que for mais vantajoso para a mão do jogador[cite: 1].
* O jogador inicia a partida com uma banca (bankroll) de $100[cite: 1].
* O jogador deve fazer uma aposta antes de cada rodada e o jogo termina se o dinheiro acabar[cite: 1].
* Inicialmente, o jogador e o dealer recebem duas cartas[cite: 1].
* As duas cartas do jogador ficam viradas para cima, enquanto o dealer tem uma carta visível e uma escondida[cite: 1].
* É uma versão simplificada: não há opções de dividir (splitting), dobrar (doubling down) ou se render (surrendering)[cite: 1].
* O jogador pode escolher apenas entre "hit" (pedir mais uma carta) ou "stand" (manter a mão atual)[cite: 1].
* O jogador pode pedir cartas até estourar (Bust), o que significa ultrapassar 21 pontos e perder automaticamente[cite: 1].
* O dealer é obrigado a pedir cartas (hit) se o seu total for menor que 17[cite: 1].
* O dealer é obrigado a parar (stand) quando o seu total atingir 17 ou mais[cite: 1].
* Se o jogador conseguir um Blackjack logo na primeira mão (um Ás e uma carta de valor 10), ele recebe um pagamento de 3:2 imediatamente, a menos que o dealer também tenha um Blackjack[cite: 1].
* Em caso de empate (Push), a aposta é devolvida ao jogador[cite: 1].

## 💻 Tecnologias e Ferramentas
* **TypeScript**[cite: 1]
* **Node.js**[cite: 1]
* **prompt-sync:** Pacote NPM utilizado para coletar os inputs do usuário diretamente no terminal[cite: 1].

## 🚀 Como Executar o Projeto

1. Clone este repositório.
2. Navegue até a pasta do projeto e instale as dependências necessárias para capturar o input do usuário[cite: 1]:
   ```bash
   npm install prompt-sync
   npm i -save-dev @types/prompt-sync
    ```
3. Exemplo de um Jogo: 
    ```
    Player's funds: $100
    Enter your bet: $20
    Your hand: 7, 5 (Total: 12)
    Dealer's hand: 10, [hidden]

    Your action (hit/stand): hit
    Your hand: 7, 5, 9 (Total: 21)

    Your action (hit/stand): stand
    Dealer's hand: 10, 6 (Total: 16)
    Dealer hits: 10, 6, 4 (Total: 20)

    You win $20!
    Player's funds: $120
     ```