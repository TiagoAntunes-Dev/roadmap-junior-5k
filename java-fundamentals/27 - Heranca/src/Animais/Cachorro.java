package Animais;

// 'Cachorro' herda diretamente de 'Animal' ('extends Animal')
public class Cachorro extends Animal {

    // Construtor do Cachorro: Exige o nome e o repassa para a superclasse via 'super(nome)'
    public Cachorro(String nome){
        super(nome);
    }

    // Método exclusivo do cachorro: latir
    public void latir(){
        // Utiliza o método 'getNome()' herdado da classe Animal para recuperar o nome encapsulado
        System.out.printf("%s latiu\n", getNome());
    }

    // Método exclusivo do cachorro: lamber
    public void lamber(){
        System.out.printf("%s lambeu\n", getNome());
    }
}