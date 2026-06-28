// Null 

// Is used to explicitly state that something is empty or does not exist.

let result = null; // Result is Null , and we don't expect a value to be assigned to it. It is used to represent the intentional absence of any object value.

result = "With Null the type can be anything, is does not matter, if is either a String, Number, Boolean or any other type.";

// Undefined

// Used as a placeholder. It means the value has not yet been defined, but is expected to be in the future.

let myGoals = undefined; // myGoals is Undefined, and we expect a value to be assigned to it in the future. It is used to represent a variable that has been declared but has not yet been assigned a value.

myGoals = 2;
myGoals = "Be Smart in CS";
myGoals = true;

// Void

// Used for functions that don't return anything. (They might do a console.log, for example, but don't return anything.)

function dizerOla(): void {
    console.log("Olá!");
}

// A função apenas executa algo e não retorna valor.

// Never 

// Used for functions that never return. (They might throw an error, for example, but don't return anything.)

function erro(): never {
    throw new Error("Algo deu errado!");
}

// A função nunca chega ao fim porque o erro interrompe tudo.

