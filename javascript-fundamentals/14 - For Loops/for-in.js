// ------------------------------------------------------------
// for...in -> percorre as CHAVES (propriedades) de um objeto
// ------------------------------------------------------------
const doce = { nome: "Brigadeiro", preco: 3.5, disponivel: true };

for (const chave in doce) {
  console.log(`${chave} -> ${doce[chave]}`);
}

// ATENÇÃO: for...in existe principalmente para OBJETOS.
// Em arrays, tecnicamente funciona, mas percorre os ÍNDICES como
// strings ("0", "1", "2"...) e pode incluir propriedades herdadas —
// por isso, para arrays, prefira for...of ou métodos como forEach/map.
for (const indice in doces) {
  console.log(typeof indice, indice); // "string" "0", "string" "1"...
}