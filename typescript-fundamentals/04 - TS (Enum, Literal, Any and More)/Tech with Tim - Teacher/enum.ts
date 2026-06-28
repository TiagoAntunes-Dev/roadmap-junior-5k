// Enum

// Servem para mapear lógicas, evitando ficar digitando "strings soltas" (hardcoding) pelo código

enum Size {
    smallest = 100, // You can also atribuate value to each one
    Medium,
    Large
}

Size.smallest; // This is a literal value of the enum Size

if (size === Size.smallest) {

}


// Strings: 
enum Direction { UP = "CIMA", DOWN = "BAIXO" }

// A vantagem é que, se a área de negócios mandar você mudar a palavra "CIMA" para "NORTE", você muda apenas no Enum, e o resto do sistema inteiro (que usava Direction.UP) continua funcionando perfeitamente sem quebrar.

enum description {
    SmallText = "this is some sub text to"
}

console.log(description.SmallText) // this is some sub text to

// Now if i change the value of SmallText to "this is some sub text to change", the rest of the code that uses description.SmallText will still work without any issues.