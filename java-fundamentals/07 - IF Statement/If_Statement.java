import java.util.Scanner;

public class If_Statement {
   public static void main(String[] args) {
        // If Statement = Performs a block of code if its condition is true
        Scanner scanner = new Scanner(System.in);

        // 1. NOVO TIPO PRIMITIVO:
        // O 'boolean' só aceita dois valores absolutos: true (verdadeiro) ou false (falso).
        // Ele é a base matemática de qualquer estrutura de decisão (if/else).
        String name;
        int age;
        boolean isStudent;

        System.out.print("What's your name?: ");
        name = scanner.nextLine();

        System.out.print("Enter your age: ");
        age = scanner.nextInt();

        System.out.print("Are you a Student (true/false): ");
        // O .nextBoolean() espera estritamente que o usuário digite a palavra "true" ou "false".
        isStudent = scanner.nextBoolean();

        System.out.println();

        // 2. MÉTODOS EM OBJETOS (Group 1):
        // Como 'String' é uma classe no Java (e não um primitivo puro como o 'int'), 
        // ela possui métodos embutidos. 
        // O .isEmpty() verifica se a string não tem nenhum caractere e devolve um 'true' ou 'false'.
        if (name.isEmpty()){
            System.out.println("You didn't enter your name!");
        } else {
            System.out.println("Hello " + name + "!");
        }

        // 3. CASCATA DE CONDIÇÕES (Group 2):
        // A regra de ouro do 'if / else if' é a leitura DE CIMA PARA BAIXO.
        // O Java avalia a primeira condição. Se for verdadeira, ele executa o bloco e PULA todo o resto.
        // Se for falsa, ele desce para avaliar o próximo 'else if'.
        if (age >= 65){
            System.out.println("You are a Senior!");
        }
        else if (age >= 18){ // O código só chega aqui se a idade for menor que 65.
            System.out.println("You are an Adult!");
        } else if (age < 0) { 
            // Tratamento de erro lógico: pegando o cenário impossível de idade negativa.
            System.out.println("You haven't been born yet!");
        } else if (age == 0) {
            // Nota de sintaxe: Em Java, usamos '==' para COMPARAR valores primitivos.
            // Um único sinal '=' serve apenas para ATRIBUIR um valor (ex: age = 0).
            System.out.println("You are a Baby!");
        } else {
            // O 'else' final é a "rede de segurança". Se tudo acima falhar, ele é executado.
            // Neste caso, ele vai capturar qualquer idade entre 1 e 17.
            System.out.println("You are a Child!");
        }

        // 4. AVALIAÇÃO DIRETA DE BOOLEANOS (Group 3):
        // Como 'isStudent' já guarda um valor true ou false na memória, 
        // não precisamos escrever algo redundante como 'if (isStudent == true)'.
        // Passar a variável diretamente já entrega a condição lógica que o 'if' precisa.
        if (isStudent){
            System.out.println("You are a Student!");
        } else {
            System.out.println("You are not a Student!");
        }

        // Liberando os recursos do sistema
        scanner.close();
   }
}
