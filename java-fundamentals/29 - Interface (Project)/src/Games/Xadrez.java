package Games;

// A classe Xadrez também assina o contrato da interface Jogo de forma independente.
public class Xadrez implements Jogo {

    // Implementa o método obrigatório 'jogar' exigido pela interface Jogo
    @Override
    public void jogar() {
        // Exibe o nome específico do jogo de xadrez
        System.out.println("Jogando o Jogo: Xadrez");
        System.out.println("Exibindo Menu");
        System.out.println("Qual seu Jogador Preferido?");
    }

    // Implementa o método obrigatório 'fechar' exigido pela interface Jogo
    @Override
    public void fechar() {
        // Exibe o nome específico do jogo ao fechar
        System.out.println("Fechando o Jogo: Xadrez");
        System.out.println("Fecha o Jogo");
        System.out.println("Console foi de Check-Mate!");
    }
}
