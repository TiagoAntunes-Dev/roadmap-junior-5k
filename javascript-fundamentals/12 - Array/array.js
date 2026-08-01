// Array é uma lista ORDENADA de valores. Em JS, um array pode
// misturar tipos diferentes (embora na prática seja mais comum manter
// um tipo só, por organização).

const doces = ["Brigadeiro", "Beijinho", "Cajuzinho"];
const misturado = [1, "dois", true, null, { nome: "objeto dentro de array" }];

console.log(doces);
console.log(doces.length); // 3 -> quantidade de itens

// ------------------------------------------------------------
// Acessando itens (índice começa em 0)
// ------------------------------------------------------------
console.log(doces[0]); // "Brigadeiro"
console.log(doces[2]); // "Cajuzinho"
console.log(doces[doces.length - 1]); // último item, sem precisar saber a posição exata
console.log(doces.at(-1)); // forma moderna equivalente: -1 pega o último item