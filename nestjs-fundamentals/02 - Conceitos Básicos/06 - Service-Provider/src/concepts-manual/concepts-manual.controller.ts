import { Controller, Get } from "@nestjs/common";
import { ConceptsManualService } from "./concepts-manual.service.js";

@Controller('conceitos-manuais')
export class ConceptsManualController {
    // Injeção de Dependência: o NestJS injeta o Service automaticamente no construtor
    constructor(private readonly conceptsManualService: ConceptsManualService) {}

    @Get()
    home() : string {
        // Delega a responsabilidade de gerar a resposta para o Service
        return this.conceptsManualService.solucionaHome();
    }
}