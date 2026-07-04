// Type Guards 
 
// A Lógica: Provar para o compilador (usando um if e checagens do JavaScript) qual é o tipo exato de um dado naquele momento específico para liberar as funções certas.

function processarEntrada(idOuNome: string | number) {
    // Type Guard: Aqui em cima, o TS não sabe se é string ou número.
    
    if (typeof idOuNome === "string") {
        // Guarda ativada! Aqui dentro, o TS tem 100% de certeza que é texto.
        // Ele libera o método .toUpperCase() automaticamente.
        console.log("Buscando pelo nome: " + idOuNome.toUpperCase());
    } else {
        // Se não é string, pelo nosso tipo, SÓ PODE ser número.
        // Ele libera métodos de matemática.
        console.log("Buscando pelo ID numérico: " + idOuNome.toFixed(2));
    }
}

// Chamando a função com diferentes tipos
processarEntrada("Alice");
processarEntrada(42);

// Outro exemplo de Type Guard com instanceof

// Classe base
class Animal {
    nome: string;
    constructor(nome: string) {
        this.nome = nome;
    }
}

// Subclasse de Animal
class Cachorro extends Animal {
    latir() {
        console.log("Au Au!");
    }
}

// Função que usa Type Guard para determinar se o animal é um Cachorro
function fazerAnimalFalar(animal: Animal) {
    if (animal instanceof Cachorro) {
        // Type Guard: Aqui o TS sabe que animal é do tipo Cachorro.
        animal.latir();
    } else {
        // Se não é um Cachorro, então é apenas um Animal genérico.
        console.log(animal.nome + " não é um cachorro.");
    }
}

// Criando instâncias
const meuCachorro = new Cachorro("Rex");
const meuGato = new Animal("Miau");

// Chamando a função com diferentes tipos
fazerAnimalFalar(meuCachorro); // Deve latir
fazerAnimalFalar(meuGato); // Deve informar que não é um cachorro


// Mostrando com o Switch case também é possível fazer Type Guards

function processarEntradaSwitch(idOuNome: string | number) {
    switch (typeof idOuNome) {
        case "string":
            console.log("Buscando pelo nome: " + idOuNome.toUpperCase());
            break;
        case "number":
            console.log("Buscando pelo ID numérico: " + idOuNome.toFixed(2));
            break;
        default:
            console.log("Tipo desconhecido");
    }
}

// Chamando a função com diferentes tipos
processarEntradaSwitch("Bob");
processarEntradaSwitch(100);