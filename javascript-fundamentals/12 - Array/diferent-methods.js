// ------------------------------------------------------------
// splice -> "canivete suíço" para inserir/remover em qualquer posição
// ------------------------------------------------------------
// splice(indiceInicial, quantidadeARemover, ...itensParaInserir)
const numeros = [1, 2, 3, 4, 5];

// Remover 2 itens a partir do índice 1:
const removidos = numeros.splice(1, 2);
console.log(numeros); // [1, 4, 5]
console.log(removidos); // [2, 3] -> splice retorna os itens removidos

// Inserir sem remover nada (quantidadeARemover = 0):
numeros.splice(1, 0, 10, 20);
console.log(numeros); // [1, 10, 20, 4, 5]

// ------------------------------------------------------------
// slice -> "corta um pedaço" SEM alterar o array original
// ------------------------------------------------------------
const letras = ["a", "b", "c", "d", "e"];
const pedaco = letras.slice(1, 3); // do índice 1 até o 3 (exclusivo)
console.log(pedaco); // ["b", "c"]
console.log(letras); // array original continua intacto

// ------------------------------------------------------------
// Buscando itens
// ------------------------------------------------------------
console.log(doces.includes("Beijinho")); // true/false -> existe no array?
console.log(numeros.indexOf(20)); // posição do valor (ou -1 se não achar)
console.log(numeros.find((n) => n > 15)); // primeiro item que passa no teste
console.log(numeros.findIndex((n) => n > 15)); // índice do primeiro item que passa no teste