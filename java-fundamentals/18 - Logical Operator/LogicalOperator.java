public class LogicalOperator {
   public static void main(String[] args) {

       /*
        * OPERADORES LÓGICOS: O QUE SÃO E PARA QUE SERVEM?
        * Servem para combinar duas ou mais condições em uma única avaliação final 
        * que resultará em verdadeiro (true) ou falso (false).
        * 
        * Onde aplicar:
        * 1. Autenticação (&&): O usuário digitou o e-mail correto E a senha correta?
        * 2. Permissões (||): O usuário é Administrador OU Moderador? (Basta um para liberar acesso).
        * 3. Inversão de Estado (!): Botões de "Dark Mode" ou "Ligar/Desligar".
        */

       // && = AND (E) -> TUDO precisa ser verdade para o bloco inteiro ser considerado verdadeiro.
       // || = OR (OU) -> BASTA UMA condição ser verdade para o bloco ser ativado.
       // !  = NOT (NÃO) -> Inverte o valor atual (se for true, o Java lê como false).

       double temp = 40;
       boolean isSunny = true;

       // 1. O clima está bom E (&&) está ensolarado?
       // CONCEITO DE SHORT-CIRCUIT (Curto-circuito): O Java lê da esquerda para a direita.
       // A temperatura é menor/igual a 30? (Falso, pois é 40). 
       // Como estamos usando o '&&', o Java já cancela a verificação nessa primeira falha e nem
       // perde tempo processando o resto da linha, pulando para o próximo bloco.
       if (temp <= 30 && temp >= 0 && isSunny) {
           System.out.println("O clima está bom! 😎");
           System.out.println("Está ensolarado lá fora! ⛱");
       }
       
       // 2. O clima está bom E (&&) NÃO (!) está ensolarado?
       // Aqui temos o operador '!'. Ele avalia a variável 'isSunny' (que originalmente é true) 
       // e inverte para false estritamente no momento da leitura da condição.
       else if (temp <= 30 && temp >= 0 && !isSunny) {
           System.out.println("O clima está bom! 😎");
           System.out.println("Está nublado lá fora! ☔");
       }
       
       // 3. A temperatura é maior que 30 OU (||) menor que 0?
       // SHORT-CIRCUIT DO OR: O Java lê a primeira condição (temp > 30). É verdade (40 > 30).
       // Como estamos usando o '||', basta uma ser verdade. O Java nem chega a ler o "temp < 0" 
       // e já entra no bloco imediatamente.
       else if (temp > 30 || temp < 0) {
           System.out.println("O clima está ruim! 😴");
       }
   }
}
