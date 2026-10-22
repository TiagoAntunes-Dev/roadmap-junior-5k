import { Controller, Get, Param, Post, Body, HttpCode, HttpStatus, Patch, Delete, Query } from '@nestjs/common';

@Controller('message')
export class MessageController {

  /**
   * ⚡ ROTA 1: ENCONTRAR TODOS OS RECADOS (READ - ALL)
   */
  @HttpCode(HttpStatus.OK)
  @Get()
  findAll(@Query () pagination : any) {
    const {limit = 10, offset = 0} = pagination;
    return `Essa rota retorna todos os Recados. Limit = ${limit} e Offset = ${offset}`;
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
   * ⚡ ROTA 4: ATUALIZAR UM RECADO (UPDATE) - Endpoint: PATCH http://localhost:3000/message/1
   */
  @Patch(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return { 
      id, 
      ...body 
    };
  }

  /**
   * ⚡ ROTA 5: DELETAR UM RECADO (DELETE) - Endpoint: DELETE http://localhost:3000/message/10
   */
  @Delete(':id')
  remove(@Param('id') id: string) {
    return `Essa rota APAGA o recado pro ID ${id}`;
  }
}