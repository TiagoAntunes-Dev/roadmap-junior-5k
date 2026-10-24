package Classes;

// A classe 'Circulo' utiliza a palavra-chave 'implements' para assinar o contrato
// da interface 'Figura_Geometrica'. Ao fazer isso, o Java exige que ela tenha o método 'calcularArea'.
public class Circulo implements Figura_Geometrica {

    // Atributo privado que guarda o raio do círculo (conforme citado na aula, min 00:35).
    private int raio;

    // Construtor da classe: usado para inicializar o objeto exigindo o valor do raio na criação (min 03:40).
    public Circulo(int raio) {
        this.raio = raio; // Atribui o parâmetro recebido ao atributo da classe
    }

    // A anotação @Override indica que estamos implementando o método exigido pela interface.
    @Override
    public double calcularArea() {
        // Usa a classe matemática do Java (Math.pow) para calcular o raio ao quadrado e retorna o valor (min 01:18).
        return Math.pow(raio, 2);
    }

    // Método Getter: permite ler o valor do raio de fora da classe.
    public int getRaio() {
        return raio;
    }

    // Método Setter: permite alterar o valor do raio após o objeto criado.
    public void setRaio(int raio) {
        this.raio = raio;
    }
}
