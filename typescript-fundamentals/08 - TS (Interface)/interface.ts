// Interface is a way to define the structure of an object in TypeScript. It allows you to specify the properties and their types that an object should have.

interface Person{
    name:string,
    age:number,
    height?:number // Height is an optional property, because of the ?
    hello: () => void // hello is a method that returns void
}

const person: Person = {
    name: "Tiago",
    age: 26,
    hello: function () {
        console.log(this.name + " says hello!");
    }
}

person.hello(); // Output: Tiago says hello!

// Extends Interfaces

interface Employee extends Person { 
    employeeId: number;
}

// The extends keyword is used to create a new interface Employee that inherits from the Person interface. This means that the Employee interface will have all the properties of the Person interface (name, age, heigth, hello) plus the additional properties employeeId.

const worker: Employee = {
    name: "Tiago",
    age: 26,
    height: 1.75,
    employeeId: 12345,
    hello: function () {
        console.log(this.name + " says hello!");
    }
}
