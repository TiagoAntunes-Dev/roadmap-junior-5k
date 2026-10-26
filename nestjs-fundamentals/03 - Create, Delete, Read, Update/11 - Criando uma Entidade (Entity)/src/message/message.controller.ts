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
  Query 
} from '@nestjs/common';
import { MessageService } from './message.service.js';

@Controller('message')
export class MessageController {

  /**
   * 🏗️ Injeção de dependência do Service no Controller.
   */
  constructor(private readonly messageService: MessageService) {}

  /**
   * ⚡ ROTA 1: LISTAR TODOS OS RECADOS
   */
  @HttpCode(HttpStatus.OK)
  @Get()
  findAll(@Query() pagination: any) {
    const { limit = 10, offset = 0 } = pagination;
    return this.messageService.findAll();
  }

  /**
   * ⚡ ROTA 2: BUSCAR UM RECADO POR ID
   */
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.messageService.findOne(id);
  }

  /**
   * ⚡ ROTA 3: CRIAR UM NOVO RECADO
   */
  @HttpCode(HttpStatus.CREATED)
  @Post()
  create(@Body() body: any) {
    return this.messageService.create(body);
  }

  /**
   * ⚡ ROTA 4: ATUALIZAR UM RECADO
   */
  @Patch(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return this.messageService.update(id, body);
  }

  /**
   * ⚡ ROTA 5: DELETAR UM RECADO
   */
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.messageService.delete(id);
  }
}