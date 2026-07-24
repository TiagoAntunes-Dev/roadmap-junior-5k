public class Main {
    public static void main(String[] args){

        /*
         * NESTED LOOPS (LAÇOS ANINHADOS): O QUE É E PARA QUE SERVE?
         * É simplesmente um laço de repetição operando dentro de outro. 
         * A regra de ouro aqui é a engrenagem: para cada ÚNICA volta do laço externo, 
         * o laço interno precisa rodar por COMPLETO.
         * 
         * Onde aplicar:
         * 1. Matrizes e Grids 2D: Percorrer linhas e colunas (ex: desenhar um tabuleiro de xadrez).
         * 2. Relógios/Cronômetros: O laço de fora controla os minutos, o de dentro controla os 60 segundos.
         * 3. Algoritmos Estruturais (DS&A): Usado para comparar itens de uma lista com todos os outros itens dela mesma (como algoritmos de ordenação).
         */

        // nested loop = A loop inside another loop
        //               Used often with matrices or DS&A

        // 1. LAÇO EXTERNO (Controla as linhas)
        // Vai rodar exatamente 3 vezes.
        for(int i = 1; i <= 3; i++){
            
            // 2. LAÇO INTERNO (Controla as colunas)
            // Trocamos o nome da variável de 'i' para 'j' para evitar o erro.
            // Para CADA volta do laço 'i', este laço 'j' vai imprimir de 1 a 9.
            for(int j = 1; j <= 9; j++){
                
                // O '.print' mantém os números grudados na mesma linha, separados por um espaço.
                System.out.print(j + " ");
            }
            
            // 3. QUEBRA DE LINHA
            // Quando o laço interno termina de contar até 9, o código escapa para esta linha.
            // O println vazio funciona como um "Enter" no teclado, jogando o cursor para a 
            // linha debaixo no terminal antes que o laço externo (i) comece sua próxima volta.
            System.out.println();
        }
    }
}