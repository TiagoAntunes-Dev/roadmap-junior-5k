// Functions

// function add(x : number, y: number){
   // if (x == 0) {
        // return "invalid"; 
        // This will cause a TypeScript error because the return type is specified as number
   // }

   // return x + y;
// }

function add(x: number, y: number): number {
    return x + y;
}

// Declaration of the function; Allow to know better what to do in the function, and what to return

add(2, 4);

const resultado = add(2, 4);

console.log(resultado); // 6

// Advanced Function Types

function mul(x: number, y: number): number {
    return x * y;
}

function div(x: number, y: number): number {
    return x / y;
}

function applyFunc(
    funcs: ((x: number, y: number) => number)[],
    values: [number, number][]
): number[] {
    const results: number[] = [];

    for (let i = 0; i < funcs.length; i++) {
        const args = values[i];
        const result = funcs[i](args[0], args[1]);
        results.push(result);
    }

    return results;
}

applyFunc([mul, div], [[1,2], [3,4]]);