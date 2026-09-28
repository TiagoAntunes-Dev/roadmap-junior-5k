import { Controller, Get } from '@nestjs/common';

/**
 * ===================================================================================
 * 🚪 MESSAGE CONTROLLER (PARÂMETROS DINÂMICOS DE ROTA)
 * ===================================================================================
 * - CLI: `nest generate controller message --no-spec` (ou `nest g co message --no-spec`)
 * - @Controller('message'): Define o recurso base na URL (http://localhost:3000/message)
 * ===================================================================================
 */
@Controller('message')
export class MessageController {

  /**
   * ⚡ ROTA 1: ROTA FIXA / ESTÁTICA (READ ALL)
   * - Endpoint: GET http://localhost:3000/message
   * - Mapeia a raiz do controller (sub-rota vazia `@Get()`).
   */
  @Get()
  findAll() {
    return 'Essa rota retorna todos os Recados!';
  }

  /**
   * ⚡ ROTA 2: ROTA DINÂMICA COM PARÂMETRO DE ROTA (READ ONE)
   * - Endpoint: GET http://localhost:3000/message/1 (ou qualquer valor: /message/42, /message/abc)
   * 
   * 💡 CONCEITO DO TRANSCRIPT (PARÂMETROS DINÂMICOS):
   * 1. A sintaxe `:id` (dois-pontos seguidos do nome) avisa ao NestJS que aquele segmento da URL é VARIÁVEL.
   * 2. Evita a necessidade irreal de criar uma rota estática para cada ID existente no banco de dados.
   * 
   * 🔀 POSSIBILIDADES DE COMBINAÇÃO DE ROTAS MOSTRADAS NA AULA:
   * - Múltiplos Dinâmicos: `@Get(':user/:id')` ➔ /message/luis/1
   * - Trecho Fixo + Dinâmico: `@Get('fixo/:id')` ➔ /message/fixo/1 (exige a palavra 'fixo' exata)
   * - Mistura Complexa: `@Get(':user/fixo/:id')` ➔ /message/maria/fixo/10
   * ===================================================================================
   */
  @Get(':id')
  findOne() {
    return 'Essa rota retorna um Recado!';
  }
}