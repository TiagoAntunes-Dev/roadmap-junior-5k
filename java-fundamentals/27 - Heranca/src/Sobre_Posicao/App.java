package Sobre_Posicao;

public class App {

    static void main(String[] args) {
        /*
            Classe Object + toString + implícito e explícito
            Sobrescrita de Métodos ( Exemplos )
            Método Super
            Modificadores de Acesso
         */

        // Instancia o objeto da série passando os dados no construtor
        Serie ont = new Serie("One Tree Hill", 9, 2003);

        // Chama o método que imprime os dados internamente via printf
        ont.pegarInfo();

        // Chamada EXPLÍCITA do toString(): Exibe o texto retornado pelo método que criamos na classe Serie
        System.out.println(ont.toString());

        // Dica de Ouro: Você também poderia fazer apenas 'System.out.println(ont);'
        // porque o Java chama o toString() de forma IMPLÍCITA automaticamente por baixo dos panos!
    }
}
