import { Injectable } from "@nestjs/common";

// @Injectable() avisa o NestJS que esta classe pode ser injetada em outros lugares
@Injectable()
export class ConceptsManualService {
    solucionaHome(): string {
        // Camada de regra de negócio / lógica da aplicação
        return "Home do Conceitos Manual Solucionada.";
    }
}