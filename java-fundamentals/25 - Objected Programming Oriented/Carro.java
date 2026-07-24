package MyFirstProject;

// 1. A CLASSE (O Molde):
// Define o que é um Carro. Não é um carro físico ainda, apenas a "planta baixa".
public class Carro {
    
    // 2. ATRIBUTO (Estado):
    // Esta variável pertence à classe. Cada objeto instanciado terá a sua própria cópia dela.
    String model;

    public static void main(String[] args) {
        System.out.println("Testando novos Classes e Objetos");
    }

    // 3. CONSTRUTOR:
    // O construtor SEMPRE tem o mesmo nome da Classe e não tem retorno (nem 'void').
    // Ele é chamado automaticamente na hora do 'new'.
    public Carro(String model){
        // O 'this' amarra a variável que chegou pelo parênteses ao atributo oficial do objeto.
        this.model = model;
    }

    // 4. MÉTODO (Comportamento):
    // O que o nosso objeto sabe fazer.
    public void accelerate(){
        System.out.println("Acelerando o Carro" + " " + this.model);
    }
}

// 5. CLASSE AUXILIAR (No mesmo arquivo):
// O Java permite, mas não é uma boa prática manter duas classes no mesmo arquivo.
// O ideal seria criar um arquivo isolado chamado 'rodas.java'.
class rodas {
    public rodas(){
        // Instanciando um Carro por dentro de outra classe
        Carro carro = new Carro("DeLorean");
        carro.accelerate();
    }
}


