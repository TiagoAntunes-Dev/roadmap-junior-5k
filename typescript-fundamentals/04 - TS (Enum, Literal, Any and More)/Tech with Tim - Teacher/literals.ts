// Literals

// It occurs when you don't specify that the variable is a generic string, but rather an EXACT string.

let direction: "north" | "south" | "east" | "west";

direction = "hello" // O TS dará erro se você tentar atribuir "Hello".

if(direction == "") // // O autocompletar vai te sugerir apenas esses três números quando você for programar.

let statusCode: 200 | 404 | 201; // O autocompletar vai te sugerir apenas esses três números quando você for programar.


