// ------------------------------------------------------------
// Function Expression (função guardada numa variável)
// ------------------------------------------------------------
const multiplicar = function (a, b) {
  return a * b;
};
console.log(multiplicar(2, 3)); // 6

// Function expressions NÃO sofrem hoisting da mesma forma —
// só existem depois que a linha é executada:
// console.log(dividir(10, 2)); // ERRO: Cannot access 'dividir' before initialization
const dividir = function (a, b) {
  return a / b;
};