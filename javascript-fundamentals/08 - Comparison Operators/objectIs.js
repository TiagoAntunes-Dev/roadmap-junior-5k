// ------------------------------------------------------------
// Object.is() -> uma alternativa mais "rigorosa" ainda que ===
// ------------------------------------------------------------
// Existem 2 casos raros onde === se comporta de forma "estranha":
console.log(NaN === NaN); // false -> NaN nunca é igual a NaN com ===
console.log(Object.is(NaN, NaN)); // true -> Object.is corrige esse caso

console.log(0 === -0); // true
console.log(Object.is(0, -0)); // false -> Object.is distingue 0 de -0

// Na prática, === resolve 99% dos casos do dia a dia; Object.is()
// é usado só em situações bem específicas.