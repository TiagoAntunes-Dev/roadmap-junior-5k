package Jogo;

// A classe 'Arqueiro' herda de 'Personagem' usando a palavra-chave 'extends'
public class Arqueiro extends Personagem {
    // Atributo exclusivo da classe Arqueiro
    private String arma;

    // Construtor do Arqueiro: recebe o nome, repassa para a superclasse via 'super(nome)'
    public Arqueiro(String nome) {
        super(nome); // Chama o construtor da classe Pai (Personagem)

        // Define características exclusivas do Arqueiro logo na criação
        setClasse("Arqueiro"); // Altera a classe padrão para "Arqueiro"
        this.arma = "Arco Longo"; // Define a arma inicial padrão
    }

    // Implementação obrigatória do método abstrato herdado da superclasse
    @Override
    public void atacarComArma() {
        System.out.printf("%s atacou com a arma: %s\n", getNome(), arma);
    }

    // Sobrescrita do toString() utilizando o método da superclasse (super.toString()) para reaproveitar código
    @Override
    public String toString() {
        // Reaproveita o texto base da classe Personagem e adiciona a informação da arma exclusiva
        return String.format("%s | Arma: %s", super.toString(), arma);
    }

    // Getter e Setter específicos para a arma do arqueiro
    public String getArma() {
        return arma;
    }

    public void setArma(String arma) {
        this.arma = arma;
    }
}
