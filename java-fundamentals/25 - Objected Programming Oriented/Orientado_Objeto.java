package MyFirstProject;

public class Orientado_Objeto {

    public static void test(){
        System.out.println("Testando novo public static void!");
    }

    public static void main(String[] args) {
        
        // 1. INSTANCIAÇÃO (O nascimento do objeto):
        // A palavra 'new' vai lá na classe Carro, executa o Construtor, injeta a String "BMW" 
        // e guarda esse objeto completo dentro da variável 'meuCarro'.
        Carro meuCarro = new Carro("BMW");
        Carro meuCarro1 = new Carro("Skyline");
        Carro meuCarro2 = new Carro("Lamborghini");

        // 2. ACIONANDO MÉTODOS:
        // Como cada objeto (meuCarro1, meuCarro2) tem seu próprio escopo isolado na memória,
        // o método 'accelerate()' sabe exatamente qual modelo imprimir sem misturar os dados.
        meuCarro1.accelerate();
        meuCarro2.accelerate();
        meuCarro.accelerate();
    }
}


