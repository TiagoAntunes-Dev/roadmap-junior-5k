// 'readline' é um módulo embutido do Node (não precisa de npm install)
const readline = require("node:readline");

// rl.question(pergunta, callback) mostra a pergunta no terminal e,
// quando o usuário aperta Enter, chama o callback com o texto digitado.
rl.question("Qual é o seu nome? ", (respostaNome) => {
  console.log(`Olá, ${respostaNome}! Bem-vindo ao estudo de Node.js.`);

  // Perguntas podem ser encadeadas (uma dentro da outra), já que
  // rl.question é assíncrona — a segunda pergunta só aparece depois
  // que a primeira resposta foi digitada.
  rl.question("Quantos anos você tem? ", (respostaIdade) => {
    // Tudo que vem do terminal chega como STRING, mesmo que pareça
    // um número. Por isso a conversão com Number() é necessária
    // para fazer contas (mais detalhes na seção de Type Conversions).
    const idade = Number(respostaIdade);

    if (Number.isNaN(idade)) {
      console.log("Isso não parece um número válido.");
    } else {
      console.log(`Em 10 anos você terá ${idade + 10} anos.`);
    }

    // IMPORTANTE: sempre fechar a interface depois de usar,
    // senão o processo do Node fica "pendurado" esperando mais input
    // e o script nunca termina sozinho.
    rl.close();
  });
});