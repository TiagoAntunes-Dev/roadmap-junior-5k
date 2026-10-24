package Animais;

// 'Dragon' herda de 'Voador'. Isso demonstra a hierarquia de múltiplos níveis (Animal -> Voador -> Dragon)
public class Dragon extends Voador {

    // Construtor que repassa o nome para a superclasse ('Voador', que repassa para 'Animal')
    public Dragon(String nome) {
        super(nome);
    }

    // Método exclusivo do Dragão: soltar fogo
    public void soltarFogo(){
        System.out.printf("%s | Ataque: Luz Branca\n", getNome());
    }
}
