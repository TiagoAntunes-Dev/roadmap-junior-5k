import { Controller, Get } from '@nestjs/common';

@Controller('concepts-cli')
export class ConceptsCliController {

    @Get()
    
    home () : string {
        return 'Testando Controller Cli';
    }
}