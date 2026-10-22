import { Module } from '@nestjs/common';
import { MessageController } from './message.controller.js';

@Module({
  // Registra o controller de recados para que o NestJS mapeie suas rotas HTTP.
  controllers: [MessageController]
})
export class MessageModule {}
