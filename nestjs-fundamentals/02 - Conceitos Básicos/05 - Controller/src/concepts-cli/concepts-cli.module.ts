import { Module } from '@nestjs/common';
import { ConceptsCliController } from './concepts-cli.controller.js';

// Este módulo faz exatamente a mesma coisa que o manual, 
// a única diferença é que foi gerado automaticamente pelo comando:
// nest generate module concepts-cli
@Module({
  controllers: [ConceptsCliController]
})
export class ConceptsCliModule {}
