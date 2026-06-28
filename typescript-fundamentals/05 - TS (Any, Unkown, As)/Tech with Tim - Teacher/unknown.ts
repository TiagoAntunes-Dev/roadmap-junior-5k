// unknown também representa um valor de tipo desconhecido.

// A diferença é que o TypeScript não deixa você usar esse valor até provar qual é o tipo dele.

let value: unknown = "Hello";

// ❌ Erro
console.log(value.length);

// Forma Correta

let values: unknown = "Hello";

if (typeof values === "string") {
    console.log(values.length);
}

// Agora o TS entende que, dentro do if, value é uma string.