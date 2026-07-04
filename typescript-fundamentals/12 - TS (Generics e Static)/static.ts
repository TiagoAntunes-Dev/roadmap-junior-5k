class Calculator {
    // Propriedade static: pertence à classe, não aos objetos
    static pi: number = 3.14159;

    // Método static: pode ser chamado sem criar um objeto
    static sum(x: number, y: number): number {
        return x + y;
    }
}

// Não é necessário criar um objeto da classe
// const calc = new Calculator(); ❌

// Acessando a propriedade static
console.log(Calculator.pi); // 3.14159

// Chamando o método static
console.log(Calculator.sum(10, 5)); // 15

// calc.add(10, 5); // Erro: add não existe na instância.