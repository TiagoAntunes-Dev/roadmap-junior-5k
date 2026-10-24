package Jogo;

// Definimos a classe como 'abstract' seguindo a lógica da aula,
// o que significa que ela serve como modelo base e não pode ser instanciada diretamente com 'new'.
public abstract class Personagem {
    // Atributos encapsulados para garantir a segurança dos dados
    private String nome;
    private String classe;
    private int nivel;

    // Construtor padrão da superclasse: exige o nome e define valores iniciais padrão
    public Personagem(String nome) {
        this.nome = nome;
        this.classe = "nenhuma"; // Classe inicial padrão
        this.nivel = 1;          // Todo personagem começa no nível 1
    }

    // Método comum de ataque que poderá ser herdado ou sobrescrito pelas subclasses
    public void atacar() {
        System.out.println("O personagem atacou");
    }

    // Método abstrato: obriga todas as subclasses concretas a implementarem sua própria forma de atacar com arma
    public abstract void atacarComArma();

    // Métodos Getters e Setters para permitir o acesso controlado aos atributos privados
    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getClasse() {
        return classe;
    }

    public void setClasse(String classe) {
        this.classe = classe;
    }

    public int getNivel() {
        return nivel;
    }

    public void setNivel(int nivel) {
        this.nivel = nivel;
    }

    // Sobrescrita do método toString() para exibir as informações formatadas do personagem
    @Override
    public String toString() {
        return String.format("%s (Nível: %d) - Classe: %s", nome, nivel, classe);
    }
}
