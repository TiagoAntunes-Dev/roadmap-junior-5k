// String is a collection of words inside colons ('') or multicolon ("")

let myName: string = 'Tiago'; // Explicitly declaring a variable with a type annotation

let myLastName = "Oliveira"; // Implicitly declaring a variable without a type annotation, TypeScript infers that myLastName is a string

// You can use even a number as a String

let myAge = "26";

// We can have a Template String as well

const myFullName = `My name is ${myName} ${myLastName} and I am ${myAge} years old.`; // Template String using backticks (``) and string interpolation with ${}