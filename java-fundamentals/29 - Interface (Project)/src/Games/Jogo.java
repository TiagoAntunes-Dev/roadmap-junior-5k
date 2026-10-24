package Games;

// Define a interface "Jogo". Uma interface funciona como um contrato:
// ela não implementa nada por si só, apenas dita as regras que as classes devem seguir.
public interface Jogo {

    // Assinatura do método 'jogar'.
    // Qualquer classe que implemente esta interface é OBRIGADA a ter este método.
    public void jogar();

    // Assinatura do método 'fechar'.
    // Estabelece que toda classe de jogo precisa saber como se encerrar.
    public void fechar();
}