package Classes;

public class Pessoa {
    // Atributos privados (private) para proteger os dados internos da classe Pessoa contra alterações diretas externas.
    private String nome = "Tiago";
    private int idade;
    private double altura;

    // Getter (ou accessor): responsável por recuperar e retornar o valor armazenado no atributo 'nome'.
    public String pegarNome(){
        return nome;
    }

    // Setter (ou mutator): responsável por alterar o valor do atributo 'nome'. Utiliza o 'this' para diferenciar o atributo da classe do parâmetro recebido.
    public void alterarNome(String nome) {
        this.nome = nome;
    }

    // Getter: responsável por retornar o valor do atributo 'idade'.
    public int pegarIdade() {
        return idade;
    }

    // Setter: responsável por atualizar o valor do atributo 'idade' usando a referência 'this'.
    public void alterarIdade(int idade) {
        this.idade = idade;
    }

    // Getter: responsável por retornar o valor do atributo 'altura'.
    public double pegarAltura() {
        return altura;
    }

    // Setter: responsável por atualizar o valor do atributo 'altura' utilizando o 'this'.
    public void alterarAltura(double altura) {
        this.altura = altura;
    }
}
