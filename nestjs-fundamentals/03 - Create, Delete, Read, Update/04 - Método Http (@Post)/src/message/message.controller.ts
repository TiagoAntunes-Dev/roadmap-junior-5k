import { Controller, Get, Param, Post } from '@nestjs/common';


@Controller('message')
export class MessageController {

  /**
   * ⚡ ROTA 1: ENCONTRAR TODOS OS RECADOS (READ - ALL)
   * - Endpoint: GET http://localhost:3000/message
   */
  @Get()
  findAll() {
    return 'Essa rota retorna todos os Recados!';
  }

  /**
   * ⚡ ROTA 2: ENCONTRAR UM RECADO POR ID (READ - ONE)
   * - Endpoint: GET http://localhost:3000/message/1
   */
  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Essa rota retorna o recado pro ID ${id}`;
  }

  /**
   * ⚡ ROTA 3: CRIAR UM NOVO RECADO (CREATE)
   * - Endpoint: POST http://localhost:3000/message
   * 
   * 💡 CONCEITOS IMPORTANTES DA AULA:
   * 
   * 1. MÉTODO HTTP POST:
   *    - Enquanto o `GET` é utilizado para LER dados, o `POST` é o verbo HTTP padronizado 
   *      para CRIAR novos recursos no servidor/banco de dados.
   * 
   * 2. REUSO DE ROTAS E RECURSOS (MÉTODO + ENDPOINT):
   *    - Uma requisição HTTP é definida pelo conjunto: [MÉTODO HTTP] + [ENDPOINT].
   *    - Por isso, `GET /message` e `POST /message` apontam para o mesmo recurso `/message`,
   *      mas como usam verbos HTTP diferentes, o NestJS consegue roteá-los para métodos diferentes.
   * 
   * 3. REGRAS DO JAVASCRIPT/TYPESCRIPT:
   *    - Cada rota mapeada precisa ter um NOME DE MÉTODO ÚNICO na classe (`findAll`, `findOne`, `create`).
   *    - Métodos com o mesmo nome na mesma classe geram erro de compilação.
   * ===================================================================================
   */
  @Post()
  create() {
    return 'Essa rota cria um recado';
  }
}