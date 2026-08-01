// ------------------------------------------------------------
// Operadores relacionais: >, <, >=, <=
// ------------------------------------------------------------
console.log(10 > 5); // true
console.log(10 < 5); // false
console.log(10 >= 10); // true
console.log(10 <= 9); // false

// Esses operadores também tentam converter tipos quando necessário:
console.log("10" > "9"); // false -> ATENÇÃO: aqui é comparação de STRING (alfabética!)
// "10" vem antes de "9" alfabeticamente porque "1" < "9" caractere a caractere

console.log(10 > "9"); // true  -> aqui SIM vira comparação numérica,
// porque pelo menos um dos lados (10) já é number

// Comparando strings, sempre é ordem alfabética (lexicográfica):
console.log("banana" > "abacaxi"); // true -> "b" vem depois de "a"
console.log("Banana" > "banana"); // false -> maiúsculas têm valor menor que minúsculas na tabela Unicode