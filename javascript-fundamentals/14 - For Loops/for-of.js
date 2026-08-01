// ------------------------------------------------------------
// for...of -> percorre os VALORES de um array (ou qualquer iterável:
// string, Set, Map...)
// ------------------------------------------------------------
const doces = ["Brigadeiro", "Beijinho", "Cajuzinho"];

for (const doce of doces) {
  console.log("for...of:", doce);
}

// Funciona em strings também (cada caractere é um item):
for (const letra of "abc") {
  console.log("letra:", letra);
}

// Se precisar do ÍNDICE junto com for...of, usa entries():
for (const [indice, doce] of doces.entries()) {
  console.log(`${indice}: ${doce}`);
}