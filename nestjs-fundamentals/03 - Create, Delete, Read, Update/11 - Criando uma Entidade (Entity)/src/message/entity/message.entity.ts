/**
 * ===================================================================================
 * 🏷️ MESSAGE ENTITY (MODELO DE DOMÍNIO)
 * ===================================================================================
 * - A entidade representa o formato estruturado do dado dentro da aplicação.
 * - Serve para garantir tipagem consistente, servindo de base para o Service 
 *   e futuras integrações com bancos de dados (como TypeORM, Prisma, etc.).
 * ===================================================================================
 */


export class Message {
  id: number;
  texto: string;
  de: string;
  para: string;
  lido: boolean;
  data: Date;
}