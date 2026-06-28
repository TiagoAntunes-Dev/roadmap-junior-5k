// A tuple is an array where you know the exact size and the exact type of each position.

// Coordinate pair x,y

const coord: [number, string] = [1,"Learning Tuples"] ;
console.log(coord[1]) // Output: Learning Tuples (String)
console.log(coord[0]) // Output: 1 (Number)

// This syntax defines a tuple with two elements, both of which are numbers. The first element represents the x-coordinate, and the second element represents the y-coordinate.

// More Elements Inside

let tupler: [number, number, number] = [1,2,3];

// Tuples can also be used to represent more complex data structures, such as a point in 3D space or a date with a specific format.

// Tuple inside of an array

const coords: [number, number][] = [
    [1,2],
    [-1,3]
];

coords:[0][1]
