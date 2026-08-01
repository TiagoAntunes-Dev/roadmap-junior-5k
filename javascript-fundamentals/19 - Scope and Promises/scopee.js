// ------------------------------------------------------------
// 1) this dentro de um método de objeto -> aponta para o objeto
// ------------------------------------------------------------
const doce = {
  nome: "Brigadeiro",
  preco: 3.5,
  descricao() {
    // aqui, "this" se refere ao objeto que está CHAMANDO o método,
    // ou seja: doce
    return `${this.nome} custa R$${this.preco}`;
  },
};
console.log(doce.descricao()); // "Brigadeiro custa R$3.5"