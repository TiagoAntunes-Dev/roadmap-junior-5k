// ------------------------------------------------------------
function buscarUsuario(id) {
  return new Promise((resolve, reject) => {
    // resolve e reject são funções que "destravam" a Promise

    console.log(`Buscando usuário ${id}...`);

    // simulando uma operação demorada com setTimeout
    setTimeout(() => {
      if (id <= 0) {
        // reject() marca a Promise como REJECTED, passando o erro
        reject(new Error("ID inválido"));
      } else {
        // resolve() marca a Promise como FULFILLED, passando o valor
        resolve({ id, nome: "Tiago" });
      }
    }, 1000);
  });
}


// ------------------------------------------------------------
// Consumindo uma Promise com .then() / .catch() / .finally()
// ------------------------------------------------------------
buscarUsuario(1)
  .then((usuario) => {
    // .then() roda quando a Promise é resolvida (resolve)
    console.log("Usuário encontrado:", usuario);
    return usuario.nome; // o valor retornado vira o input do PRÓXIMO .then()
  })
  .then((nome) => {
    // encadeamento de .then() -> cada um recebe o retorno do anterior
    console.log("Nome extraído:", nome);
  })
  .catch((erro) => {
    // .catch() roda quando a Promise é rejeitada (reject) —
    // ou quando QUALQUER .then() anterior lança um erro
    console.log("Erro ao buscar usuário:", erro.message);
  })
  .finally(() => {
    // .finally() roda SEMPRE, com sucesso ou erro
    console.log("Busca finalizada.\n");
  });

buscarUsuario(-1).catch((erro) => {
  console.log("Erro esperado:", erro.message);
});

// ------------------------------------------------------------
// async/await -> forma mais moderna e legível de trabalhar com
// Promises (é "açúcar sintático" por cima do .then/.catch)
// ------------------------------------------------------------
async function carregarPerfil() {
  try {
    // "await" pausa a execução DESTA função até a Promise resolver,
    // sem travar o resto do programa (só essa função "espera")
    const usuario = await buscarUsuario(2);
    console.log("Perfil carregado com await:", usuario);
  } catch (erro) {
    // com async/await, usamos try/catch normal em vez de .catch()
    console.log("Erro capturado com try/catch:", erro.message);
  }
}
carregarPerfil();

// Toda função async SEMPRE retorna uma Promise, mesmo que você só
// use "return valor" normal dentro dela:
async function exemploRetorno() {
  return 42;
}
exemploRetorno().then((valor) => console.log("Retorno de async:", valor)); // 42

// ------------------------------------------------------------
// Promise.all -> rodar várias Promises EM PARALELO e esperar todas
// ------------------------------------------------------------
async function buscarVariosUsuarios() {
  try {
    // Promise.all recebe um array de Promises e espera TODAS terminarem.
    // Se UMA delas falhar, Promise.all inteiro rejeita imediatamente.
    const usuarios = await Promise.all([
      buscarUsuario(3),
      buscarUsuario(4),
      buscarUsuario(5),
    ]);
    console.log("Todos os usuários:", usuarios);
  } catch (erro) {
    console.log("Uma das buscas falhou:", erro.message);
  }
}
buscarVariosUsuarios();

// ------------------------------------------------------------
// Promise.resolve / Promise.reject -> criar Promises já "prontas"
// ------------------------------------------------------------
// Úteis para testes ou para padronizar um retorno que às vezes é
// síncrono e às vezes assíncrono.
Promise.resolve("valor imediato").then((v) => console.log(v));