import { NestFactory } from '@nestjs/core';
import { AppModule, ObserveInstrument } from './app.module.js';

/**
 * ===================================================================================
 * 🚀 O ARQUIVO MAIN.TS (O PONTO DE ENTRADA / ENTRYPOINT DA APLICAÇÃO)
 * ===================================================================================
 * O `main.ts` é o primeiro arquivo executado quando a aplicação NestJS inicia.
 * Sua responsabilidade é instanciar a aplicação a partir do Módulo Raiz (`AppModule`) 
 * e colocar o servidor HTTP no ar escutando requisições.
 * ===================================================================================
 */

/**
 * 🔄 FUNÇÃO BOOTSTRAP():
 * Função assíncrona responsável por orquestrar a inicialização (o "boot") do sistema.
 * Por convenção padrão do ecossistema NestJS, essa função sempre se chama `bootstrap()`.
 */
async function bootstrap() {
  
  /**
   * 🏗️ NestFactory.create():
   * Instancia e monta a aplicação NestJS em memória.
   * 
   * - 1º Parâmetro (`AppModule`): É o Módulo Raiz. O NestJS lê a partir dele toda a árvore 
   *   de dependências (módulos, controllers, services e providers).
   * 
   * - 2º Parâmetro (`{ instrument: ObserveInstrument }`): Objeto de opções de inicialização.
   *   A propriedade `instrument` ativa recursos de instrumentação/observabilidade no NestJS 
   *   (como telemetria, medição de métricas de performance ou integração com o NestJS Devtools).
   */
  const app = await NestFactory.create(AppModule, {
    instrument: ObserveInstrument,
  });

  /**
   * 🌐 app.listen():
   * Inicia o servidor HTTP para escutar requisições recebidas.
   * 
   * - `process.env.PORT`: Tenta ler a porta definida nas variáveis de ambiente do servidor.
   * - `?? 3000`: Operador de Coalescência Nula (Nullish Coalescing). Se `process.env.PORT` 
   *   não estiver definida (for `null` ou `undefined`), ele assume a porta `3000` por padrão.
   */
  await app.listen(process.env.PORT ?? 3000);
}

/**
 * ⚡ EXECUÇÃO DA APLICAÇÃO (TOP-LEVEL AWAIT):
 * Invoca a função `bootstrap()`. Em ambientes configurados com ES Modules (ESM) recentes, 
 * o TypeScript/Node permite o uso do `await` no escopo global do arquivo, dispensando 
 * a necessidade de usar `.then()` ou IIFE (Expressão de Função Invocada Imediatamente).
 */
await bootstrap();
