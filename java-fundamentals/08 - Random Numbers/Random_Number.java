// 1. IMPORTAÇÃO: Assim como o Scanner, a classe Random é uma ferramenta 
// utilitária do Java e precisa ser importada.
import java.util.Random;

public class Random_Number {
    public static void main(String[] args) {

        // PARA QUE SERVE E ONDE USAR?
        // Serve para gerar números "pseudo-aleatórios" (matematicamente imprevisíveis).

        // 2. INSTANCIAÇÃO: 
        // Criamos um novo objeto do tipo Random. É nesse momento que o Java 
        // prepara o algoritmo e pega a "semente" (geralmente o relógio do sistema) 
        // para começar a gerar as sequências matemáticas.
        Random random = new Random();

        // 3. DECLARAÇÃO: Preparando os espaços na memória para guardar os resultados.
        int number1;
        int number2;
        int number3;

        // 4. ATRIBUIÇÃO E GERAÇÃO:
        // O método .nextInt(origem, limite) pede dois parâmetros. 
        // IMPORTANTE: O limite inicial (1) é INCLUSIVO, mas o limite final (7) é EXCLUSIVO.
        // Ou seja, essa linha pede para o Java sortear um número de 1 até 6. 
        // Isso é exatamente a simulação do rolar de um dado tradicional de 6 faces!
        number1 = random.nextInt(1, 7);
        number2 = random.nextInt(1, 7);
        number3 = random.nextInt(1, 7);

        // 5. SAÍDA: 
        // Cada vez que você rodar esse programa, os valores impressos serão diferentes, 
        // dependendo do que o algoritmo calculou no exato milissegundo da execução.
        System.out.println(number1);
        System.out.println(number2);
        System.out.println(number3);

    }
}
