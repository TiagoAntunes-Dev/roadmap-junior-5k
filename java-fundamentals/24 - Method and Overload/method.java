public class MethodsAndOverload {
    public static void main(String[] args) {
        
        /*
         * METHODS (MÉTODOS): O QUE SÃO E PARA QUE SERVEM?
         * São blocos de código isolados que só rodam quando são "chamados" (invocados).
         * Em vez de copiar e colar as linhas da música várias vezes no código principal, 
         * criamos um método lá embaixo e apenas chamamos o nome dele aqui em cima.
         */

        // 1. Chamando o método passando os DOIS argumentos esperados (Nome e Idade)
        singHappyBirthday("Bro", 20);

        // 2. Chamando o método SOBRECARREGADO (Overloaded) passando apenas UM argumento (Nome)
        singHappyBirthday("Spongebob"); 
    }

    // --- DECLARAÇÃO DOS MÉTODOS ---

    // 1. MÉTODO PADRÃO
    // 'static': O método pertence à classe em si (podemos usá-lo direto dentro do 'main' que também é static).
    // 'void': O método executa uma ação, mas NÃO devolve nenhum valor (return) de volta para o 'main'.
    static void singHappyBirthday(String name, int age) {
        System.out.println("Happy Birthday to you!");
        System.out.println("Happy Birthday dear " + name + "!");
        System.out.println("You are " + age + " years old!");
        System.out.println("Happy Birthday to you!\n");
    }

    /*
     * OVERLOADED METHODS (MÉTODOS SOBRECARREGADOS):
     * O Java permite que você crie VÁRIOS métodos com EXATAMENTE O MESMO NOME.
     * A única regra é que a "Assinatura" do método precisa ser diferente.
     * O que é a assinatura? É o que vai dentro dos parênteses. 
     * Você deve mudar a quantidade, o tipo de dado ou a ordem dos parâmetros.
     */

    // 2. MÉTODO SOBRECARREGADO
    // Tem o mesmo nome (singHappyBirthday), mas sua assinatura exige APENAS uma String 'name'.
    // O Java é inteligente o suficiente para olhar os argumentos que você enviou na linha 15 
    // e deduzir automaticamente que é ESTE bloco de código que ele deve executar, e não o de cima.
    static void singHappyBirthday(String name) {
        System.out.println("Happy Birthday to you!");
        System.out.println("Happy Birthday dear " + name + "!");
        System.out.println("We don't know your age, but Happy Birthday to you!\n");
    }
}