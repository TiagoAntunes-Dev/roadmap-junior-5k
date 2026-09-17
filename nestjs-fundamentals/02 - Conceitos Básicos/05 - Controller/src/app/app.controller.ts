import { Controller, Get } from '@nestjs/common';

//   Ao colocar 'home', a URL base vira: http://localhost:3000/home
@Controller('home')

export class AppController {

  // // constructor(private readonly appService: AppService) {}
  // ^ Linha comentada com //: O professor desativou temporariamente o serviço (AppService)
  //   para focar unicamente no funcionamento dos Controllers e Rotas.

  // ---------------------------------------------------------------------------------
  // ⚡ ROTA 1: GET /home/hello
  // ---------------------------------------------------------------------------------
  // - @Get('hello'): Mapeia o método HTTP GET para a sub-rota 'hello'.
  //   Rota Completa = Prefixo da Classe (/home) + Sub-rota (/hello) => /home/hello
  // - Contexto da Aula: GET indica intenção de LER dados (Read no CRUD).
  @Get('hello') // Método da solicitação -> Ler (Read) - cRud

  // - getHello(): Nome da função que o NestJS executa quando acionado em GET /home/hello.
  // - : string: Tipagem TypeScript garantindo que a resposta será um texto.
  getHello(): string {

    // - return 'Qualquer Coisa': A resposta final enviada ao cliente com HTTP Status 200 OK.
    return 'Qualquer Coisa';
  }

  // ---------------------------------------------------------------------------------
  // ⚡ ROTA 2: GET /home/exemplo (NOVA ROTA CRIADA NA AULA)
  // ---------------------------------------------------------------------------------
  // - @Get('exemplo'): Mapeia uma segunda rota do tipo GET nesta mesma classe.
  //   Rota Completa = Prefixo da Classe (/home) + Sub-rota (/exemplo) => /home/exemplo
  // - Contexto da Aula: O professor criou esta rota para provar que uma mesma classe
  //   pode ter múltiplos métodos respondendo a sub-rotas diferentes sob o mesmo controller /home.
  @Get('exemplo')

  // - exemplo(): Nome do método handler para a rota de exemplo.
  // - : string: Garante retorno do tipo texto.
  exemplo() : string {

    // - return 'Exemplo de rota': O texto retornado especificamente para a rota /home/exemplo.
    return 'Exemplo de rota';
  }
}