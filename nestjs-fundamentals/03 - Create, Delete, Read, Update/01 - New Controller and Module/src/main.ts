import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module.js';

async function inicia() {
  // O NestFactory cria a instância da aplicação.
  // Repare que ele carrega APENAS o AppModule (Módulo Raiz).
  // Ele não precisa conhecer os outros módulos, pois o AppModule já faz isso.
  const app = await NestFactory.create(AppModule);
  
  // Define a porta onde o servidor vai rodar (neste caso, porta 3000)
  await app.listen(process.env.PORT ?? 3000);
}
await inicia();