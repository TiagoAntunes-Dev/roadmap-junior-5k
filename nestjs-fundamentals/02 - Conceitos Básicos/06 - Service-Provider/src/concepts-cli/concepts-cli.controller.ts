import { Controller, Get } from '@nestjs/common';
import { ConceptsCliService } from './concepts-cli.service.js';

@Controller('concepts-cli')
export class ConceptsCliController {

    /**
     * ===============================================================================
     * 🧠 CONCEITO DO TRANSCRIPT SOBRE INJEÇÃO DE DEPENDÊNCIAS NO CONSTRUCTOR:
     * "No Nest a gente trabalha com services usando injeção de dependências. 
     * É como se fosse mágica, o Nest faz muita coisa por baixo dos panos!
     * Para usar o service no controller, a gente cria um constructor:
     * - private: restringe o acesso.
     * - readonly: garante que não será sobrescrito.
     * - conceptsCliService (em camelCase): nome da variável/propriedade local.
     * - ConceptsCliService (em PascalCase): o tipo da classe que estamos injetando.
     * Através dos dois pontos (:), o Nest reconhece o tipo e faz a injeção automática."
     * ===============================================================================
     */
    constructor(private readonly conceptsCliService: ConceptsCliService){}

    @Get()
    home () : string {
        /**
         * ===========================================================================
         * 🧠 CONCEITO DO TRANSCRIPT SOBRE USAR O MÉTODO DO SERVICE:
         * "Agora eu posso simplesmente utilizar o método aqui usando o this.
         * Aponto o método que eu quero utilizar (ex: this.conceptsCliService.testandoServiceCli()) 
         * e ele vai executar esse método lá dentro do service.
         * Você vê que eu delego toda a tarefa de fazer a resposta para dentro do service!"
         * ===========================================================================
         */
        return this.conceptsCliService.testandoServiceCli();
    }
}