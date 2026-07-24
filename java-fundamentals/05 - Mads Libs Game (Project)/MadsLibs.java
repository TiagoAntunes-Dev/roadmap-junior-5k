import java.util.Scanner;

public class MadsLibs {
   public static void main(String[] args) {
        // Mads Libs Game

        // 1. INSTANCIAÇÃO:
        // Prepara o objeto Scanner para "escutar" as entradas do teclado (System.in).
        Scanner scanner = new Scanner(System.in);

        // 2. DECLARAÇÃO DE VARIÁVEIS:
        // Aqui o Java reserva o espaço na memória, mas ainda não guarda nada dentro.
        // É uma ótima prática agrupar essas declarações no topo para organizar 
        // quais dados o seu programa vai precisar manipular ao longo da execução.
        String adjective1;
        String noun1;
        String adjective2;
        String verb1;
        String adjective3;

        // 3. ENTRADA E ATRIBUIÇÃO DE DADOS:
        // O '.print' exibe a mensagem sem quebrar a linha. 
        // O '.nextLine()' pausa o código, espera a digitação e o 'Enter', 
        // e atribui esse texto na variável correspondente.
        System.out.print("Enter an Adjective (Description): ");
        adjective1 = scanner.nextLine();
        
        System.out.print("Enter a Noun (Animal or Person): ");
        noun1 = scanner.nextLine();
        
        System.out.print("Enter an Adjective (Description): ");
        adjective2 = scanner.nextLine();
        
        System.out.print("Enter a Verb end with -ing (Action): ");
        verb1 = scanner.nextLine();
        
        System.out.print("Enter an Adjective (Description): ");
        adjective3 = scanner.nextLine();

        // 4. SAÍDA DE DADOS (MONTAGEM DO JOGO):
        // Um 'println' com texto vazio é um truque simples para forçar 
        // uma quebra de linha em branco e deixar o terminal mais limpo de ler.
        System.out.println("");
        
        // Aqui ocorre a CONCATENAÇÃO, juntando os textos fixos com as 
        // palavras aleatórias que o usuário digitou e ficaram salvas na memória.
        System.out.println("Today i went to a " + adjective1 + " zoo.");
        System.out.println("In a exhibit, I saw a " + noun1 + ".");
        System.out.println(noun1 + " was " + adjective2 + " and " + verb1 + "!");
        System.out.println("I was " + adjective3 + "!");

        // 5. GERENCIAMENTO DE RECURSOS:
        // Exatamente como você anotou! Fechar o Scanner devolve o recurso 
        // ao sistema operacional e evita vazamentos de memória (memory leaks).
        scanner.close();

    }
}
