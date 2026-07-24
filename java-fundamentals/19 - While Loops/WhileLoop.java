import java.util.Scanner;

public class WhileLoop {
   public static void main(String[] args) {

       /*
        * WHILE LOOP (LAÇO 'ENQUANTO'): O QUE É E PARA QUE SERVE?
        * Serve para repetir um bloco de código indefinidamente ENQUANTO uma 
        * condição específica for avaliada como verdadeira (true).
        * 
        * Onde aplicar:
        * 1. Validação de Input (O primeiro loop abaixo): Forçar o usuário a digitar algo válido.
        * 2. Game Loops (O segundo loop abaixo): Manter um jogo ou menu rodando até o usuário pedir para sair.
        * 3. Leitura de Arquivos/Banco de Dados: Ler linhas de um arquivo "enquanto houver uma próxima linha".
        */

       Scanner scanner = new Scanner(System.in);

       // 1. INICIALIZAÇÃO DE VARIÁVEIS
       // Em loops 'while', é uma regra de ouro inicializar a variável ANTES do loop.
       // Se o 'name' não fosse uma String vazia (""), o primeiro loop poderia dar erro 
       // ou ser pulado completamente.
       String name = "";
       String response = "";

       // 2. LOOP DE VALIDAÇÃO (Trava de Segurança)
       // O Java lê: "Enquanto a variável 'name' estiver totalmente vazia, repita este bloco".
       // Se o usuário apenas apertar 'Enter' sem digitar nada, o '.isEmpty()' continua sendo true,
       // e o programa fica preso eternamente nessa pergunta.
       while (name.isEmpty()){
           System.out.print("Enter your name: ");
           name = scanner.nextLine();
       }
       
       // Quando o usuário finalmente digita um nome, o 'name.isEmpty()' vira false.
       // O Java quebra o ciclo do loop e segue para a linha debaixo.

       // 3. GAME LOOP (Loop de Sistema contínuo)
       // Lembra do Operador Lógico '!' (NOT) e do '.equals()' para Strings?
       // O Java lê: "Enquanto a variável 'response' NÃO for exatamente igual a 'Q', repita este bloco".
       while(!response.equals("Q")){
           System.out.println("You are playing a game");
           System.out.print("Press Q to quit: ");
           
           // O '.toUpperCase()' garante que se o usuário digitar 'q' minúsculo, 
           // o sistema converte para maiúsculo e a condição de saída acima funciona perfeitamente.
           response = scanner.next().toUpperCase();
       }
       
       // Este bloco só é alcançado quando o usuário finalmente digita 'Q'.
       System.out.println("Hello " + name);

       scanner.close();
    }
}