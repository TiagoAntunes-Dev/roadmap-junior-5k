// ------------------------------------------------------------
// do...while -> testa a condição DEPOIS de rodar o bloco
// ------------------------------------------------------------
// Diferença chave: o bloco SEMPRE roda pelo menos UMA vez,
// mesmo que a condição já comece falsa.

let tentativas = 0;

do {
  console.log("do-while, tentativa número", tentativas + 1);
  tentativas++;
} while (tentativas < 3);

// Exemplo onde a diferença aparece de fato:
let numeroSecreto = 100;
do {
  console.log("Isso roda pelo menos 1 vez, mesmo com condição falsa");
} while (numeroSecreto < 10); // condição falsa desde o início