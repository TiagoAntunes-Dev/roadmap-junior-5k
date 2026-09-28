import { Module } from '@nestjs/common';
import { MessageController } from './message.controller.js';

/*
  - Comando para criar via CLI: `nest generate module message` (ou `nest g mo recados`)
  - Contexto da Aula:
    1. Iniciamos a seção de CRUD (Create, Read, Update, Delete).
    2. O recurso "recados" representa a entidade principal do nosso domínio (poderia ser 
       produtos em um e-commerce, artigos em um blog ou receitas em um site).
    3. Para este módulo funcionar no servidor, ele deve ser importado no array `imports` 
       do Módulo Raiz (`AppModule`), limpando ou isolando os módulos de estudo anteriores.
 */

@Module({
  // Registra o controller de recados para que o NestJS mapeie suas rotas HTTP.
  controllers: [MessageController]
})
export class MessageModule {}
