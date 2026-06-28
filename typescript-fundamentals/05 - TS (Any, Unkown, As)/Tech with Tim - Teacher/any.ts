// O tipo any desliga a verificação de tipos do TypeScript para aquela variável.

// O compilador simplesmente assume que você sabe o que está fazendo e permite qualquer operação.

let value: any = "Hello";

// O TypeScript permite tudo.
console.log(value.length);
console.log(value.toUpperCase());

value = 10;
console.log(value + 5);

value = true;
console.log(value);

// Problema

// Como o TS não verifica nada, erros só aparecem quando o programa está rodando.

let value: any = 10;

// O TypeScript não reclama...
console.log(value.toUpperCase());

// Mas o programa vai quebrar em tempo de execução, porque o valor é um número e não uma string.


//TypeError: value.toUpperCase is not a function