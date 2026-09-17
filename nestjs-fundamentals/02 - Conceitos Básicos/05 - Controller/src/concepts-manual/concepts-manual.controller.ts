import { Controller, Get } from "@nestjs/common";

@Controller('conceitos-manuais')
export class ConceptsManualController {

    @Get()

    home () : string {
        return 'Aula sobre Controller';
    }
}