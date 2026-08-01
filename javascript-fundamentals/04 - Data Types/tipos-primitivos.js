// 1) String -> texto, entre aspas simples, duplas ou crase
const texto = "Suki Doces";
console.log(typeof texto); // "string"

// 2) Number -> números inteiros E decimais usam o MESMO tipo
const inteiro = 42;
const decimal = 3.14;
console.log(typeof inteiro, typeof decimal); // "number" "number"

// Valores numéricos especiais:
console.log(1 / 0); // Infinity
console.log(-1 / 0); // -Infinity
console.log(0 / 0); // NaN ("Not a Number") — resultado de operação inválida
console.log(typeof NaN); // "number" (sim, NaN é tecnicamente do tipo number)

// 3) BigInt -> para números inteiros MAIORES do que o Number consegue
// representar com segurança (acima de 2^53 - 1). Criado colocando um
// "n" no final do número.
const numeroGigante = 9007199254740993n;
console.log(typeof numeroGigante); // "bigint"

// 4) Boolean -> true ou false
const estaLogado = true;
console.log(typeof estaLogado); // "boolean"

// 5) undefined -> variável foi declarada, mas ainda NÃO recebeu valor
let semValor;
console.log(semValor); // undefined
console.log(typeof semValor); // "undefined"

// 6) null -> ausência de valor DEFINIDA INTENCIONALMENTE pelo programador
// (diferente de undefined, que costuma ser "esquecimento")
let semUsuario = null;
console.log(typeof semUsuario); // "object" <- isso é um bug histórico do JS,
// conhecido e nunca corrigido por questão de compatibilidade retroativa

// 7) Symbol -> valor único e imutável, geralmente usado como identificador
// "secreto" de propriedade em objetos, para evitar colisão de nomes
const idUnico = Symbol("id");
console.log(typeof idUnico); // "symbol"