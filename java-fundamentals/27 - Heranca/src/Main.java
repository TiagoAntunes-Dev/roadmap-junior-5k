import Animais.Cachorro;
import Animais.Dragon;
import Animais.Gato;
import Animais.Pombo;

public class Main {
    static void main(String[] args) {
        Cachorro cachorro = new Cachorro("Bolt");
        cachorro.comer();
        cachorro.latir();


        Gato gato = new Gato("Bola de Neve");
        gato.miar();

        Dragon dragao = new Dragon("Dragão Branco de Olhos Azuis");
        dragao.voar(); // Voador
        dragao.soltarFogo();

        Pombo pombo = new Pombo("Edwiges");
        pombo.enviarCarta();
        pombo.fazerPru();
    }
}
