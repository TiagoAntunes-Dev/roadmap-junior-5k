// The Boolean type you can simply choose between true or false. It is used to represent logical values.

let isActive: boolean = true; // Explicitly declaring a variable with a type annotation

let isInactive = false; // Implicitly declaring a variable without a type annotation, TypeScript infers that isInactive is a boolean

let x : boolean; // Using the Boolean constructor to convert a number to a boolean value. In this case, 1 is truthy, so x will be true.

x = true; // Assigning a boolean value to x