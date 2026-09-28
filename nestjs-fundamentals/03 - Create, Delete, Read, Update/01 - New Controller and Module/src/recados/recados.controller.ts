import { Controller, } from '@nestjs/common';

/**
 * - Comando para criar via CLI: `nest generate controller recados` (ou `nest g co recados --no-spec`)
 * - @Controller('recados'): Define o recurso base/prefixo na URL: http://localhost:3000/recados
 */
@Controller('recados')
export class RecadosController {

  /*
   ⚡ ROTA 1: ENCONTRAR TODOS OS RECADOS (READ - ALL)
   */

  findAll() {
    return 'Essa rota retorna todos os Recados!';
  }

  /*
   ⚡ ROTA 2: ENCONTRAR APENAS UM RECADO (READ - ONE)
   */
  
  findOne() {
    return 'Essa rota retorna um Recado!';
  }
}
