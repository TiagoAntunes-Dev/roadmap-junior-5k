import { Module } from '@nestjs/common';
import { ConceptsManualController } from './concepts-manual.controller.js';

// O decorator @Module é o que transforma uma classe comum TypeScript 
// em um Módulo de verdade que o NestJS consegue entender e carregar.
@Module({
  controllers: [ConceptsManualController]
})
export class ConceptsManualModule {}