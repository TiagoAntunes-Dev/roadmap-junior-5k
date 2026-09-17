/**
 * ===================================================================================
 * 📍 CONTEXTO DO TRANSCRIPT (NestJS - Controller & Rotas):
 * ===================================================================================
 * No NestJS, o Controller é responsável por receber as requisições HTTP do cliente.
 * Cada rota é composta por:
 *   1. Recurso Base (definido no @Controller): ex: /home
 *   2. Sub-recurso / Rota (definido no @Get): ex: /hello ou /exemplo
 *   3. Método HTTP: no caso, GET (usado para LER / Read dados no servidor).
 * ===================================================================================
 */

// 📍 IMPORTAÇÃO DOS DECORADORES DO NESTJS
// import: palavra-chave do ES6/TypeScript para trazer recursos de fora.
// { Controller, Get }: extrai apenas os decoradores Controller e Get do pacote.
// '@nestjs/common': biblioteca base do NestJS onde ficam os decoradores de rota.
import { Controller, Get } from '@nestjs/common';

// 🛑 @Controller('home') ➔ CONTROLA O RECURSO BASE (ROTA PAI)
// - @: indica que Controller é um Decorator (função de metaprogramação).
// - ('home'): define o prefixo da URL. Todas as rotas desta classe virão depois de /home.
// - Contexto da Aula: Se estivesse vazio @Controller(), a rota base seria a raiz '/'.
//   Ao colocar 'home', a URL base vira: http://localhost:3000/home
@Controller('home')

// 📦 CLASSE DO CONTROLADOR
// - export: permite que a classe seja importada no AppModules (app.module.ts).
// - class: declara a classe AppController que agrupa as rotas do recurso 'home'.
export class AppController {

  // // constructor(private readonly appService: AppService) {}
  // ^ Linha comentada com //: O professor desativou temporariamente o serviço (AppService)
  //   para focar unicamente no funcionamento dos Controllers e Rotas.

  // ---------------------------------------------------------------------------------
  // ⚡ ROTA 1: GET /home/hello
  // ---------------------------------------------------------------------------------
  // - @Get('hello'): Mapeia o método HTTP GET para a sub-rota 'hello'.
  //   Rota Completa = Prefixo da Classe (/home) + Sub-rota (/hello) => /home/hello
  // - Contexto da Aula: GET indica intenção de LER dados (Read no CRUD).
  @Get('hello') // Método da solicitação -> Ler (Read) - cRud

  // - getHello(): Nome da função que o NestJS executa quando acionado em GET /home/hello.
  // - : string: Tipagem TypeScript garantindo que a resposta será um texto.
  getHello(): string {

    // - return 'Qualquer Coisa': A resposta final enviada ao cliente com HTTP Status 200 OK.
    return 'Qualquer Coisa';
  }

  // ---------------------------------------------------------------------------------
  // ⚡ ROTA 2: GET /home/exemplo (NOVA ROTA CRIADA NA AULA)
  // ---------------------------------------------------------------------------------
  // - @Get('exemplo'): Mapeia uma segunda rota do tipo GET nesta mesma classe.
  //   Rota Completa = Prefixo da Classe (/home) + Sub-rota (/exemplo) => /home/exemplo
  // - Contexto da Aula: O professor criou esta rota para provar que uma mesma classe
  //   pode ter múltiplos métodos respondendo a sub-rotas diferentes sob o mesmo controller /home.
  @Get('exemplo')

  // - exemplo(): Nome do método handler para a rota de exemplo.
  // - : string: Garante retorno do tipo texto.
  exemplo() : string {

    // - return 'Exemplo de rota': O texto retornado especificamente para a rota /home/exemplo.
    return 'Exemplo de rota';
  }
}