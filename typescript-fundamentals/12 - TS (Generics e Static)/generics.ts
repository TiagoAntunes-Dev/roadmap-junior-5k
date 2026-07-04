// Classe usando Generic (<T>)
// O <T> representa um tipo que será definido quando o objeto for criado.
class Box<T> {
    // A caixa guarda um valor do tipo T
    value: T;

    constructor(value: T) {
        this.value = value;
    }

    // Retorna o valor armazenado
    getValue(): T {
        return this.value;
    }
}

// Criando uma caixa que guarda um número
const numberBox = new Box<number>(10);
console.log(numberBox.getValue()); // 10

// Criando uma caixa que guarda uma string
const stringBox = new Box<string>("Tiago");
console.log(stringBox.getValue()); // Tiago

// Criando uma caixa que guarda um boolean
const booleanBox = new Box<boolean>(true);
console.log(booleanBox.getValue()); // true