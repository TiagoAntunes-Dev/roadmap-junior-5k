// try / catch básico
// ------------------------------------------------------------
try {
  // "try" = "tenta rodar este bloco"
  const resultado = JSON.parse("{ isso não é um JSON válido");
  console.log(resultado); // nunca chega aqui, pois a linha acima quebra
} catch (erro) {
  // "catch" = "se algo no try der erro, rode este bloco em vez de travar"
  console.log("Ocorreu um erro ao converter JSON:", erro.message);
}

console.log("O programa continua rodando normalmente depois do catch");