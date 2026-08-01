// ------------------------------------------------------------
// Acessando propriedades: notação de ponto vs colchetes
// ------------------------------------------------------------
console.log(doce.nome); // "Brigadeiro" -> notação de ponto (mais comum)
console.log(doce["preco"]); // 3.5         -> notação de colchetes

// Colchetes são obrigatórios quando a chave é dinâmica (vem de variável)
// ou tem caracteres especiais/espaços:
const propriedade = "disponivel";
console.log(doce[propriedade]); // true -> usando o valor da variável como chave

console.log(doce.descricao()); // "Brigadeiro custa R$3.50"

// ------------------------------------------------------------
// Adicionando, alterando e removendo propriedades
// ------------------------------------------------------------
doce.categoria = "Docinhos"; // adiciona nova propriedade
doce.preco = 4.0; // altera propriedade existente
delete doce.disponivel; // remove a propriedade completamente

console.log(doce);

// ------------------------------------------------------------
// Verificando se uma propriedade existe
// ------------------------------------------------------------
console.log("nome" in doce); // true
console.log("disponivel" in doce); // false -> foi deletada acima
console.log(doce.hasOwnProperty("preco")); // true

// ------------------------------------------------------------
// Object.keys / Object.values / Object.entries
// ------------------------------------------------------------
console.log(Object.keys(doce)); // array só com as CHAVES
console.log(Object.values(doce)); // array só com os VALORES
console.log(Object.entries(doce)); // array de pares [chave, valor]

// Combinando com for...of para percorrer o objeto:
for (const [chave, valor] of Object.entries(doce)) {
  if (typeof valor !== "function") {
    console.log(`${chave}: ${valor}`);
  }
}

// ------------------------------------------------------------
// Object destructuring (extrair propriedades para variáveis)
// ------------------------------------------------------------
const { nome, preco } = doce;
console.log(nome, preco); // "Brigadeiro" 4

// Renomeando a variável durante a extração:
const { nome: nomeDoDoce } = doce;
console.log(nomeDoDoce); // "Brigadeiro"

// Valor padrão se a propriedade não existir:
const { validade = "Não informado" } = doce;
console.log(validade); // "Não informado"

// ------------------------------------------------------------
// Spread em objetos -> copiar e combinar objetos
// ------------------------------------------------------------
const doceBase = { nome: "Beijinho", preco: 3.0 };
const doceEstoque = { ...doceBase, estoque: 50 }; // copia tudo de doceBase + adiciona estoque
console.log(doceEstoque);

// Spread também é usado para ATUALIZAR um objeto sem mutar o original
// (muito comum em React/estado imutável):
const doceAtualizado = { ...doceBase, preco: 3.5 }; // sobrescreve só o preco
console.log(doceBase); // preco continua 3.0 (original intacto)
console.log(doceAtualizado); // preco agora é 3.5

// ------------------------------------------------------------
// Objetos aninhados (objeto dentro de objeto)
// ------------------------------------------------------------
const pedido = {
  cliente: {
    nome: "Maria",
    endereco: { cidade: "Santo André", estado: "SP" },
  },
  itens: [{ produto: "Brigadeiro", qtd: 10 }],
};

console.log(pedido.cliente.endereco.cidade); // "Santo André"
console.log(pedido?.cliente?.telefone?.ddd); // undefined (sem quebrar, graças ao ?.)

// ------------------------------------------------------------
// Object.freeze -> impede alterações no objeto (imutabilidade real)
// ------------------------------------------------------------
const configFixa = Object.freeze({ tema: "escuro" });
configFixa.tema = "claro"; // não gera erro, mas é ignorado silenciosamente
console.log(configFixa.tema); // ainda "escuro"
