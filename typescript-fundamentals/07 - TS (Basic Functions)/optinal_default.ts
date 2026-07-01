
function makeName(firstName: string, lastName: string, middleName?: string): string {
    if (middleName) {
        return `${firstName} + "" + ${middleName} + "" + ${lastName}`;
    }   
    else {
        return `${firstName} + "" + ${lastName}`;
    }
}

const fullName = makeName("John", "Doe"); // The Mistake is that the function makeName expects three parameters, but only two are provided. To fix this, you can either provide a middle name or make the middleName parameter optional by adding a question mark (?) after it in the function definition.

console.log(fullName); // Output: John Doe

function callFunc(func: (f:string, l:string, m?:string) => string, param1: string, param2: string) {
    func(param1, param2);
}

callFunc(makeName, "Tiago", "Antunes");

console.log(callFunc(makeName, "Tiago", "Antunes")); // Output: Tiago Antunes
