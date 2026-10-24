package Games;

public class Testando_Jogos {
    public static void main(String[] args) {
        // Instancia o console físico
        Console xDevOne = new Console();

        // Instancia uma classe concreta (PingPong) que assina a interface Jogo
        PingPong pingPong = new PingPong();

        xDevOne.ligar();

        // Passamos um objeto do tipo 'PingPong' para um método que espera um tipo 'Jogo' (Interface).
        // É a prova prática de como a interface desacopla o código e traz flexibilidade.
        xDevOne.jogar(pingPong);

        xDevOne.fechar();
    }
}
