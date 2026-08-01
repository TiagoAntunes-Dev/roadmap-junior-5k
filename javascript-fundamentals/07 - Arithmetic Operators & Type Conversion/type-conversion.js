// Diferente da coerção (automática, vista na seção anterior), aqui
// vemos como converter tipos DE FORMA EXPLÍCITA — ou seja, de propósito,
// deixando claro no código o que está acontecendo.

// ------------------------------------------------------------
// Convertendo PARA Number
// ------------------------------------------------------------
console.log(Number("42")); // 42
console.log(Number("")); // 0        <- string vazia vira 0
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN

// parseInt e parseFloat são mais "tolerantes": eles leem o número
// até encontrar um caractere inválido, em vez de falhar tudo com NaN.
console.log(parseInt("42px")); // 42   -> para no "p"
console.log(parseInt("3.99")); // 3    -> parseInt IGNORA a parte decimal
console.log(parseFloat("3.99")); // 3.99 -> preserva decimais
console.log(parseInt("abc42")); // NaN  -> se o PRIMEIRO caractere já for inválido, falha

// Atalho comum (não muito legível, mas aparece bastante em código real):
console.log(+"42"); // 42 -> o + unário converte para number, igual Number()

// ------------------------------------------------------------
// Convertendo PARA String
// ------------------------------------------------------------
console.log(String(42)); // "42"
console.log(String(true)); // "true"
console.log(String(null)); // "null"
console.log(String(undefined)); // "undefined"
console.log(String([1, 2, 3])); // "1,2,3" -> arrays viram string separada por vírgula

console.log((42).toString()); // "42" -> outra forma comum de converter number -> string
console.log((255).toString(16)); // "ff" -> toString aceita uma "base" (aqui, hexadecimal)

// Atalho comum: concatenar com string vazia força a conversão
console.log(42 + ""); // "42"

// ------------------------------------------------------------
// Convertendo PARA Boolean
// ------------------------------------------------------------
// Todo valor em JS é "truthy" ou "falsy" quando usado num contexto
// booleano (if, while, !!valor, Boolean(valor)).

// Valores FALSY (só existem estes 8 em todo o JavaScript):
console.log(Boolean(false)); // false
console.log(Boolean(0)); // false
console.log(Boolean(-0)); // false
console.log(Boolean(0n)); // false (BigInt zero)
console.log(Boolean("")); // false (string vazia)
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false

// TUDO o resto é truthy, inclusive coisas que parecem "vazias":
console.log(Boolean("0")); // true  <- string "0" NÃO é vazia, então é truthy
console.log(Boolean("false")); // true  <- string "false" também é truthy!
console.log(Boolean([])); // true  <- array vazio é truthy
console.log(Boolean({})); // true  <- objeto vazio é truthy

// Atalho comum: dupla negação !! força a conversão para boolean
console.log(!!"texto"); // true
console.log(!!0); // false