// Objetos, arrays, funções, Set, Map... tudo isso é do tipo "object"
// (funções são um caso especial: typeof retorna "function")
const pessoa = { nome: "Tiago", curso: "Sistemas para Internet" };
const lista = [1, 2, 3];
function minhaFuncao() {}

console.log(typeof pessoa); // "object"
console.log(typeof lista); // "object" (arrays são um tipo de objeto)
console.log(typeof minhaFuncao); // "function"