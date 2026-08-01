// ------------------------------------------------------------
// Uso prático: simular "repita até o usuário digitar algo válido"
// (aqui simulado com um array de tentativas, já que não temos
// input real de terminal neste arquivo)
// ------------------------------------------------------------
const tentativasDeSenha = ["1234", "abcd", "senha123"];
let indice = 0;
let acertou = false;

while (indice < tentativasDeSenha.length && !acertou) {
  const tentativaAtual = tentativasDeSenha[indice];
  console.log(`Testando senha: ${tentativaAtual}`);

  if (tentativaAtual === "senha123") {
    acertou = true;
    console.log("Senha correta!");
  }
  indice++;
}

if (!acertou) {
  console.log("Nenhuma tentativa acertou a senha.");
}