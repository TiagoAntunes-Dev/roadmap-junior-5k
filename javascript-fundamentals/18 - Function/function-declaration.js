// ------------------------------------------------------------
// Function Declaration (declaração de função)
// ------------------------------------------------------------
function somar(a, b) {
  return a + b;
}
console.log(somar(2, 3)); // 5

// Function declarations sofrem HOISTING completo: podem ser chamadas
// ANTES de aparecerem no código, porque o JS "levanta" a função
// inteira para o topo do escopo durante a fase de preparação.
console.log(subtrair(10, 4)); // funciona mesmo declarada depois
function subtrair(a, b) {
  return a - b;
}