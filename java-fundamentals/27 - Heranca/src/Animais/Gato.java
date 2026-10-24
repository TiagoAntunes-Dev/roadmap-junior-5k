package Animais;

// 'Gato' herda diretamente as características e métodos genéricos de 'Animal'
public class Gato extends Animal{

    // Construtor padrão da subclasse Gato repassando o nome para a classe mãe
    public Gato(String nome){
        super(nome);
    }

    // Método exclusivo da classe Gato: miar
    public void miar(){
        // Recupera o nome de forma segura utilizando o 'getNome()' herdado
        System.out.printf("%s Miou\n", getNome());
    }
}
