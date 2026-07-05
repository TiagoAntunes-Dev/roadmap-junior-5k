// NameSPace.ts

namespace MyNamespace {
    export class MyClass {
        public greet(): string {
            return "Hello from MyNamespace!";
        }
    }
}

namespace util {
    export class MyClass {
    }

    export function myFunction() {

    }

    export const NameSpaceVariable = "This is a variable in the util namespace.";

    export interface MyInterface {
        Name: string;
        Ocupation: string;
        Alive: boolean;
    }
}

// Usage of the namespace and its members

const result = util.myFunction(); // Call the function from the util namespace
const myClassInstance = new util.MyClass(); // Create an instance of MyClass from the util namespace