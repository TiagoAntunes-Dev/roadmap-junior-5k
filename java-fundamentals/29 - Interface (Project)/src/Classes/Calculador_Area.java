package Classes;

public class Calculador_Area {
    /*
        Esta classe demonstra o grande poder da interface:
        Permite somar áreas de quaisquer figuras geométricas (Quadrado ou Círculo),
        sem se importar com os cálculos internos de cada uma.
    */

    // Método que recebe como parâmetros tipos da INTERFACE (Figura_Geometrica)
    // em vez de classes específicas. Isso aceita tanto Quadrado quanto Círculo (min 15:19).
    public double somarAreas (Figura_Geometrica quadrado, Figura_Geometrica circulo){

        // Chama polimorficamente o método .calcularArea() de cada objeto recebido.
        // O Java sabe exatamente qual método chamar (do quadrado ou do círculo) em tempo de execução.
        double totalArea = quadrado.calcularArea() + circulo.calcularArea();

        // Retorna a soma total calculada das duas áreas.
        return totalArea;
    }
}
