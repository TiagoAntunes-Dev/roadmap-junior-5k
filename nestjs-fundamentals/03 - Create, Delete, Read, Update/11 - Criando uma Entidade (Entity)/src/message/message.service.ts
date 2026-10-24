import { Injectable } from "@nestjs/common";

/**
 * ===================================================================================
 * 🧠 MESSAGE SERVICE (CAMADA DE REGRAS DE NEGÓCIO E DADOS)
 * ===================================================================================
 * - O Service é responsável por isolar a lógica da aplicação (regra de negócio e 
 *   manipulação de dados) para que o Controller cuide apenas das requisições HTTP.
 * 
 * 💡 DECORATOR @Injectable():
 * - Sinaliza ao NestJS que esta classe é um "Provider" (Provedor).
 * - Permite que a classe seja gerenciada pelo container de Inversão de Controle (IoC) 
 *   e injetada em outros componentes (como Controllers) via Injeção de Dependência.
 * ===================================================================================
 */
@Injectable()
export class MessageService {

  /**
   * Método temporário para testar a comunicação e injeção entre Controller e Service.
   */
  hello() {
    return 'Hello World!';
  }
}