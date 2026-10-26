import { Injectable } from '@nestjs/common';
import { Message } from './entity/message.entity.js';

/**
 * ===================================================================================
 * 🧠 MESSAGE SERVICE (CAMADA DE REGRAS DE NEGÓCIO E DADOS EM MEMÓRIA)
 * ===================================================================================
 * - Simula um repositório de dados utilizando um array em memória antes de 
 *   migrarmos para um banco de dados relacional definitivo.
 * ===================================================================================
 */
@Injectable()
export class MessageService {
  private lastId = 1;
  
  // Base de dados simulada em memória contendo um registro inicial
  private messages: Message[] = [
    {
      id: 1,
      texto: 'A new message has arrived!',
      de: 'Tiago',
      para: 'Dylan',
      lido: false,
      data: new Date(),
    },
  ];

  /**
   * 🔍 Retorna todos os recados armazenados
   */
  findAll() {
    return this.messages;
  }

  /**
   * 🔍 Retorna um recado específico buscando pelo ID.
   * - O operador unário `+` converte a string do parâmetro para número (`+id`).
   */
  findOne(id: string) {
    return this.messages.find((item) => item.id === +id);
  }

  /**
   * ➕ Cria um novo recado incrementando o ID e inserindo no array.
   */
  create(body: any) {
    this.lastId++;

    const id = this.lastId;
    const newMessage = {
      id,
      ...body,
    };

    this.messages.push(newMessage);
    return newMessage;
  }

  /**
   * ✏️ Atualiza um recado existente buscando pelo índice no array.
   */
  update(id: string, body: any) {
    const messageExistIndex = this.messages.findIndex(
      (item) => item.id === +id,
    );

    if (messageExistIndex >= 0) {
      const messageExist = this.messages[messageExistIndex];

      this.messages[messageExistIndex] = {
        ...messageExist,
        ...body,
      };
    }

    return this.messages[messageExistIndex];
  }

  /**
   * 🗑️ Remove um recado do array utilizando o método `splice`.
   */
  delete(id: string) {
    const messageExistIndex = this.messages.findIndex(
      (item) => item.id === +id,
    );

    if (messageExistIndex >= 0) {
      this.messages.splice(messageExistIndex, 1);
    }
  }
}
