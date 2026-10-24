package Classes;

// A classe 'Quadrado' também assina o mesmo contrato da interface 'Figura_Geometrica'.
// Isso garante o padrão visualizado na aula: diferentes formas geométricas, mas com regras padronizadas (min 07:50).
public class Quadrado implements Figura_Geometrica {

    // Atributo privado que armazena a medida do lado do quadrado.
    private int lado;

    // Construtor para inicializar o quadrado exigindo o valor do lado.
    public Quadrado (int lado) {
        this.lado = lado; // Salva o lado informado no atributo da classe
    }

    // Implementação obrigatória exigida pelo contrato da interface 'Figura_Geometrica'.
    @Override
    public double calcularArea() {
        // Calcula a área multiplicando o lado por ele mesmo (lado elevado a 2) (min 06:06).
        return Math.pow(lado, 2);
    }

    // Método Getter para recuperar o valor do lado.
    public int getLado() {
        return lado;
    }

    // Método Setter para modificar o valor do lado.
    public void setLado(int lado) {
        this.lado = lado;
    }
}
