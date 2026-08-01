const temConta = true;
const senhaCorreta = false;

if (temConta) {
  if (senhaCorreta) {
    console.log("Login realizado com sucesso");
  } else {
    console.log("Senha incorreta");
  }
} else {
  console.log("Conta não encontrada");
}

// A mesma lógica, evitando aninhamento com &&
// (geralmente mais fácil de ler quando as condições crescem):
if (temConta && senhaCorreta) {
  console.log("Login OK (versão com &&)");
} else {
  console.log("Login falhou (versão com &&)");
}
