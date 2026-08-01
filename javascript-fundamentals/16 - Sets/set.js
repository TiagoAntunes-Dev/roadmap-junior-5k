// Set é uma estrutura de dados que guarda apenas VALORES ÚNICOS —
// se você tentar adicionar um valor repetido, ele simplesmente é
// ignorado. Não existem índices, como em array.

// ------------------------------------------------------------
// Criando um Set
// ------------------------------------------------------------
const sabores = new Set(["chocolate", "morango", "chocolate", "baunilha"]);
console.log(sabores); // Set(3) { 'chocolate', 'morango', 'baunilha' }
// repare que "chocolate" duplicado foi automaticamente ignorado

// Set vazio, adicionando itens depois:
const numerosUnicos = new Set();
numerosUnicos.add(1);
numerosUnicos.add(2);
numerosUnicos.add(2); // ignorado, já existe
numerosUnicos.add(3);
console.log(numerosUnicos); // Set(3) { 1, 2, 3 }

// ------------------------------------------------------------
// Métodos principais
// ------------------------------------------------------------
console.log(sabores.size); // 3 -> Set usa "size", não "length" como array
console.log(sabores.has("morango")); // true -> verifica existência (muito rápido)
console.log(sabores.has("uva")); // false

sabores.delete("morango"); // remove um item específico
console.log(sabores);

// sabores.clear(); // removeria TODOS os itens de uma vez (comentado para não zerar o exemplo)