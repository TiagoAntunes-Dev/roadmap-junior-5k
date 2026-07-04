// Type Aliases in TypeScript allow you to create custom names for types, making your code more readable and maintainable. They can be used for primitive types, union types, tuples, and even complex object types.

// Apelidando tipos primitivos e criando regras estritas de texto
type PecaXadrez = "Peão" | "Torre" | "Cavalo" | "Bispo" | "Rainha" | "Rei";

// Apelidando uma Tupla (um array com posições rígidas)
type Coordenada = [string, number]; // Ex: ['E', 4]

// Usando os "apelidos" para criar um tipo mais complexo
type Movimento = {
    peca: PecaXadrez; // Tipo de peça definido pelo alias PecaXadrez
    destino: Coordenada; // Coordenada definida pelo alias Coordenada
};

// Aplicando na prática:
const jogada: Movimento = {
    peca: "Cavalo", // Tipo de peça definido pelo alias PecaXadrez
    destino: ["F", 3] // Coordenada definida pelo alias Coordenada
};

// Exemplo de função que recebe o tipo Movimento
function realizarMovimento(movimento: Movimento): void {
    console.log(`Movendo a peça ${movimento.peca} para a posição ${movimento.destino[0]}${movimento.destino[1]}`);
}

// Chamando a função com o objeto jogada
realizarMovimento(jogada); // Saída: Movendo a peça Cavalo para a posição F3



