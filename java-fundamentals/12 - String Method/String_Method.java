public class String_Method {
   public static void main(String[] args) {

       /*
        * MÉTODOS DE STRING: PARA QUE SERVEM E ONDE USAR?
        * Como 'String' é uma Classe/Objeto no Java (e não um tipo primitivo), ela já vem com 
        * dezenas de funções (métodos) prontas para manipular e inspecionar textos.
        * 
        * Onde aplicar:
        * 1. Limpeza e Tratamento: Padronizar dados vindos do front-end (ex: de um formulário em Angular) 
        *    antes de enviar para a persistência no banco de dados (como um MySQL).
        * 2. Validações de Backend: Checar se senhas têm o tamanho certo, se o e-mail 
        *    tem o '@', ou formatar retornos de API.
        */

       String name = "Bro Code";

       // .length(): Retorna a quantidade total de caracteres (tamanho numérico do texto). 
       // Útil para validações (ex: verificar se a senha digitada tem mais de 8 caracteres).
       int length = name.length();

       // .charAt(índice): Retorna o caractere exato que está na posição informada.
       // Regra de ouro (igual no JavaScript): A contagem dos índices sempre começa no zero.
       char letter = name.charAt(0);

       // .indexOf("texto"): Varre a String da esquerda para a direita. Retorna o índice da 
       // PRIMEIRA ocorrência do texto buscado. (Se não achar nada, retorna -1).
       int index = name.indexOf(" ");

       // .lastIndexOf("texto"): Faz a mesma varredura, mas retorna o índice da ÚLTIMA 
       // ocorrência daquele texto.
       int lastIndex = name.lastIndexOf("o");

       // .toUpperCase(): Transforma todas as letras da String em MAIÚSCULAS.
       // name = name.toUpperCase();
       
       // .toLowerCase(): Transforma todas as letras em minúsculas. 
       // Excelente prática para padronizar e-mails de usuários no momento do cadastro ou login.
       // name = name.toLowerCase();
       
       // .trim(): Remove espaços em branco sobrando apenas no INÍCIO e no FINAL do texto. 
       // Essencial para limpar inputs onde o usuário apertou a barra de espaço sem querer.
       // name = name.trim();
       
       // .replace(alvo, substituto): Troca todas as ocorrências de um caractere ou palavra por outra.
       // name = name.replace("o", "a");
       
       // .isEmpty(): Avalia o texto e retorna um boolean (true ou false) indicando se a String está totalmente vazia.
       // OBS LÓGICA: Sendo um método, ele obrigatoriamente precisa dos parênteses '()' no final para ser executado.
       // boolean empty = name.isEmpty();

       System.out.println(lastIndex);
   }
}
