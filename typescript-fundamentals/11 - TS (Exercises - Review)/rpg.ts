// ==========================================
// O CONTRATO (A Interface)
// ==========================================
// Todo personagem do jogo obrigatoriamente precisa ter esses elementos.
interface Personagem {
    nome: string;
    vida: number;
    atacar(): void;
}


// ==========================================
// OS MOLDES (As Classes)
// ==========================================

class Guerreiro implements Personagem {
    public nome: string;
    private _vida: number;

    constructor(nome: string, vida: number) {
        this.nome = nome;
        this._vida = vida;
    }

    // O "Get" funciona como uma vitrine: ele mostra a variável privada 
    // com o nome público que a Interface exige.
    get vida(): number {
        return this._vida;
    }

    atacar() {
        console.log(`O guerreiro ${this.nome} atacou com a espada!`);
    }
}


class Mago implements Personagem {
    public nome: string;
    private _vida: number;
    public magia: string; // Atributo exclusivo desta classe (Além do contrato)

    constructor(nome: string, vida: number, magia: string) {
        this.nome = nome;
        this._vida = vida;
        this.magia = magia;
    }

    get vida(): number {
        return this._vida;
    }

    atacar() {
        console.log(`O mago ${this.nome} atacou com sua varinha com um ataque de ${this.magia}!`);
    }
}


// ==========================================
// O JOGO RODANDO (Instâncias e Execução)
// ==========================================

// 1. Criando o Guerreiro
const guerreiro = new Guerreiro("Kylian", 10);
guerreiro.atacar();
console.log(guerreiro.vida); // Lendo a vida através do "get"

// 2. Criando o Mago
const mago = new Mago("Mestre dos Magos", 20, "Lighting Explosion");
mago.atacar();
console.log(mago.vida);
