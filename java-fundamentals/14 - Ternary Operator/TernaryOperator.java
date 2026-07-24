public class TernaryOperator {
  public static void main(String[] args) {

      /*
       * OPERADOR TERNÁRIO: PARA QUE SERVE E ONDE USAR?
       * Serve para realizar uma condicional simples (if/else) em uma única linha, 
       * retornando um valor imediato para ser salvo em uma variável.
       * 
       * Onde aplicar:
       * 1. Formatação de UI: Definir textos rápidos (ex: se ativo, mostra "Online", senão "Offline").
       * 2. Cálculos de desconto: (ex: se for VIP, desconto é 20, senão é 0).
       * 3. Evitar repetição: Quando a única coisa que muda dentro do seu 'if' e 'else' 
       *    é o valor que uma variável vai receber.
       */

      // Ternary Operator (?) = Return 1 of 2 values if a condition is true

      // FÓRMULA LÓGICA: 
      // Variavel = (Condição para testar) ? ValorSeForVerdadeiro : ValorSeForFalso;

      int score = 75;

      // COMO O JAVA LÊ A LINHA ABAIXO:
      // 1. "A variável 'score' é maior ou igual a 60?" (Avalia a condição)
      // 2. Se SIM (true), pegue a String "PASS".
      // 3. Se NÃO (false), pegue a String "Fail".
      // 4. Salve a String escolhida dentro da variável 'passOrFail'.
      
      String passOrFail = (score >= 60) ? "PASS" : "Fail";

      /* 
       * SÓ PARA COMPARAR: O código acima faz EXATAMENTE a mesma coisa que isso:
       * String passOrFail;
       * if (score >= 60) {
       *     passOrFail = "PASS";
       * } else {
       *     passOrFail = "Fail";
       * }
       * (Você trocou 6 linhas de código por apenas 1!)
       */

      System.out.println(passOrFail);
    }
}
