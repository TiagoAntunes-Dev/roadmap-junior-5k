package Classes;

public class Personagem {

    // Atributos da classe: definem as características principais de um personagem.
    private String nome;
    private String classe;
    private int nivel;
    private int vida;
    private int forca;

    // Método Construtor: executado automaticamente ao instanciar um Personagem, recebendo o nome e a classe, e inicializando o nível, vida e força.
    public Personagem(String nome, String classe) {
        this.nome = nome;
        this.classe = classe;
        this.nivel = 10; // Todos os personagens começam no nível 10 por padrão.
        this.vida = 50000; // Define a vida inicial fixa baseada no transcript.

        // Define a força inicial de acordo com a classe do personagem.
        if (classe.equals("Guerreiro")) {
            this.forca = this.nivel * 2;
        } else {
            this.forca = this.nivel;
        }
    }

    // Método específico: exibe no console os status formatados do personagem.
    public void mostrarStatus() {
        System.out.printf("Nome: %s\nNível: %d\nVida: %d\nClasse: %s\nForça: %d\n",
                nome, nivel, vida, classe, forca);
    }

    // Métodos Getters e Setters para acesso controlado aos atributos privados.
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

    public int getVida() {
        return vida;
    }

    public void setVida(int vida) {
        this.vida = vida;
    }

    public int getForca() {
        return forca;
    }

    public void setForca(int forca) {
        this.forca = forca;
    }
}