// 1. IMPORTAÇÃO DE BIBLIOTECA GRÁFICA:
// O pacote 'javax.swing' contém classes para criar Interfaces Gráficas de Usuário (GUI) para Desktop.
import javax.swing.JOptionPane;

public class ExemploPopUp {
    public static void main(String[] args) {
        
        // 2. CAPTURA DE DADOS (Retorno estrito):
        // O método 'showInputDialog' desenha a janela e pausa o programa esperando a digitação.
        // IMPORTANTE: Toda informação digitada nessa janela, mesmo que seja um número, 
        // retorna para o sistema estritamente como um Texto (String).
        String idadeTexto = JOptionPane.showInputDialog("Quantos anos você tem?");
        
        // 3. PARSING (Conversão Explícita de Tipo):
        // O Java não faz coerção automática de tipos. Precisamos invocar a classe 'Integer' 
        // e usar a ferramenta '.parseInt()' para extrair o valor matemático de dentro daquele texto.
        int idadeNumero = Integer.parseInt(idadeTexto);
        
        // Fazendo a matemática com segurança (int + int)
        int idadeAnoQueVem = idadeNumero + 1;
        
        // 4. SAÍDA DE DADOS:
        // O 'showMessageDialog' abre uma janela de aviso. 
        // O primeiro parâmetro 'null' diz que essa janela não está presa a nenhuma outra janela pai 
        // (ela vai aparecer centralizada na tela).
        JOptionPane.showMessageDialog(null, "Ano que vem você terá " + idadeAnoQueVem + " anos.");
    }
}