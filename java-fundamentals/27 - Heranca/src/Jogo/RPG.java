package Jogo;

public class RPG {
    static void main(String[] args) {
        // Instancia um objeto do tipo Arqueiro utilizando herança e polimorfismo de construtor
        Arqueiro legolas = new Arqueiro("Legolas");

        // Utiliza o método toString() de forma implícita dentro do println para exibir os dados
        System.out.println(legolas);

        // Executa os métodos de ataque herdados e sobrescritos
        legolas.atacar();       // Método herdado da classe Personagem
        legolas.atacarComArma(); // Método implementado na classe Arqueiro
    }
}