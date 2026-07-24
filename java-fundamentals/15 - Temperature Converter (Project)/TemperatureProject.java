import java.util.Scanner;

public class TemperatureProject {
   public static void main(String[] args) {

       Scanner scanner = new Scanner(System.in);

       // 1. DECLARAÇÃO DE VARIÁVEIS
       double temp;
       double newTemp;
       String unit;

       // 2. ENTRADA DE DADOS (Temperatura original)
       System.out.print("Enter the temperature: ");
       temp = scanner.nextDouble();

       // 3. ENTRADA DE DADOS E TRATAMENTO DE STRING
       System.out.println("Convert to Celsius or Fahrenheit? (C or F ) :");
       
       // LÓGICA CONCEITUAL: O método '.next()' captura a próxima palavra (diferente do 
       // '.nextLine()' que captura a linha toda). 
       // Nós encadeamos o '.toUpperCase()' imediatamente para "higienizar" o dado. 
       // Assim, se o usuário digitar 'c' minúsculo, o programa força para 'C', 
       // garantindo que a nossa lógica matemática lá embaixo não quebre.
       unit = scanner.next().toUpperCase();

       // 4. LÓGICA DE ROTEAMENTO (Ternário) E COMPARAÇÃO
       // ALERTA CONCEITUAL: Em Java, NÃO usamos '==' para verificar se uma String é 
       // igual à outra. Como Strings são Objetos, o '==' verificaria se elas ocupam o 
       // mesmo lugar na memória, o que causaria bugs. Para comparar o CONTEÚDO exato 
       // de duas Strings, usamos obrigatoriamente o método '.equals()'.

       // O Ternário avalia: A unidade de destino escolhida foi "C"?
       // Se SIM (true): Aplica a fórmula de conversão para Celsius.
       // Se NÃO (false): Assume que a escolha foi Fahrenheit e aplica a outra fórmula.
       newTemp = (unit.equals("C")) ? (temp - 32) * 5 / 9 : (temp * 9 / 5) + 32;

       // 5. SAÍDA FORMATADA
       // '%.1f' formata a variável 'newTemp' limitando a exatamente 1 casa decimal.
       // O símbolo '°' é apenas texto fixo que será impresso.
       // '%s' recebe a variável 'unit', imprimindo a letra 'C' ou 'F'.
       // Adicionei um '\n' no final apenas para a linha do terminal não ficar grudada.
       System.out.printf("%.1f° %s\n", newTemp, unit );

       // 6. LIBERAÇÃO DE RECURSOS
       scanner.close();
   }
}
