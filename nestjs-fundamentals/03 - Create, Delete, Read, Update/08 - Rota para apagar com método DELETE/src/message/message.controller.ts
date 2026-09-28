import { Controller, Get, Param, Post, Body, HttpCode, HttpStatus, Patch, Delete } from '@nestjs/common';

@Controller('message')
export class MessageController {

  /**
   * ⚡ ROTA 1: ENCONTRAR TODOS OS RECADOS (READ - ALL)
   */
  @HttpCode(HttpStatus.OK)
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
   */
  @HttpCode(HttpStatus.CREATED)
  @Post()
  create(@Body() body: any) {
    return body;
  }

  /**
   * ⚡ ROTA 4: ATUALIZAR UM RECADO (UPDATE)
   * - Endpoint: PATCH http://localhost:3000/message/1
   * 
   * 💡 CONCEITOS IMPORTANTES DA AULA (CRUD e PATCH vs PUT):
   * 
   * 1. CRUD: 
   *    - C: Create (POST)
   *    - R: Read (GET - Todos ou por ID)
   *    - U: Update (PATCH / PUT)
   *    - D: Delete (DELETE)
   * 
   * 2. PATCH vs PUT:
   *    - PATCH: Atualiza PARCIALMENTE um recurso. Você envia apenas os campos 
   *      que deseja alterar (ex: apenas trocar a mensagem).
   *    - PUT: Atualiza o recurso INTEIRO. Exige o envio do objeto completo.
   *    - Escolha: O padrão utilizado neste curso é o PATCH, por ser mais flexível.
   * 
   * 3. JUNÇÃO DE CONCEITOS (@Param + @Body):
   *    - Para atualizar, precisamos saber O QUE vamos atualizar: `@Param('id')`.
   *    - E também QUAIS DADOS vamos inserir: `@Body()`.
   * 
   * 4. SPREAD OPERATOR (...body):
   *    - O retorno `{ id, ...body }` utiliza o operador de espalhamento (spread) do Javascript.
   *    - Ele "desempacota" as chaves do JSON recebido no body e junta com a variável `id`
   *      dentro de um novo objeto de resposta.
   */
  @Patch(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return { 
      id, 
      ...body 
    };
  }

  /**
   * ⚡ ROTA 5: DELETAR UM RECADO (DELETE)
   * - Endpoint: DELETE http://localhost:3000/message/10
   * 
   * 💡 CONCEITOS IMPORTANTES DA AULA (FINALIZANDO O CRUD):
   * 
   * 1. MÉTODO HTTP DELETE:
   *    - Utilizado para remover recursos do servidor.
   *    - Assim como GET (por ID) e PATCH, ele exige o parâmetro dinâmico na URL (`:id`)
   *      para saber exatamente qual registro deve ser apagado.
   * 
   * 2. NOMENCLATURA DO MÉTODO (remove vs delete):
   *    - O instrutor nomeou o método da classe como `remove()` em vez de `delete()`.
   *    - Motivo: `delete` é uma palavra reservada no JavaScript (usada para deletar 
   *      chaves de objetos, ex: `delete obj.propriedade`). Embora seja permitido usar 
   *      como nome de método em classes, evitar o uso previne confusões visuais e de sintaxe.
   * 
   * 3. CONCLUSÃO DO CRUD:
   *    - Agora temos a estrutura completa de roteamento para Create, Read, Update e Delete!
   *    - Próximo passo: Criar um "Service" para manipular dados reais e não apenas strings.
   */
  @Delete(':id')
  remove(@Param('id') id: string) {
    return `Essa rota APAGA o recado pro ID ${id}`;
  }
}