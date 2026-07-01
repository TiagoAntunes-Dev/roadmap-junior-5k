// Abstract Class is a restricted class that cannot be instantiated directly. It is meant to be extended by other classes. 

abstract class Animal {
    // Abstract method (does not have an implementation)
    // Use for Methods that must be implemented in derived classes
    abstract makeSound(duration: number): void;


    move(duration: number) {
        console.log("Moving along... !");
        this.makeSound(duration);
    }
}

class Dog extends Animal {
    makeSound(duration: number): void {
        console.log(`Woof Woof!`);
    }
}

class Cat extends Animal {
    makeSound(duration: number): void {
        console.log(`Meow Meow!`);
    }
}


const dog = new Dog();
dog.move(10); // Output: Moving along... ! Woof Woof!

const cat = new Cat();
cat.move(5); // Output: Moving along... ! Meow Meow!