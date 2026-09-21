import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ConceptsManualModule } from '../concepts-manual/concepts-manual.module.js';
import { ConceptsCliModule } from '../concepts-cli/concepts-cli.module.js';

// O AppModule é o "Módulo Raiz". A responsabilidade dele é carregar 
// basicamente a aplicação inteira e conectar todos os outros módulos.
@Module({
  // IMPORTS: É aqui que avisamos ao NestJS quais outros módulos existem.
  // Se você não importar seu módulo novo aqui, ele não será carregado!
  imports: [ConceptsManualModule, ConceptsCliModule],
  
  // CONTROLLERS: Quem vai receber as requisições HTTP (GET, POST, etc.)
  controllers: [AppController],
  
  // PROVIDERS: Onde fica a regra de negócio (Services) e conexão com banco.
  providers: [AppService],
  
  // EXPORTS: O que este módulo permite que outros módulos usem dele.
  // (Como este é o módulo raiz, geralmente o exports fica vazio).
  exports: [],
})
export class AppModule {}