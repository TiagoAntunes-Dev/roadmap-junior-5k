import { Controller, Get, Param, Post, Body, HttpCode, HttpStatus, Patch } from '@nestjs/common';


@Controller('message')
export class MessageController {

  /**
   * ⚡ ROTA 1: ENCONTRAR TODOS OS RECADOS (READ - ALL)
   * - Endpoint: GET http://localhost:3000/message
   * 
   * 💡 CONCEITOS IMPORTANTES DA AULA (HTTP STATUS CODES):
   * 
   * 1. PROTOCOLO HTTP:
   *    - Status Codes são padrões da web (não exclusivos do NestJS) que informam 
   *      o resultado de uma requisição.
   *    - 100 a 199: Informativos.
   *    - 200 a 299: Sucesso (Ex: 200 OK, 201 Created).
   *    - 300 a 399: Redirecionamentos.
   *    - 400 a 499: Erros do Cliente (Ex: 404 Not Found - Rota inexistente).
   *    - 500 a 599: Erros do Servidor (Ex: 500 Internal Server Error).
   * 
   * 2. DECORATOR @HttpCode():
   *    - Permite alterar manualmente o código de status retornado pela rota.
   *    - Por padrão, o NestJS já retorna 200 para @Get e 201 para @Post.
   * 
   * 3. ENUM HttpStatus (BOA PRÁTICA):
   *    - Evite "Magic Numbers" (números soltos no código como 200, 404, etc).
   *    - Utilize o enum `HttpStatus` exportado pelo '@nestjs/common' (ex: HttpStatus.OK).
   *    - Isso torna o código mais legível e menos propenso a erros de digitação.
   */
  @HttpCode(HttpStatus.OK) // Força explicitamente o retorno 200 OK
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
  @HttpCode(HttpStatus.CREATED) // Melhor que @HttpCode(201) por usar o Enum
  @Post()
  create(@Body() body: any) {
    return body;
  }
}