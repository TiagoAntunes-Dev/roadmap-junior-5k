import { Module } from '@nestjs/common';
import { MessageController } from './message.controller.js';
import { MessageService } from './message.service.js';

/**
 * ===================================================================================
 * 📦 MESSAGE MODULE (REGISTRO DE DEPENDÊNCIAS DO MÓDULO)
 * ===================================================================================
 */
@Module({
  // Mapeia os controladores que lidam com as rotas HTTP deste módulo
  controllers: [MessageController],

  /**
   * 💡 ARRAY PROVIDERS:
   * - Registra os serviços, repositórios e auxiliares que pertencem a este módulo.
   * - Sem registrar o `MessageService` aqui, o NestJS gera o erro:
   *   "Nest can't resolve dependencies of the MessageController...".
   */
  providers: [MessageService]
})
export class MessageModule {}
