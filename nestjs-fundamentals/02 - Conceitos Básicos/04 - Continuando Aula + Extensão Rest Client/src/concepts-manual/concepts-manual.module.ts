import { Module } from '@nestjs/common';

// O decorator @Module é o que transforma uma classe comum TypeScript 
// em um Módulo de verdade que o NestJS consegue entender e carregar.
@Module({
  // Como este é um módulo "burro" (vazio) por enquanto, não temos
  // controllers, providers ou imports configurados aqui dentro.
})
export class ConceptsManualModule {}