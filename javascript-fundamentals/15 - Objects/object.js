// Objeto é uma coleção de pares CHAVE: VALOR. É a estrutura mais
// usada em JS para representar "coisas" do mundo real (um usuário,
// um produto, um pedido...).

const doce = {
  nome: "Brigadeiro",
  preco: 3.5,
  disponivel: true,
  ingredientes: ["chocolate", "leite condensado", "manteiga"],

  // Métodos: funções guardadas como propriedade de um objeto
  descricao() {
    return `${this.nome} custa R$${this.preco.toFixed(2)}`;
    // "this" aqui se refere ao PRÓPRIO objeto (doce) — mais detalhes
    // na seção "this Keyword & Scope"
  },
};