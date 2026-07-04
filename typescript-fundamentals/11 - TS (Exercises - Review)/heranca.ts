// ==========================================
// 1. A CLASSE MÃE (O Molde Genérico)
// ==========================================
// Esta classe dita a regra básica: TODO produto no sistema,
// não importa o tipo, precisa ter pelo menos um nome e um preço.
class Produto {
    nome: string;
    preco: number;

    // A "porta de entrada" da classe Mãe. 
    // É aqui que os dados básicos são recebidos e fixados na memória.
    constructor(nome: string, preco: number) {
        this.nome = nome;
        this.preco = preco;
    }

    // Um método comum. Como está na classe Mãe, TODOS os produtos 
    // que herdarem dela poderão usar essa função automaticamente.
    exibirResumo() {
        console.log(`Produto ${this.nome} está custando ${this.preco}`);
    }
}


// ==========================================
// 2. A CLASSE FILHA (A Especialização)
// ==========================================
// Usamos o 'extends' para herdar. O ProdutoFisico ganha instantaneamente
// o 'nome', o 'preco' e a função 'exibirResumo' da classe Produto.
class ProdutoFisico extends Produto {
    // Esta é uma variável exclusiva. Produtos digitais não teriam isso.
    peso: number;

    // A "porta de entrada" da classe Filha.
    // Ela precisa receber tudo: os dados básicos e os dados específicos.
    constructor(nome: string, preco: number, peso: number) {
        // 1. O Telefone Interno: Acionamos o construtor da classe Mãe com o super()
        // e entregamos a ela a responsabilidade de guardar o nome e o preço.
        super(nome, preco);
        
        // 2. Com a base construída, a classe Filha agora guarda o dado 
        // que é exclusivo dela.
        this.peso = peso;
    }
    
    // Método exclusivo da classe Filha.
    // Note que podemos usar 'this.nome' tranquilamente, porque 
    // nós herdamos essa variável da classe Mãe!
    calcularFrete() {
        console.log(`Calculando frete para o produto ${this.nome} considerando o peso de ${this.peso}kg.`);
    }
}

// ==========================================
// EXEMPLO DE USO (Você pode testar no terminal)
// ==========================================
// const teclado = new ProdutoFisico("Teclado Mecânico", 250, 1.2);
// teclado.exibirResumo(); // Veio da classe Mãe!
// teclado.calcularFrete(); // Veio da classe Filha!