// 1. public class: Todo código em Java precisa viver dentro de uma "classe".
// A palavra "public" significa que essa classe é acessível.
// Regra de ouro: O nome da classe DEVE ser exatamente o nome do seu arquivo (ex: Compilando_e_Executando.java).
public class Compilando_e_Executando {

    // 2. public static void main(String[] args): Essa é a porta de entrada do programa.
    // O Java sempre procura exatamente por essa assinatura para saber por onde começar a rodar.
    // - public: Acesso liberado para a JVM (o motor do Java) enxergar este método.
    // - static: Permite que o Java rode este bloco sem precisar "instanciar" (criar um objeto) da classe antes.
    // - void: Significa "vazio". Indica que esse método apenas executa uma ação, mas não devolve nenhum dado matemático ao final.
    // - String[] args: Permite que você injete textos (argumentos) pelo terminal na hora de rodar o programa.
    public static void main(String[] args) {

        // 3. System.out.println: O comando de impressão.
        // - System: Você está chamando uma classe nativa do sistema do Java.
        // - out: Você especifica que quer usar o canal de saída padrão (a tela do terminal).
        // - println: Abreviação de "print line". Ele escreve o texto e automaticamente pula uma linha no final.
        System.out.println("Hello World!");

    } // 4. Fecha o escopo do método main. Tudo que acontece ao rodar o programa fica aqui dentro.
} // 5. Fecha o escopo da classe.
