import { Module } from '@nestjs/common';
import { ConceptsCliController } from './concepts-cli.controller.js';
import { ConceptsCliService } from './concepts-cli.service.js';

/**
 * ===================================================================================
 * 🧠 CONCEITO DO TRANSCRIPT SOBRE O REGISTRO NO MÓDULO (PROVIDERS):
 * "Após criar essa classe Service, você precisa informar para o Nest aqui no Module 
 * que você tem essa classe Service e que ela faz parte desse módulo.
 * Você informa qual é o seu service dentro de 'providers'. 
 * Providers é um array onde você coloca os seus services que vai utilizar neste módulo.
 * 
 * ⚠️ O ERRO COMUM EXPLICADO NA AULA:
 * Se você tentar injetar o service sem colocá-lo no providers do módulo, o Nest lança um erro:
 * 'Nest can't resolve dependencies of... Please make sure that the argument at index [0] 
 * is available in the current module context.'
 * Em resumo: o módulo não sabe quem é aquela dependência que você está tentando injetar!"
 * ===================================================================================
 */
@Module({
  controllers: [ConceptsCliController],
  providers: [ConceptsCliService] // <--- O Service DEVE estar aqui para o NestJS conhecê-lo!
})
export class ConceptsCliModule {}
