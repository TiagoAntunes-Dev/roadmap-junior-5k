// 1. PACOTE ATUAL:
// Dizemos ao Java que este arquivo vive fisicamente dentro da pasta 'Rodas'.
package MyFirstProject.Rodas;

// 2. IMPORTAÇÃO:
// Como a classe Carro ficou um nível de pasta acima (na MyFirstProject), 
// precisamos "importar" a planta baixa dela para que esta classe saiba o que é um Carro.
import MyFirstProject.Carro;

public class Quatro_Rodas {
    
    // Construtor desta classe
    public Quatro_Rodas () {
       
       // Agora podemos instanciar livremente graças ao 'import' lá de cima.
       Carro carro = new Carro("Tesla");
       
    }
}
