// Exporting a function

// To do that you can use the export keyword before the function declaration. This will make the function available for import in other modules.

export function add(x: number, y: number): number {
    return x + y;
}

export function sub(x: number, y: number): number {
    return x - y;
}

// or export {add, sub}; if the function is already declared.

// Default Export

// You can also use the default keyword to export a single value from a module. This is useful when you want to export a single function or class from a module.

function test() {
    return "test";

}

export default test;