import { Controller, Get, Param, Post, Body } from '@nestjs/common';

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
   * 💡 CONCEITOS IMPORTANTES DA AULA (@Body e Status Codes):
   * 
   * 1. DECORATOR @Body():
   *    - Captura o corpo (payload) enviado pelo cliente na requisição.
   *    - `@Body() body: any` captura o JSON inteiro e o injeta na variável 'body'.
   *    - Assim como no @Param(), você poderia usar `@Body('message')` para extrair 
   *      apenas o valor da chave "message", porém não é tão recomendado pois 
   *      dificulta a validação do objeto completo (veremos mais a frente).
   * 
   * 2. HTTP STATUS CODES (Códigos de Resposta):
   *    - '200 OK': Retorno padrão de sucesso para requisições GET.
   *    - '201 Created': O NestJS é inteligente e altera o status automaticamente para 
   *      201 quando usamos @Post(), sinalizando que um recurso foi criado com sucesso.
   *    - '404 Not Found': Retornado quando tentamos acessar uma rota que não existe.
   * 
   * 3. SERIALIZAÇÃO AUTOMÁTICA:
   *    - O cliente envia texto (JSON). O NestJS converte esse JSON para um objeto JavaScript.
   *    - Quando retornamos o objeto direto (`return body;`), o NestJS converte de volta 
   *      para JSON automaticamente para enviar ao cliente.
   * ===================================================================================
   */
  @Post()
  create(@Body() body: any) {
    // console.log(body); 
    return body; // Retorna o mesmo corpo para o cliente (só para confirmar o recebimento)
  }
}