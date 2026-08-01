// ------------------------------------------------------------
// Adicionando e removendo itens
// ------------------------------------------------------------
doces.push("Pé de Moleque"); // adiciona no FINAL -> retorna o novo length
console.log(doces);

doces.unshift("Paçoca"); // adiciona no INÍCIO -> retorna o novo length
console.log(doces);

const removidoDoFim = doces.pop(); // remove e retorna o ÚLTIMO item
console.log("Removido do fim:", removidoDoFim);

const removidoDoInicio = doces.shift(); // remove e retorna o PRIMEIRO item
console.log("Removido do início:", removidoDoInicio);

console.log(doces);