import java.util.ArrayList;

public class Main {
     static void main(String[] args) {

        // Criando um ArrayList de Strings
        ArrayList<String> arrayDinamico = new ArrayList<>();

        // Adicionando elementos
        arrayDinamico.add("Tiago");
        arrayDinamico.add("Maria");
        arrayDinamico.add("João");

        // Exibindo o ArrayList
        System.out.println(arrayDinamico);

        // Acessando um elemento pelo índice
        System.out.println(arrayDinamico.get(0));

        // Alterando um elemento
        arrayDinamico.set(1, "Ana");

        // Removendo um elemento
        arrayDinamico.remove("João");

        // Tamanho do ArrayList
        System.out.println("Quantidade: " + arrayDinamico.size());

        // Exibindo novamente
        System.out.println(arrayDinamico);

        // Limpar ArrayList
         arrayDinamico.clear();

    }
}