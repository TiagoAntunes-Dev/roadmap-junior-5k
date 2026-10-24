package Animais; // Define que esta classe pertence ao pacote 'Animais'

public class Animal {
    // Atributo privado 'nome': Armazena o nome do animal de forma encapsulada (segura)
    private String nome;

    // Construtor da classe Animal: Exige que todo animal criado possua obrigatoriamente um nome
    public Animal(String nome){
        this.nome = nome; // 'this.nome' refere-se ao atributo da classe, recebendo o parâmetro 'nome'
    }

    // Método genérico 'comer': Disponível para qualquer animal que herde desta classe
    public void comer() {
        // Imprime formatado usando o nome do animal e quebra linha (\n)
        System.out.printf("%s Comeu\n", nome);
    }

    // Método genérico 'beber': Compartilhado com todas as subclasses
    public void beber() {
        System.out.printf("%s Bebeu\n", nome);
    }

    // Método Getter: Permite ler o valor do atributo privado 'nome' de fora da classe
    public String getNome() {
        return nome;
    }

    // Método Setter: Permite alterar o valor do atributo 'nome' após a criação do objeto
    public void setNome(String nome) {
        this.nome = nome;
    }
}
