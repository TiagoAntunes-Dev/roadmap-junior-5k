public class ForLoopsOverview {
    public static void main(String[] args){

        /*
         * EXEMPLO 1: Repetição Básica
         * Aqui o laço começa no 0 e vai somando +1 a cada volta (i++).
         * Ele continua executando enquanto 'i' for menor que 10.
         */
        for(int i = 0; i < 10; i++){
            System.out.println("pizza"); // Imprime "pizza" 10 vezes
        }

        System.out.println("-----------------"); // Separador no terminal

        /*
         * EXEMPLO 2: Incremento Personalizado
         * A lógica não precisa sempre andar de 1 em 1.
         * Aqui o laço começa no 1 e vai até o 10, mas repare no 'i+=2'.
         * Isso faz o contador pular de dois em dois.
         */
        for(int i = 1; i <= 10; i+=2){
            System.out.println(i);
        }

        System.out.println("-----------------");

        /*
         * EXEMPLO 3: Contagem Regressiva e Variáveis Externas
         * O ponto de partida não precisa ser um número fixo dentro do parênteses.
         * Podemos usar uma variável externa, como o 'start'.
         */
        int start = 10;

        // A lógica aqui é invertida: a condição testa se 'i' é maior que 0 (i > 0).
        // E usamos 'i--' no ritmo para subtrair 1 a cada volta finalizada.
        for(int i = start; i > 0; i--){
            System.out.println(i);
        }

        // O Java só chega nesta linha quando o loop acima quebra (ou seja, quando 'i' chega a 0).
        System.out.println("HAPPY NEW YEAR!");
    }
}