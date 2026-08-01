// ------------------------------------------------------------
// while -> testa a condição ANTES de rodar o bloco
// ------------------------------------------------------------
let contador = 0;

while (contador < 5) {
  console.log("while, contador =", contador);
  contador++; // IMPORTANTÍSSIMO: sem isso, a condição nunca fica falsa
  // e o loop roda para sempre (loop infinito, trava o programa)
}

// Se a condição já começar falsa, o bloco NUNCA roda nem uma vez:
let n = 10;
while (n < 5) {
  console.log("isso nunca aparece");
}