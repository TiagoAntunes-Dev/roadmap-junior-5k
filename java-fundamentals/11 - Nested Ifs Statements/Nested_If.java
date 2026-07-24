public class Nested_If {
    public static void main(String[] args) {

        /*
         * NESTED IF (IF ANINHADO): O QUE É E PARA QUE SERVE?
         * É simplesmente colocar uma estrutura de decisão (if/else) dentro de outra.
         * 
         * Onde aplicar:
         * 1. Validações em etapas: Só checa a senha SE o usuário existir no banco de dados.
         * 2. Regras de negócio cruzadas: Como neste exemplo, onde o cálculo do 
         *    preço depende da combinação exata de múltiplas características do cliente.
         * 3. Sistemas de Menus: Checar qual opção principal foi escolhida e, 
         *    dentro dela, qual sub-opção o usuário acessou.
         */

        boolean isStudent = true;
        boolean isSenior = false;
        double price = 9.99;

        // 1º NÍVEL (Condição Externa): O fluxo do programa avalia isso primeiro.
        if (isStudent) {

            // 2º NÍVEL (Condição Interna): O código só entra neste bloco SE a pessoa for estudante.
            // Aqui criamos uma "sub-ramificação" de lógica apenas para os estudantes.
            if (isSenior) {
                System.out.println("You get a Senior Discount of 20%");
                System.out.println("You get a Student Discount of 10%");
                price *= 0.7; // 30% de desconto total
            } else {
                // É estudante, mas NÃO é idosa
                System.out.println("You get a Student Discount of 10%");
                price *= 0.9; // 10% de desconto
            }

        } else { // Cai aqui se a Condição Externa (isStudent) for falsa

            // Outro 2º NÍVEL: Uma sub-ramificação diferente para quem NÃO é estudante.
            if (isSenior) {
                System.out.println("You get a Senior Discount of 20%");
                price *= 0.8; // 20% de desconto
            } else {
                System.out.println("You get no discount.");
            }

        }

        // Bônus do printf: O marcador '%.2f' diz para o Java pegar o valor (double) 
        // e formatar limitando a exibição a exatamente 2 casas decimais.
        System.out.printf("The price of a ticket is: $%.2f\n", price);
    }
}
