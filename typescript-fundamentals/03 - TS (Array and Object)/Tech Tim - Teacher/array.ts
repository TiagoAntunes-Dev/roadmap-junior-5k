// Array is a collection of elements of the same type. In TypeScript, you can define an array using the following syntax:

// [type][]

// Always define what is inside the array.

var arr: number[] = [1,2,3];

let arr2: string[] = ["Hello", "World"];

// Mixing types (such as strings and numbers in the same array) is not recommended, as it breaks IntelliSense.

// Other thing you can do is a Nested Array using[][] 

let nested: string[][] = [["Hello", "World",], ["TypeScript", "is", "awesome"]];

var mxArr = [["This is", 1], ["Mixed", 2], ["Array", 3]]; // This is a mixed array, but it is not recommended to use mixed types in arrays.

mxArr[0]?.length

