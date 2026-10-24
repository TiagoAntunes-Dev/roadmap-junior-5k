package Animais;

// 'Pombo' também herda da classe intermediária 'Voador'
public class Pombo extends Voador {
    // Atributo privado exclusivo do pombo para controlar cartas enviadas
    private int cartasEnviadas;

    // Construtor que inicializa o nome (via 'super') e define um valor inicial fixo de 10 cartas
    public Pombo(String nome) {
        super(nome);
        cartasEnviadas = 10; // Valor inicial padrão
    }

    // Método exclusivo de barulho do pombo
    public void fazerPru() {
        System.out.printf("%s Fez Barulho\n", getNome());
    }

    // Método de ação que altera o estado interno do objeto
    public void enviarCarta() {
        // Incrementa em 1 o contador de cartas enviadas a cada chamada (equivalente a cartasEnviadas = cartasEnviadas + 1)
        this.cartasEnviadas++;
        System.out.printf("%s Enviou uma Carta\n", getNome());
    }

    // Método Getter para consultar o número de cartas enviadas sem permitir modificações externas diretas (protegendo a regra de negócio)
    public int getCartasEnviadas() {
        return cartasEnviadas;
    }
}
