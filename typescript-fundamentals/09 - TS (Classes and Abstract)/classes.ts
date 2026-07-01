// Class 

class Person {
    private name: string; // You can only change the name property within the class itself

    protected age: number; // You can change the age property within the class and its subclasses

    public constructor(name: string) { // Public is the default access modifier.
        this.name = name;
        this.age = 21;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}.`);
    }
 
    // Getters allow you to access the private property 'name' from outside the class

    getName(): string {
        if (this.name.length < 2) return "";
        return this.name;
    }

    // Setters allow you to modify the private property 'name' from outside the class, to do this you need to create a method that will set the name property, but you can add some validation to it

    setName(name: string) {
        if (name.length < 5) return
        this.name = name;
    }
}

class Employee extends Person {
    callMe() {
        console.log(`Hello, my name is ${this.getName()} and I am ${this.age} years old.`);
    }
}

const p1 = new Person("Tiago");


p1.greet(); // Output: Hello, my name is Tiago.
p1.name = "Lannister"; // Error: Property 'name' is private and only accessible within class 'Person'.
p1.getName(); // Output: Tiago

// const p2 = new Employee("John");
// p2.callMe(); // Output: Hello, my name is John and I am 21 years old.

