import { Injectable } from '@nestjs/common';

/**
 * ===================================================================================
 * 🧠 CONCEITO DO TRANSCRIPT SOBRE @Injectable():
 * "Essa classe precisa ter um decorator, que é chamado de Injectable.
 * Este Injectable indica para o Nest que essa classe é injetável. 
 * Ela vai participar do sistema de injeção de dependências do Nest."
 * ===================================================================================
 */
@Injectable()
export class ConceptsCliService {

    /**
     * ===============================================================================
     * 🧠 CONCEITO DO TRANSCRIPT SOBRE A FUNÇÃO DO SERVICE:
     * "No JS/TS, um service é basicamente uma camada onde a gente vai colocar as regras 
     * de negócio da nossa aplicação, ou seja, a lógica da nossa aplicação.
     * O ideal é que você tenha uma classe específica para fazer determinadas coisas.
     * cálculos matemáticos, converter dados para JSON, etc.
     * Para a gente evitar essa complexidade dentro do Controller, a gente delega 
     * essas tarefas para dentro de um service!"
     * ===============================================================================
     */
    testandoServiceCli() {
        // Retorna a string processada pela regra de negócio do serviço.
        return 'Testando Service Cli(Concepts-Cli-Service.ts)';
    }
}