// ------------------------------------------------------------
// Operador ternário -> versão "compacta" de if/else para UM valor
// ------------------------------------------------------------
const status = idade >= 18 ? "adulto" : "menor de idade";
console.log(status);

// Sintaxe: condicao ? valorSeVerdadeiro : valorSeFalso
// Bom para atribuições simples. Para lógica mais complexa, if/else
// tradicional continua sendo mais legível.

// Ternário aninhado (usar com moderação — fica difícil de ler rápido):
const classificacao =
  nota >= 90 ? "A" : nota >= 70 ? "B" : nota >= 50 ? "C" : "Reprovado";
console.log(classificacao);