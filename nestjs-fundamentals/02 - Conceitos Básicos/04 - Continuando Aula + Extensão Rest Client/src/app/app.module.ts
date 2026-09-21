import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ConceptsManualModule } from '../concepts-manual/concepts-manual.module.js';
import { ConceptsCliModule } from '../concepts-cli/concepts-cli.module.js';

/**
 * ===================================================================================
 * 🏙️ O QUE É UM MÓDULO A 200%? (A Analogia da Empresa e seus Departamentos)
 * ===================================================================================
 * Pense em uma **Grande Empresa**:
 * - A empresa inteira é dividida em departamentos (Financeiro, RH, TI, Vendas). 
 * - Cada departamento tem sua própria equipe (Controllers) e suas próprias ferramentas internas (Services).
 * - O **AppModule** é a **Matriz Central (Diretoria)**. É ele quem gerencia, conecta 
 *   e dá permissão para que os departamentos (outros módulos) operem juntos dentro da mesma aplicação.
 * 
 * Sem os módulos, a sua aplicação seria uma favela de arquivos soltos sem organização. 
 * O Módulo agrupa tudo o que pertence ao mesmo contexto de negócio (coesão máxima).
 * ===================================================================================
 */

// @Module(): O Decorator que transforma uma classe TypeScript comum em um Módulo oficial do NestJS.
@Module({
  
  /**
   * 🔗 IMPORTS: A REDE DE CONEXÕES ENTRE OS BAIRROS
   * - O que é: É aqui que o AppModule avisa: "Eu preciso importar e ter acesso 
   *   a tudo o que foi construído dentro do ConceptsManualModule e do ConceptsCliModule".
   * - ⚠️ ALerta de Erro Crítico: Se você criar um módulo novo, um controller ou um service 
   *   e **esquecer de importá-lo aqui** (ou no seu respectivo módulo), o NestJS vai ficar "cego" 
   *   e retornará um erro 404 (Not Found) ou falha de dependência, porque ele simplesmente 
   *   não sabe que aquele código existe no ecossistema da aplicação!
   */
  imports: [ConceptsManualModule, ConceptsCliModule],
  
  /**
   * 🚪 CONTROLLERS: AS PORTAS DE ENTRADA (OS RECEPCIONISTAS)
   * - O que é: O array onde registramos todos os Controllers que pertencem exclusivamente a este módulo.
   * - Na prática: O NestJS olha para este array e diz: "Ok, vou registrar todas as rotas 
   *   HTTP (GET, POST, etc.) que estão mapeadas no AppController para que fiquem ativas na aplicação".
   */
  controllers: [AppController],
  
  /**
   * 🧠 PROVIDERS: A CASA DAS REGRAS DE NEGÓCIO (OS SERVICES)
   * - O que é: O array onde registramos os Services (e outras ferramentas de suporte) 
   *   que fazem parte deste módulo.
   * - Na prática: É o que permite que o sistema de Injeção de Dependências do NestJS 
   *   instancie e entregue os services automaticamente dentro dos construtores dos controllers deste módulo.
   */
  providers: [AppService],
  
  /**
   * 📦 EXPORTS: A VITRINE / COMPARTILHAMENTO EXTERNO
   * - O que é: Define quais Services (ou módulos) deste arquivo podem ser **compartilhados** 
   *   caso outro módulo de fora decida importá-lo.
   * - Por que está vazio aqui? Como o `AppModule` é a raiz de tudo (a ponta final da árvore), 
   *   ele não precisa exportar nada para ninguém, pois ele comanda o topo da hierarquia.
   */
  exports: [],
})
export class AppModule {}