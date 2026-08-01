// ------------------------------------------------------------
// Arrow Functions (ES6+) -> sintaxe mais curta
// ------------------------------------------------------------
const somarArrow = (a, b) => {
  return a + b;
};

// Se o corpo tem APENAS um return, pode virar uma linha só,
// sem chaves e sem a palavra "return" (return implícito):
const somarArrowCurta = (a, b) => a + b;
console.log(somarArrowCurta(4, 5)); // 9

// Com um único parâmetro, os parênteses são opcionais:
const dobrar = (n) => n * 2;
console.log(dobrar(10)); // 20

// Sem nenhum parâmetro, os parênteses são obrigatórios:
const saudar = () => "Olá!";
console.log(saudar());

// IMPORTANTE: arrow functions NÃO têm o próprio "this" — elas usam
// o "this" do contexto onde foram criadas