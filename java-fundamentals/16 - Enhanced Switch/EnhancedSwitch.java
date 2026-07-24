public class EnhancedSwitch {
   public static void main(String[] args) {

       /*
         ENHANCED SWITCH: O QUE É E PARA QUE SERVE?
         É uma evolução da estrutura 'switch' clássica, introduzida no Java 14. 
         Serve para substituir longas cadeias de "else if" quando você está avaliando 
         os possíveis valores de uma ÚNICA variável.
         
         Onde aplicar:
         1. Roteamento de Menus: Escolher qual tela abrir baseada no input do usuário.
         2. Máquinas de Estado: Avaliar o status de um pedido (ex: "PENDENTE", "PAGO", "ENVIADO") 
            e disparar uma ação específica para cada um.
        */

       String day = "Monday";

       // A ESTRUTURA: Em vez de avaliar uma condição (como o 'if' faz com true/false), 
       // o switch pega a variável 'day' e tenta "casar" (dar match) com um dos 'cases'.
       switch (day){
           
           // O SÍMBOLO '->' (Arrow / Seta):
           // Essa é a grande mágica do Enhanced Switch. A seta diz para o Java: 
           // "Execute APENAS essa linha e saia do switch automaticamente". 
           // Isso elimina a necessidade de escrever 'break;' no final de cada caso.
           case "Monday" -> System.out.println("It is a weekday 😴");
           case "Tuesday" -> System.out.println("It is a weekday 😴");
           case "Wednesday" -> System.out.println("It is a weekday 😴");
           case "Thursday" -> System.out.println("It is a weekday 😴");
           case "Friday" -> System.out.println("It is a weekday 😴");
           case "Saturday" -> System.out.println("It is a weekend 😎");
           case "Sunday" -> System.out.println("It is a weekend 😎");
           
           // DEFAULT: É o equivalente ao 'else' final. 
           // Se a variável não bater com nenhum caso acima, o programa cai aqui.
           default -> System.out.println(day + " is not a day");

       }

       /*
         BÔNUS DE LÓGICA E SINTAXE:
         O verdadeiro poder do Enhanced Switch é permitir agrupar valores!
         Como o resultado de Segunda a Sexta é exatamente o mesmo, você poderia 
         reescrever todo o bloco acima de forma muito mais limpa, assim:
         
         switch (day) {
             case "Monday", "Tuesday", "Wednesday", "Thursday", "Friday" -> System.out.println("It is a weekday 😴");
             case "Saturday", "Sunday" -> System.out.println("It is a weekend 😎");
             default -> System.out.println(day + " is not a day");
         }
        */
    }
}
