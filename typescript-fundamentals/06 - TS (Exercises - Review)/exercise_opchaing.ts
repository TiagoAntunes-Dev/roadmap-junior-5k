// Lembra do erro Object is possibly 'undefined'? Mostre que você aprendeu a usar a rota de fuga elegante do TypeScript.

// Código base:

let catalogo: string[] = []; // O array começa vazio!

// Sua missão:

// Tente descobrir o tamanho (.length) da primeira string (índice 0) do catálogo.

// Sua Missão: Tente acessar o .length do catalogo[0]. O compilador vai te barrar porque o catálogo está vazio. 
// console.log(catalogo[0].length)

console.log(catalogo[0]?.length)
 
// Aplique o operador de Encadeamento Opcional (?) para que o código rode suavemente, retornando undefined no terminal em vez de dar erro de compilação.