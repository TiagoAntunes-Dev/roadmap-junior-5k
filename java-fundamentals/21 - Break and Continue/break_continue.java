public class Main {
    public static void main(String[] args){

        /*
         * BREAK E CONTINUE: PARA QUE SERVEM E ONDE USAR?
         * São comandos de controle para alterar o fluxo natural de um laço (loop).
         * 
         * Onde aplicar:
         * 1. break: Parar uma busca num banco de dados assim que encontrar o usuário desejado (economiza muito processamento).
         * 2. continue: Pular registros inválidos ou corrompidos ao varrer uma lista, sem parar o sistema inteiro.
         */

        // Este loop, por padrão, está programado para rodar de 0 até 9.
        for(int i = 0; i < 10; i++){
            
            // CONDIÇÃO DE INTERRUPÇÃO
            if(i == 5){
                
                // BREAK (PARAR):
                // Quando 'i' vira 5, o Java "destrói" o laço imediatamente. 
                // Ele não imprime o 5, e a contagem acaba de vez. 
                // Resultado no terminal: 0 1 2 3 4
                break;
                
                // CONCEITO DO CONTINUE (PULAR):
                // Se no lugar do 'break' estivesse escrito 'continue', o Java abortaria 
                // APENAS a rodada atual (a rodada do 5). Ele pularia a linha do print, 
                // mas o laço continuaria rodando. 
                // Resultado no terminal: 0 1 2 3 4 6 7 8 9
            }
            
            // O print usa apenas o 'print' (sem o 'ln'), então os números ficam 
            // todos na mesma linha, separados por um espaço.
            System.out.print(i + " ");
        }
    }
}