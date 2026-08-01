// ------------------------------------------------------------
// Igualdade solta (==) vs Igualdade estrita (===)
// ------------------------------------------------------------

// == compara os VALORES, aplicando coerção de tipo antes de comparar
console.log(5 == "5"); // true  -> "5" é convertida para number antes de comparar
console.log(0 == false); // true  -> false vira 0
console.log(null == undefined); // true  -> caso especial: null e undefined são "iguais" entre si no ==
console.log("" == 0); // true  -> string vazia vira 0

// === compara VALOR e TIPO, sem nenhuma conversão
console.log(5 === "5"); // false -> tipos diferentes (number vs string)
console.log(0 === false); // false -> tipos diferentes (number vs boolean)
console.log(null === undefined); // false -> tipos diferentes

// REGRA PRÁTICA (usada pela grande maioria dos times/linters hoje):
// Use SEMPRE === e !== no lugar de == e !=.
// Isso evita bugs sutis causados por coerção implícita inesperada.