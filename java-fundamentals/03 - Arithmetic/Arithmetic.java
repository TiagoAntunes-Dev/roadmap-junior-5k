public class Arithmetic {
  public static void main(String[] args) {

      // OPERADORES ARITMÉTICOS BÁSICOS:
      // Eles seguem a mesma lógica da matemática tradicional.
      // Os principais são: + (Soma), - (Subtração), * (Multiplicação), / (Divisão) e % (Resto/Módulo)
      int x = 10;
      int y = 2;
      
      // A variável 'z' foi criada, mas está vazia. 
      int z;

      // Se fôssemos utilizá-la, a lógica seria: o Java resolve a matemática 
      // à direita do sinal de igual '=' e guarda o resultado final na variável à esquerda.
      // Exemplo conceitual: 
      // z = x * y;  // 'z' passaria a valer 20.
      // z = x % 3;  // 'z' passaria a valer 1 (pois 10 dividido por 3 sobra 1).


      // OPERADORES DE ATRIBUIÇÃO AUMENTADA (Augmented Assignment Operators):
      // É um conceito usado para economizar código quando você precisa atualizar 
      // o valor de uma variável utilizando o valor que ela já possui.
      int a = 20;
      int b = 3;

      // Lógica passo a passo: "Leia o valor atual de 'a' (20), some com o valor de 'b' (3), 
      // e substitua o valor antigo de 'a' por esse novo resultado (23)".
      a = a + b;

      // ATALHO CONCEITUAL:
      // O Java possui operadores de atribuição para encurtar a linha acima. 
      // A forma "aumentada" e mais comum de escrever a mesma operação no dia a dia é:
      // a += b;  (Faz exatamente a mesma coisa: a = a + b)
      // Isso também vale para as outras operações: -=, *=, /=

      // Imprime o valor final atualizado de 'a', que agora é 23.
      System.out.println(a); 

    }
}
