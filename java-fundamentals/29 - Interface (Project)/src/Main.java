import Classes.*;

public class Main {
   public static void main(String[] args) throws Exception {
        // Encapsulamento -> Interface

       Circulo circulopequeno = new Circulo(2);

       double area = circulopequeno.calcularArea();
       System.out.println(area);

       Quadrado quadrado = new Quadrado(5);
       System.out.println(quadrado.calcularArea());

       Circulo circulo = new Circulo(2);

       Calculador_Area calculador = new Calculador_Area();
       System.out.println(calculador.somarAreas(quadrado, circulo));
   }

}