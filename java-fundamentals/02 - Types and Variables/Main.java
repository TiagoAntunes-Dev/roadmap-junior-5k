// 1. A CLASSE: Em Java, nenhum código vive "solto". 
// Tudo precisa estar dentro de uma Classe (Class).
public class Main {

    // 2. O PONTO DE PARTIDA: O Java sempre procura por esse método exato para iniciar o programa.
    // Se você não tiver um 'public static void main', o código não executa.
    public static void main (String[] args) {

        // 3. VARIÁVEIS (Adicionadas para exemplo):
        // Sintaxe: TipoDaVariavel nomeDaVariavel = valor;
        String pedido = "Pizza";  // Variável do tipo String (Texto)
        int quantidade = 2;       // Variável do tipo int (Número Inteiro)

        // 4. SAÍDA DE DADOS: O comando pede para o Sistema (System), 
        // acessar a saída padrão (out) e imprimir uma linha (println).
        // É o equivalente direto ao console.log().
        
        // Aqui estamos juntando (concatenando) o texto com as variáveis que criamos usando o sinal de '+'
        System.out.println("I Like " + pedido + "!");
        System.out.println("It's really good! I want " + quantidade + " of them.");
        System.out.println("Buy me " + pedido + "!");

        // Exercise Type 3  Unique Statements

        // O \n é um "caractere de escape". Ele não é impresso na tela, 
        // ele apenas avisa o terminal: "quebre a linha aqui".
        System.out.println("I never thought\n" +
                "I'd drown in my shallow heart");

        System.out.println("I'd like to say\n" +
                "The things I never used to");

        System.out.println("I never meant to hurt you\n" +
                "It's just something I do");
    }
}
