// 1. IMPORTAÇÃO: Diferente do JavaScript onde métodos globais já estão prontos, 
// no Java, ferramentas específicas como o 'Scanner' precisam ser importadas da 
// biblioteca utilitária (java.util) para dentro do seu arquivo.
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

        // 2. INSTANCIAÇÃO (Orientação a Objetos):
        // Aqui estamos criando um NOVO OBJETO do tipo 'Scanner', e dando a ele 
        // o nome de 'scanner'. O parâmetro 'System.in' avisa esse objeto que 
        // ele deve escutar a "entrada padrão" do sistema (o teclado).
        Scanner scanner = new Scanner(System.in);

        // System.out.print (sem o 'ln' no final) não quebra a linha, 
        // mantendo o cursor de digitação na mesma linha da pergunta.
        System.out.print("Enter your name: ");
        
        // 3. CAPTURA DE TEXTO: O método .nextLine() faz o programa pausar. 
        // Ele lê tudo o que for digitado até o usuário apertar 'Enter' 
        // e guarda essa informação na variável String 'name'.
        String name = scanner.nextLine();

        System.out.print("Enter your age: ");
        
        // 4. CAPTURA DE NÚMERO: O método .nextInt() faz a mesma coisa, mas 
        // espera estritamente um número inteiro (int). Por causa da tipagem forte 
        // do Java, se o usuário digitar uma letra aqui, o programa vai acusar 
        // um erro (InputMismatchException) e parar de rodar.
        int age = scanner.nextInt();

        // 5. SAÍDA DE DADOS: Concatenando o texto fixo com o que estava na memória
        System.out.println("Hello " + name);
        System.out.println("You are " + age + " years old"); 

        // 6. GERENCIAMENTO DE RECURSOS:
        // Quando abrimos uma "escuta" no teclado com o Scanner, consumimos recursos 
        // da máquina. É uma regra fundamental de arquitetura fechar (close) 
        // essas conexões quando não precisamos mais delas, para liberar memória.
        scanner.close();
    }
}