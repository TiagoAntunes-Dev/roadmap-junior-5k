// ------------------------------------------------------------
// if / else if / else -> várias condições em cadeia
// ------------------------------------------------------------
const nota = 75;

if (nota >= 90) {
  console.log("Conceito A");
} else if (nota >= 70) {
  // só é avaliado se a condição de cima (>= 90) for falsa
  console.log("Conceito B");
} else if (nota >= 50) {
  console.log("Conceito C");
} else {
  console.log("Reprovado");
}
// Importante: assim que UMA condição é verdadeira, o JS executa
// aquele bloco e IGNORA todo o resto da cadeia (não continua testando).