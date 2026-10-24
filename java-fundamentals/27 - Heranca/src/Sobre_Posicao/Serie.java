package Sobre_Posicao;

public class Serie {
    //Atributos
    private String nome;
    private int temporadas;
    private int ano;

    public Serie(String nome, int temporadas, int ano) {
        this.nome = nome;
        this.temporadas = temporadas;
        this.ano = ano;
    }

    // Metodos Especificos
    public void pegarInfo() {
        System.out.printf(" Nome:        %s\n", nome);
        System.out.printf(" Temporadas:  %d\n", temporadas);
        System.out.printf(" Ano:         %d\n", ano);
    }

    // Sobrescrita (@Override) do método toString() herdado da classe Object do Java.
    // Ele deve retornar uma única String estruturada com todas as informações.
    @Override
    public String toString() {
        // String.format monta o texto completo combinando os valores das variáveis e quebras de linha (\n)
        return String.format(" Nome:        %s\n Temporadas:  %d\n Ano:         %d", nome, temporadas, ano);
    }

    // Metodos Getter and Setter
    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public int getAno() {
        return ano;
    }

    public void setAno(int ano) {
        this.ano = ano;
    }

    public int getTemporadas() {
        return temporadas;
    }

    public void setTemporadas(int temporadas) {
        this.temporadas = temporadas;
    }
}
