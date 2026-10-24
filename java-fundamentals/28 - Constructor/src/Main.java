import Classes.Personagem;
import Classes.Pessoa;

// Ponto de entrada padrão da aplicação Java (método main obrigatório com 'public').
void main() {

    // Instancia um objeto da classe Pessoa usando o método construtor com parâmetros obrigatórios.
    Pessoa pessoa1 = new Pessoa("Johan", 27, 1.77f);

    // Chama o método específico da classe Pessoa para exibir os dados impressos no console.
    pessoa1.imprimirDados();

    IO.println("");

    // Instancia um objeto da classe Personagem utilizando o construtor que define nome e classe.
    Personagem guerreiro = new Personagem("Goku", "Guerreiro");

    // Chama o método específico da classe Personagem para exibir os status completos gerados.
    guerreiro.mostrarStatus();

//        Exemplo comentado de uso alternativo via ‘setters’ individuais:
//        pessoa1.setNome("Tiago");
//        pessoa1.setIdade(25);
//        pessoa1.setAltura(1.71f);

//        Exemplo comentado de impressão manual via getters:
//        System.out.println("Nome: "
//                + pessoa1.getNome() + " | Idade: "
//                + pessoa1.getIdade() + " | Altura: "
//                + pessoa1.getAltura()
//        );
}