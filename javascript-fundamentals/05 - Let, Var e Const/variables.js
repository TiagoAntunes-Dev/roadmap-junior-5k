// JS tem 3 formas de declarar variáveis. Hoje em dia, `var` é
// considerado "legado" — bom entender, mas evitar em código novo.

// ------------------------------------------------------------
// var (a forma antiga, pré-ES6/2015)
// ------------------------------------------------------------
var nomeAntigo = "Tiago";
var nomeAntigo = "Outro nome"; // permite REDECLARAR a mesma variável
// sem erro nenhum — isso é perigoso em arquivos grandes, porque você
// pode acidentalmente sobrescrever uma variável sem perceber.
console.log(nomeAntigo);

// ------------------------------------------------------------
// let (ES6+) -> valor pode ser REATRIBUÍDO, mas não redeclarado
// ------------------------------------------------------------
let idade = 25;
idade = 26; // OK, reatribuição
// let idade = 27; // ERRO: Identifier 'idade' has already been declared
console.log(idade);

// ------------------------------------------------------------
// const (ES6+) -> valor NÃO pode ser reatribuído depois da criação
// ------------------------------------------------------------
const PI = 3.14159;
// PI = 3.14; // ERRO: Assignment to constant variable.
console.log(PI);