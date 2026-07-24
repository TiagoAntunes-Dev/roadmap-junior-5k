import java.util.Scanner;

public class CalculatorProgram {
   public static void main(String[] args) {

       Scanner scanner = new Scanner(System.in);

       // 1. DECLARAÇÃO DE VARIÁVEIS E "FLAGS"
       double num1;
       double num2;
       char operator;
       double result = 0;
       
       // CONCEITO DE "FLAG" (Bandeira de Estado):
       // Criamos essa variável assumindo que a operação vai dar certo (true). 
       // Se no meio do caminho algum erro acontecer (como dividir por zero ou digitar um símbolo errado), 
       // nós "abaixamos a bandeira" (mudamos para false) para avisar o final do código que ele não deve imprimir o resultado.
       boolean validOperation = true;

       // 2. ENTRADA DE DADOS
       System.out.println("Enter the First Number: ");
       num1 = scanner.nextDouble();

       System.out.print("Enter an operator (+, -, *, /, ^): ");
       
       // TRUQUE DO CHAR: A classe Scanner não tem um método '.nextChar()'. 
       // Então a lógica aqui é: captura a próxima palavra inteira como String com '.next()', 
       // e imediatamente extrai apenas a primeira letra dela com o '.charAt(0)'.
       operator = scanner.next().charAt(0);

       System.out.print("Enter the Second Number: ");
       num2 =  scanner.nextDouble();

       // 3. ROTEAMENTO DE OPERAÇÕES (Enhanced Switch)
       switch (operator) {
           case '+' -> result = num1 + num2;
           case '-' -> result = num1 - num2;
           case '*' -> result = num1 * num2;
           
           // BLOCOS DENTRO DO SWITCH:
           // Lembra que a seta '->' executa apenas uma linha de código? 
           // Se você precisar fazer validações mais complexas (como um if/else inteiro), 
           // você deve abrir chaves '{}' para criar um "bloco de código" após a seta.
           case '/' -> {
               if (num2 == 0) {
                   System.out.println("Cannot divide by Zero (0)");
                   validOperation = false; // "Abaixando a bandeira" por conta do erro
               } else {
                   result = num1 / num2;
               }
           }
           case '^' -> result = Math.pow(num1, num2);
           
           default -> {
               System.out.println("Invalid Operator");
               validOperation = false; // "Abaixando a bandeira" por conta do erro
           }
       }

       // 4. VALIDAÇÃO DE SAÍDA
       // O código só imprime o resultado na tela se a nossa flag continuar verdadeira.
       // É uma forma elegante de evitar que o terminal imprima "0.0" quando der um erro na divisão.
       if (validOperation) {
           System.out.println(result);
       }

       scanner.close();
   }
}
