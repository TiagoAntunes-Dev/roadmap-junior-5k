package Classes;

public class Conta {
    // O atributo saldo é privado (private) para garantir o encapsulamento, impedindo que classes externas alterem o valor diretamente sem passar pelas regras de segurança.
    private double saldo;

    // Método responsável por realizar depósitos. Ele valida se o valor informado é menor que zero antes de atualizar o saldo.
    public void depositar(double valor) {
        if (valor < 0) {
            System.out.println("You can't be that Poor Man!"); // Mensagem exibida caso tentem depositar um valor negativo.
            return; // Interrompe a execução para evitar que o saldo seja alterado com um valor inválido.
        }

        // Atualiza o saldo somando o valor depositado.
        saldo = saldo + valor;
    }

    // Método Getter (pegarSaldo) responsável por retornar o valor atual do saldo de forma segura para quem está fora da classe.
    public double pegarSaldo() {
        return saldo;
    }
}
