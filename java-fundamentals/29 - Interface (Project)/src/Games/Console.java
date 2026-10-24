package Games;

public class Console {

    // A mágica da interface acontece aqui: criamos um atributo do tipo da INTERFACE (Jogo),
    // e não de uma classe concreta. Isso permite guardar QUALQUER jogo (PingPong, Xadrez, etc.).
    private Jogo jogo;
    private boolean estaLigado = true;

    public void ligar() {
        System.out.println("Ligando o PS5");
        this.estaLigado = true;
    }

    // O parâmetro deste método aceita a Interface 'Jogo'.
    // Graças a isso, podemos passar qualquer objeto que implemente a interface Jogo.
    public void jogar(Jogo jogo) {
        if (estaLigado) {
            System.out.println("Iniciando o console...");

            // Armazena o jogo recebido na variável do tipo interface
            this.jogo = jogo;

            // Chama o método 'jogar' polimorficamente. O Java executa a versão
            // específica do jogo que foi passado (PingPong ou Xadrez).
            jogo.jogar();
        } else {
            System.out.println("Console esta Ruim");
        }
    }

    public void fechar() {
        System.out.println("Tentando fechar o jogo...");

        // Verifica se a variável do tipo interface possui um objeto alocado (não nulo)
        boolean temJogoRodando = jogo != null;

        if (temJogoRodando) {
            // Dispara o método 'fechar' da interface, executando o comportamento
            // específico do jogo que está ativo no momento.
            jogo.fechar();

            // Limpa a referência da interface, indicando que não há jogo rodando
            this.jogo = null;
        } else {
            System.out.println("Não tem nenhum jogo rodando!");
        }
    }
}
