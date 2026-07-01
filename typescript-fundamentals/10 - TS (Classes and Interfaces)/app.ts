interface Animal {
    speak(): void;
}

// Implementing a interface in a class
class Dog implements Animal {
    private name: string;
    private color: string;

    constructor(name: string, color: string) {
        this.name = name;
        this.color = color;
    }

    speak(): void {
        console.log(`I am ${this.name} and I am  ${this.color}!`);
    }

    test () {
        return 1
    }
}

const dog: Animal = new Dog("Buddy", "Brown");
dog.speak(); // Output: I am Buddy and I am Brown!
dog.test(); // Error: Property 'test' does not exist on type 'Animal'.


class Cat implements Animal {
    speak(): void {
        console.log("Meow!");
    }
}

const cat = new Cat();
const dog2 = new Dog("Lucas", "Black") 

const animals: Animal[] = [dog, cat, dog2];

function makeSound(animal: Animal) {
    animal.speak();
}

// Now anything that implements the Animal interface can be passed to the makeSound function
makeSound(dog); // Output: I am Buddy and I am Brown!

makeSound(cat); // Output: Meow!

// const animal = dog2; // Assigning dog2 to animal variable of type Animal
// animal.speak(); // Output: I am Lucas and I am Black!

// const animal2: Animal = cat; // Assigning cat to animal2 variable of type Animal
// animal2.speak(); // Output: Meow!
