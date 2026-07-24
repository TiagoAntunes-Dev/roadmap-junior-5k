public class MathClass {
    public static void main(String[] args) {

        /*
         * CLASSE MATH: PARA QUE SERVE E ONDE USAR?
         * Serve para realizar operações matemáticas avançadas que vão além do básico (+, -, *, /).
         * É uma classe nativa cujos métodos já estão prontos para uso direto.
         * 
         * Onde aplicar:
         * 1. Regras de Negócio: Cálculos financeiros (arredondar centavos, taxas de juros).
         * 2. Lógica Espacial e Games: Calcular distâncias (usando raiz e potência) ou colisões.
         * 3. Estatística/Lógica: Limitar números usando máximos e mínimos para evitar erros (ex: impedir que um valor fique negativo).
         */

        // Constantes matemáticas pré-definidas na linguagem:
        // System.out.println(Math.PI); // Valor de Pi (3.14159...)
        // System.out.println(Math.E);  // Constante de Euler (2.71828...)

        double result;

        // Math.pow (Power): Potenciação. Eleva o primeiro número ao segundo (2^5 = 32.0).
        result = Math.pow(2, 5);
        
        // Math.abs (Absolute): Valor absoluto. Ignora o sinal negativo. (-5 vira 5.0).
        result = Math.abs(-5);
        
        // Math.sqrt (Square Root): Raiz quadrada. (Raiz de 9 é 3.0).
        result = Math.sqrt(9);
        
        // Math.round: Arredondamento matemático padrão. (3.14 vira 3.0).
        result = Math.round(3.14);
        
        // Math.ceil (Ceiling/Teto): Arredonda sempre para CIMA, independente da casa decimal. (3.14 vira 4.0).
        result = Math.ceil(3.14);
        
        // Math.floor (Floor/Chão): Arredonda sempre para BAIXO. (3.99 vira 3.0).
        result = Math.floor(3.99);
        
        // Math.max: Compara dois números e retorna o MAIOR deles. (Retorna 20.0).
        result = Math.max(10, 20);
        
        // Math.min: Compara dois números e retorna o MENOR deles. (Retorna 10.0).
        result = Math.min(10, 20);

        // Como a variável 'result' foi substituída várias vezes ao longo do código, 
        // a saída final mostrará o resultado da última operação (Math.min).
        System.out.println(result);

    }
}
