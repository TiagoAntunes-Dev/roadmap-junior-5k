/* ==========================================================
   EXPORT E IMPORT NO TYPESCRIPT
   ========================================================== */

/* =======================
   arquivo: math.ts
   ======================= */

// Exportando uma variável
export const PI = 3.14;

// Exportando uma função
export function add(x: number, y: number): number {
    return x + y;
}

// Exportando uma classe
export class Calculator {
    multiply(x: number, y: number): number {
        return x * y;
    }
}

// Exportando uma interface
export interface User {
    name: string;
    age: number;
}

// Exportando um type
export type ID = string | number;


/* =======================
   arquivo: message.ts
   ======================= */

// Exportação padrão (Default Export)
// Só pode existir UMA por arquivo.
export default function hello() {
    console.log("Olá!");
}


/* =======================
   arquivo: app.ts
   ======================= */

// Importando um Default Export
import hello from "./message";

// Importando exports nomeados
import { PI, add, Calculator, User, ID } from "./math";

// Importando com apelido (alias)
import { add as sum } from "./math";

// Importando TODOS os exports
import * as MathUtils from "./math";

hello();

console.log(PI);
console.log(add(5, 3));
console.log(sum(10, 5));

const calc = new Calculator();
console.log(calc.multiply(4, 6));

const user: User = {
    name: "Tiago",
    age: 20
};

const id: ID = 123;

console.log(user, id);

// Usando import *
console.log(MathUtils.PI);
console.log(MathUtils.add(8, 2));