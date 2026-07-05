// Modules 

// Import 

import { add, sub} from './util.js';

const resultAdd = add(1, 2);
const resultSub = sub(5, 3);

console.log(`Result of addition: ${resultAdd}`);
console.log(`Result of subtraction: ${resultSub}`);

// Default Import

import anything from './util.js';

// The name of the default import can be anything you want, as it is not tied to the exported name in the module.

console.log(anything()); // Output: "test"