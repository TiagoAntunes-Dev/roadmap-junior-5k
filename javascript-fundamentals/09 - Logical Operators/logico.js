// ------------------------------------------------------------
// && (E lógico) -> true somente se AMBOS os lados forem truthy
// ------------------------------------------------------------
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false

const idade = 20;
const temCarteira = true;
console.log(idade >= 18 && temCarteira); // true -> pode dirigir

// ------------------------------------------------------------
// || (OU lógico) -> true se PELO MENOS UM dos lados for truthy
// ------------------------------------------------------------
console.log(true || false); // true
console.log(false || false); // false

const temDesconto = false;
const ehAniversario = true;
console.log(temDesconto || ehAniversario); // true -> ganha desconto de qualquer jeito

// ------------------------------------------------------------
// ! (negação) -> inverte um valor booleano
// ------------------------------------------------------------
console.log(!true); // false
console.log(!false); // true
console.log(!0); // true  -> 0 é falsy, então !0 é true
console.log(!"texto"); // false -> "texto" é truthy, então ! inverte para false

// ------------------------------------------------------------
// && e || NÃO retornam necessariamente true/false —
// eles retornam um dos VALORES ORIGINAIS (short-circuit evaluation)
// ------------------------------------------------------------

// && retorna o PRIMEIRO valor falsy, ou o ÚLTIMO valor se todos forem truthy
console.log("a" && "b"); // "b"  -> ambos truthy, retorna o último
console.log(0 && "b"); // 0    -> para no primeiro falsy (0), nem avalia "b"
console.log("" && "b"); // ""   -> string vazia é falsy, para ali

// || retorna o PRIMEIRO valor truthy, ou o ÚLTIMO valor se todos forem falsy
console.log("a" || "b"); // "a"  -> já é truthy, nem olha o resto
console.log(0 || "b"); // "b"  -> 0 é falsy, passa pro próximo
console.log(0 || "" || null); // null -> todos falsy, retorna o último mesmo assim