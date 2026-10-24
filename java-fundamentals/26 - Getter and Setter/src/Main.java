import Classes.Conta;
import Classes.Pessoa;

public class Main {
    static void main(String[] args) {
        // Instancia um objeto da classe Pessoa para testar os métodos setters e getters criados.
        Pessoa pessoa = new Pessoa();
        pessoa.alterarNome("Bob Esponja");
        pessoa.alterarAltura(1.9);
        pessoa.alterarIdade(20);

        // Imprime no console os valores atualizados através dos métodos getters da classe Pessoa.
        System.out.println(pessoa.pegarNome());
        System.out.println(pessoa.pegarIdade());
        System.out.println(pessoa.pegarAltura());

        // Instancia um objeto da classe Conta para testar a lógica de saldo e depósito encapsulado.
        Conta conta = new Conta();
        System.out.println(conta.pegarSaldo()); // Exibe o saldo inicial (zero).
        conta.depositar(100);              // Realiza um depósito válido de 100.
        System.out.println(conta.pegarSaldo()); // Exibe o saldo atualizado após o depósito.
    }
}
