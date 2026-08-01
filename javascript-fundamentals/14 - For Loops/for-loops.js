// ------------------------------------------------------------
// for clássico -> ideal quando você já sabe quantas vezes repetir
// ------------------------------------------------------------
// Sintaxe: for (inicialização; condição; incremento) { ... }
for (let i = 0; i < 5; i++) {
  console.log("for clássico, i =", i);
}
// 1) inicialização (let i = 0) roda UMA vez, no começo
// 2) condição (i < 5) é testada ANTES de cada volta
// 3) o bloco {} roda se a condição for true
// 4) incremento (i++) roda DEPOIS de cada volta
// 5) volta pro passo 2, até a condição virar false

// Contando de trás para frente:
for (let i = 5; i > 0; i--) {
  console.log("contagem regressiva:", i);
}

// Pulando de 2 em 2:
for (let i = 0; i <= 10; i += 2) {
  console.log("par:", i);
}