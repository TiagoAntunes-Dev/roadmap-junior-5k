package Games;

// A classe PingPong usa a palavra-chave "implements" para assinar o contrato da interface Jogo.
public class PingPong implements Jogo {

    // A anotação @Override indica que estamos implementando/sobrescrevendo um método que veio da interface.
    @Override
    public void jogar() {
        // Exibe o nome específico do jogo conforme solicitado
        System.out.println("Jogando o Jogo: Ping Pong");
        System.out.println("Cutscene Inicial ");
        System.out.println("Mostrando Menu Inicial");
        System.out.println("Enquanto Toca Musica de Fundo!");
    }

    // Sobrescreve obrigatoriamente o segundo método exigido pela interface Jogo
    @Override
    public void fechar() {
        // Exibe o nome específico do jogo ao fechar
        System.out.println("Fechando o Jogo: Ping Pong");
        System.out.println("Salvando Seu Progresso...");
        System.out.println("Console Desligado");
    }
}
