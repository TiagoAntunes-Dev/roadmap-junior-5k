package Animais;

// A classe 'Voador' herda de 'Animal' usando a palavra-chave 'extends'.
// Ela serve como uma classe intermediária para agrupar animais que possuem a capacidade de voar.
public class Voador extends Animal{

    // Construtor da classe Voador: Repassa obrigatoriamente o nome recebido para o construtor da classe pai (Animal) usando 'super(nome)'
    public Voador(String nome) {
        super(nome);
    }

    // Método específico 'voar': Disponível para todas as classes que herdarem de Voador (como Dragão e Pombo)
    public void voar () {
        System.out.printf("%s Voou\n", getNome());
    }
}
