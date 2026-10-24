package Classes;

// Define que este arquivo é uma interface chamada 'Figura_Geometrica'.
// Uma interface não cria objetos diretamente; ela atua como um CONTRATO rígido.
// Qualquer classe que assinar este contrato será OBRIGADA a implementar os métodos descritos aqui.
public interface Figura_Geometrica {

    // Assinatura de método abstrato (sem corpo/chaves {}).
    // O contrato diz: "Quem assumir ser uma Figura_Geometrica precisa obrigatoriamente
    // saber calcular sua própria área, retornando um valor do tipo 'double'".
    public double calcularArea();
}
