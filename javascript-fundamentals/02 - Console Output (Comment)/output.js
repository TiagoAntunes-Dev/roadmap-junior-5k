// Comentário de UMA linha: tudo depois de // é ignorado pelo motor JS.

/*
  Comentário de VÁRIAS linhas (bloco).
  Útil para explicações mais longas ou para "comentar" um trecho
  inteiro de código temporariamente durante testes.
*/

const nome = "Tiago";
console.log(`Olá, ${nome}! Hoje é um bom dia para estudar JS.`);

// console.error -> mensagens de erro (geralmente aparecem em vermelho)
console.error("Isso é um erro simulado");

// console.warn -> avisos (geralmente aparecem em amarelo)
console.warn("Isso é um aviso");

// console.info -> informativo (na prática, se comporta como console.log
// na maioria dos ambientes)
console.info("Isso é uma informação");