public class Printf {
    public static void main(String[] args) {
        
        /*
          Significa "Print Format" (Impressão Formatada). 
          Serve para injetar variáveis dentro de um texto de forma mais limpa,
        */

        // Fórmula estrutural do printf:
        // %[flags][width][.precision][specifier-character]

        String name = "Spongebob";
        char firstLetter = 'S';
        int age = 30;
        double height = 60.5;
        boolean isEmployed = true;

        // '%s' é o specifier (marcador) específico para Strings.
        System.out.printf("Hello %s\n", name);

        // '%c' é o specifier específico para char.
        // A variável 'firstLetter' é o que faltava para completar o código da imagem.
        System.out.printf("Your name starts with a %c\n", firstLetter);
        
        /* 
          BÔNUS - Como ficariam as outras variáveis que ele declarou ali:
          System.out.printf("Você tem %d anos\n", age);          // %d para int (dígitos)
          System.out.printf("Sua altura é %f\n", height);        // %f para double (floating point)
          System.out.printf("Está empregado? %b\n", isEmployed); // %b para boolean
        */
    }
}
