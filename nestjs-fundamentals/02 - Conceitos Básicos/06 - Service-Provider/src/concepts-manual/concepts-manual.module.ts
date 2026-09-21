import { Module } from '@nestjs/common';
import { ConceptsManualController } from './concepts-manual.controller.js';
import { ConceptsManualService } from './concepts-manual.service.js';

@Module({
  controllers: [ConceptsManualController],
  providers: [ConceptsManualService] // Obrigatório: registra o service aqui para o NestJS conhecê-lo (evita erro de dependência)
})
export class ConceptsManualModule {}