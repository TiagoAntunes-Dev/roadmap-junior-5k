// ------------------------------------------------------------
// OPERADORES ARITMÉTICOS BÁSICOS
// ------------------------------------------------------------
console.log(10 + 5); // 15 -> adição
console.log(10 - 5); // 5  -> subtração
console.log(10 * 5); // 50 -> multiplicação
console.log(10 / 5); // 2  -> divisão
console.log(10 % 3); // 1  -> módulo (resto da divisão)
console.log(2 ** 3); // 8  -> exponenciação (2 elevado a 3)

// ------------------------------------------------------------
// Incremento / Decremento
// ------------------------------------------------------------
let contador = 5;
contador++; // equivalente a: contador = contador + 1
console.log(contador); // 6
contador--; // equivalente a: contador = contador - 1
console.log(contador); // 5

// Pré-incremento vs pós-incremento (diferença sutil, mas importante):
let x = 1;
console.log(x++); // mostra 1, DEPOIS incrementa (agora x vale 2)
console.log(++x); // incrementa PRIMEIRO (agora x vale 3), depois mostra 3

// ------------------------------------------------------------
// Operadores de atribuição combinados
// ------------------------------------------------------------
let total = 10;
total += 5; // total = total + 5
total -= 2; // total = total - 2
total *= 3; // total = total * 3
total /= 2; // total = total / 2
console.log(total); // 19.5