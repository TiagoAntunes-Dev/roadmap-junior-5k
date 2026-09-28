import { Controller, Get, Param } from '@nestjs/common';


@Controller('message')
export class MessageController {

  /**
   * ⚡ ROTA 1: ENCONTRAR TODOS OS RECADOS (READ - ALL)
   * - Endpoint: GET http://localhost:3000/message
   */
  @Get()
  findAll() {
    return 'Essa rota retorna todos os Recados!';
  }

  /**
   * ⚡ ROTA 2: ENCONTRAR UM RECADO POR ID (READ - ONE)
   * - Endpoint: GET http://localhost:3000/message/1
   * 
   * 💡 CONCEITOS IMPORTANTES DA AULA:
   * 1. FUNCIONAMENTO DO `@Param()`:
   *    - `@Param()` (sem argumentos): Retorna um objeto contendo TODOS os parâmetros da rota 
   *      (Exemplo: `{ id: '1', dinamico: 'teste' }`).
   *    - `@Param('id')` (com argumento): Filtra e injeta diretamente apenas o valor da chave 'id'.
   * 
   * 2. TIPO DOS DADOS:
   *    - Por padrão, parâmetros passados via URL chegam SEMPRE como `string` no JavaScript/TypeScript.
   *    - Dica de TS: Dê preferência ao tipo primitivo `string` (com 's' minúsculo) em vez de `String`.
   * 
   * 3. TEMPLATE LITERALS (INTERPOLAÇÃO EM JS):
   *    - Uso de crases `` `...` `` em vez de aspas simples/duplas para concatenar variáveis com a sintaxe `${id}`.
   */
  @Get(':id')
  findOne(@Param('id') id: string) {
    console.log(id);
    return `Essa rota retorna o recado pro ID ${id}`;
  }
}