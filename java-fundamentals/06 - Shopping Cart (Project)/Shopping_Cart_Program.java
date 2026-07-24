import java.util.Scanner;

public class Shopping_Cart_Program {
    public static void main(String[] args) {
        // Shopping Cart Program

        // 1. PREPARAÇÃO
        Scanner scanner = new Scanner(System.in);

        // 2. DECLARAÇÃO DE VARIÁVEIS (Novos Tipos Primitivos)
        String item;
        
        // 'double' é utilizado para números de ponto flutuante (que possuem casas decimais).
        // É o tipo padrão no Java para lidar com valores como preços, medidas, etc.
        double price; 
        
        int quantity;
        
        // 'char' serve para armazenar um ÚNICO caractere. 
        // Regra de sintaxe: em Java, 'char' obriga o uso de aspas simples ('$').
        // Aspas duplas ("$") transformariam isso em uma 'String'.
        char currency = '$'; 
        
        double total;

        // 3. CAPTURA DE DADOS
        System.out.print("What item would you like to buy?:");
        item = scanner.nextLine();

        System.out.print("What is the price for each?:");
        // O método muda para .nextDouble() para corresponder ao tipo da variável.
        // Dica: dependendo da linguagem configurada no seu Sistema Operacional, 
        // o terminal pode exigir que você digite vírgula (ex: 2,50) em vez de ponto.
        price = scanner.nextDouble();

        System.out.print("How many would you like?:");
        quantity = scanner.nextInt();

        // 4. PROCESSAMENTO (Operação Aritmética)
        // Aqui temos uma multiplicação entre um 'double' (price) e um 'int' (quantity).
        // Quando você mistura esses dois, o Java promove o resultado para o tipo mais "abrangente", 
        // que no caso é o 'double'. Por isso a variável 'total' precisa ser double.
        total = price * quantity;

        // 5. SAÍDA DE DADOS
        // O "\n" logo no início da String força o terminal a pular uma linha antes de imprimir a frase,
        // dando um "respiro" visual em relação às perguntas feitas acima.
        System.out.println("\nYou have bought " + quantity + " " + item + "/s" );
        System.out.println("Your Total is " + currency + total);

        // 6. LIBERAÇÃO DE RECURSOS
        scanner.close();
    }
}
