/**
 * ===================================================================================
 * 1. CONCEITO PRINCIPAL DA AULA (BASEADO NO TRANSCRIPT)
 * ===================================================================================
 * Quando você digita um endereço no navegador e aperta Enter, você envia duas coisas:
 *  1. O Recurso (A Rota/Caminho na URL): ex: /home/hello
 *  2. O Método HTTP (A Ação): O padrão do navegador é sempre o método GET (Read / Ler no CRUD).
 * ===================================================================================
 */

// 📍 IMPORTAÇÃO DOS DECORADORES
// Traz do pacote do NestJS os decoradores para mapear rotas e métodos HTTP.
// No transcript: O professor explica que o NestJS precisa dessas ferramentas para
// saber como ouvir e responder às solicitações HTTP que chegam no servidor.
import { Controller, Get } from '@nestjs/common';

// import { AppService } from './app.service.js'; 
// ^ Comentado temporariamente pelo professor para focar Apenas nos Controllers e Rotas,


// 🛑 @Controller('home') ➔ CONTROLA A ROTA PRINCIPAL (O RECURSO BASE)
// - O que CONTROLA: Define o prefixo (a rota pai) de toda esta classe.
// - Contexto do Transcript:
//   * Quando estava vazio @Controller(), ele mapeava para a raiz do site (http://localhost:3000/).
//   * Ao passar 'home', este controlador passa a responder no recurso /home.
//   * A partir deste momento, tentar acessar a raiz '/' retorna Erro 404 (Not Found),
//     porque a rota agora é obrigatoriamente http://localhost:3000/home.
@Controller('home')

// 📦 ESTRUTURA DO CONTROLLER
// - O que CONTROLA: É a classe TypeScript exposta (export) que agrupa as rotas do recurso 'home'.
// - Contexto do Transcript: O Controller nada mais é do que uma classe normal decorada com @Controller.
export class AppController {

  // constructor(private readonly appService: AppService) {}
  // ^ Construtor de Injeção de Dependência comentado temporariamente
  // porque o AppService foi desativado acima.


  // ⚡ @Get('hello') ➔ CONTROLA O MÉTODO HTTP E A SUB-ROTA
  // - O que CONTROLA: Faz um mapeamento duplo:
  //   1. Método HTTP GET: Garante que só responde a requisições de LEITURA (Read do CRUD).
  //      Como o professor explica, o navegador por padrão envia solicitações GET ao dar Enter.
  //   2. Sub-rota 'hello': Adiciona o sufixo no final do prefixo do Controller.
  //      Combinação Final: /home + /hello = http://localhost:3000/home/hello
  // - Contexto do Transcript: Se você remover ou comentar esta linha @Get, o NestJS não
  //   encontra manipulador para a requisição e devolve "Cannot GET /home/hello" (Status 404 Not Found).
  @Get('hello') // Método da solicitação -> Ler (Read) - cRud

  // ⚙️ MÉTODO DA CLASSE (MANIPULADOR DA ROTA)
  // - O que CONTROLA: É a função executada assim que a rota 'GET /home/hello' é chamada.
  // - O ': string' é a tipagem do TypeScript garantindo que a função deve retornar um texto.
  getHello(): string {

    // 💬 return 'Qualquer Coisa'; ➔ CONTROLA A RESPOSTA FINAL DO SERVIDOR
    // - O que CONTROLA: O valor exato devolvido para a tela do navegador.
    // - Contexto do Transcript: O professor altera este retorno para demonstrar que o texto
    //   devolvido aqui é o que o NestJS envia na resposta HTTP com Status 200 (OK).
    return 'Qualquer Coisa';
  }
}