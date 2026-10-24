package Classes;

public class Pessoa {

    // Atributos da classe: definem as características privadas encapsuladas de uma pessoa.
    private String nome;
    private int idade;
    private float altura;

    // Método Construtor: executado automaticamente ao instanciar objeto com 'new', permite inicializar os atributos diretamente.
    // <Identificador/Tipo de Acesso> <nomeDaClasse>(atributos da classe)
    public Pessoa(String nome, int idade, float altura) {
        System.out.println("Veja esse Monster : "); // Mensagem executada na criação do objeto.
        this.nome = nome;     // Usa o 'this' para diferenciar o atributo da classe do parâmetro recebido.
        this.altura = altura; // Atribui a altura recebida ao atributo correspondente.
        this.idade = idade;   // Atribui a idade recebida ao atributo correspondente.
    }

    // Método específico: exibe no console de forma formatada os dados atuais da pessoa.
    public void imprimirDados() {
        System.out.println("Nome: "
                + nome + " | Idade: "
                + idade + " | Altura: "
                + altura
        );
    }

    // Métodos Getters e Setters: garantem o acesso controlado e a modificação segura dos atributos privados.

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public float getAltura() {
        return altura;
    }

    public void setAltura(float altura) {
        this.altura = altura;
    }

    public int getIdade() {
        return idade;
    }

    public void setIdade(int idade) {
        this.idade = idade;
    }
}
