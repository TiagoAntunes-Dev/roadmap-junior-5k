import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  solucionaExemplo() {
    return "Exemplo sobre usar o Service";
  }
}
