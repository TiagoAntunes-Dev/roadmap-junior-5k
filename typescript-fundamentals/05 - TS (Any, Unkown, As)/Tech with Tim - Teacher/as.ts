// Às vezes você sabe o tipo da variável, mas o TypeScript não.

// valor as Tipo

let value: unknown = "Hello";

let text = value as string;

console.log(text.length);