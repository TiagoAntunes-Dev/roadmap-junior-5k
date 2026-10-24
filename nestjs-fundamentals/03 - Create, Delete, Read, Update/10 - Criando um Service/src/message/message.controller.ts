import { 
  Controller, 
  Get, 
  Param, 
  Post, 
  Body, 
  HttpCode, 
  HttpStatus, 
  Patch, 
  Delete, 
  Query } 
from '@nestjs/common';
import { MessageService } from './message.service.js';

@Controller('message')
export class MessageController {

  /**
   * 🏗️ INJEÇÃO DE DEPENDÊNCIA VIA CONSTRUTOR:
   * - Ao declarar `private readonly messageService: MessageService` no construtor, 
   *   o NestJS automaticamente instancia e fornece a dependência `MessageService`.
   * - `private readonly`: Garante que a propriedade seja privada da classe e imutável.
   */
  constructor(private readonly messageService: MessageService) {}

  /**
   * ⚡ ROTA 1: ENCONTRAR TODOS OS RECADOS (READ - ALL)
   * - Endpoint: GET http://localhost:3000/message
   */
  @HttpCode(HttpStatus.OK)
  @Get()
  findAll(@Query() pagination: any) {
    // Exemplo do uso dos parâmetros de paginação (Query Params)
    const { limit = 10, offset = 0 } = pagination;
    
    // Delega a resposta para o Service injetado
    return this.messageService.hello();
  }

  /**
   * ⚡ ROTA 2: ENCONTRAR UM RECADO POR ID (READ - ONE)
   */
  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Essa rota retorna o recado pro ID ${id}`;
  }

  /**
   * ⚡ ROTA 3: CRIAR UM NOVO RECADO (CREATE)
   */
  @HttpCode(HttpStatus.CREATED)
  @Post()
  create(@Body() body: any) {
    return body;
  }

  /**
   * ⚡ ROTA 4: ATUALIZAR UM RECADO (UPDATE - PATCH)
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
   */
  @Delete(':id')
  remove(@Param('id') id: string) {
    return `Essa rota APAGA o recado pro ID ${id}`;
  }
}