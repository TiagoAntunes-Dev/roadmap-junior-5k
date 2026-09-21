import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service.js';

/**
 * ===================================================================================
 * 🏛️ O QUE É UM CONTROLLER? (Explicação a 110%)
 * ===================================================================================
 * Pense no Controller como o **Recepcionista de um Hotel de Luxo**:
 * - Quando o cliente (navegador/REST Client) chega fazendo uma Requisição HTTP, é o 
 *   Controller quem o atende na porta de entrada.
 * - Ele identifica a rota, valida o que o cliente quer e coordena a resposta.
 * - PORÉM, o recepcionista NÃO arruma os quartos ou faz cálculos complexos sozinho: 
 *   ele delega o trabalho pesado para a equipe especializada (o Service).
 * ===================================================================================
 */

// @Controller('home'): Define o prefixo global da URL para todas as rotas desta classe.
// Qualquer rota aqui dentro exigirá obrigatoriamente: http://localhost:3000/home/...
@Controller('home')
export class AppController {

  /**
   * 💉 INJEÇÃO DE DEPENDÊNCIA NO CONSTRUCTOR:
   * O NestJS injeta automaticamente o AppService aqui. 
   * - private readonly: Mantém o serviço seguro, privado e somente para leitura nesta classe.
   * O Controller foca 100% apenas no protocolo HTTP, deixando as regras de negócio para o Service.
   */
  constructor(private readonly appService: AppService) {}

  // ---------------------------------------------------------------------------------
  // ⚡ ROTA 1: GET /home/hello
  // ---------------------------------------------------------------------------------
  // @Get('hello'): Mapeia requisições HTTP do tipo GET (Read/Leitura) para a sub-rota 'hello'.
  // Rota Final Completa: Prefixo da Classe (/home) + Sub-rota (/hello) => http://localhost:3000/home/hello
  @Get('hello')
  getHello(): string {
    // Retorna uma string direta (o NestJS converte automaticamente para HTTP 200 OK com o texto).
    return 'Qualquer Coisa';
  }

  // ---------------------------------------------------------------------------------
  // ⚡ ROTA 2: GET /home/exemplo
  // ---------------------------------------------------------------------------------
  // @Get('exemplo'): Mapeia outra rota GET dentro do mesmo controller.
  // Rota Final Completa: http://localhost:3000/home/exemplo
  @Get('exemplo')
  exemplo() : string {
    /**
     * 🔄 DELEGAÇÃO PARA O SERVICE:
     * Aqui o Controller cumpre seu papel perfeito: em vez de calcular ou buscar dados 
     * diretamente, ele chama o AppService para executar a lógica de negócio e apenas 
     * devolve o resultado ao cliente.
     */
    return this.appService.getHello();
  }
}