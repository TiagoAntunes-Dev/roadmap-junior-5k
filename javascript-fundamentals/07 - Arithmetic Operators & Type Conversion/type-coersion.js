// ------------------------------------------------------------
// TYPE COERCION (coerção de tipo)
// ------------------------------------------------------------
// JS às vezes converte tipos AUTOMATICAMENTE para conseguir realizar
// uma operação. Isso é chamado de "coerção implícita" e é uma das
// maiores fontes de bugs/confusão para quem está aprendendo.

// O operador + é especial: se QUALQUER um dos lados for string,
// ele vira CONCATENAÇÃO em vez de soma matemática.
console.log(1 + "1"); // "11"  -> number vira string
console.log("5" + 5); // "55"  -> number vira string
console.log(1 + 2 + "3"); // "33" -> 1+2 é calculado primeiro (=3), depois concatena com "3"
console.log("1" + 2 + 3); // "123" -> concatena da esquerda pra direita, sempre string a partir daqui

// Já os outros operadores (-, *, /) tentam converter para NUMBER:
console.log("10" - 5); // 5   -> "10" vira number
console.log("10" * "2"); // 20 -> ambos viram number
console.log("dez" - 5); // NaN -> "dez" não é conversível para number

// Booleanos em operações matemáticas viram 0 (false) ou 1 (true):
console.log(true + 1); // 2
console.log(false + 1); // 1
console.log(true + true); // 2

// null vira 0, undefined vira NaN em contas:
console.log(null + 1); // 1
console.log(undefined + 1); // NaN
