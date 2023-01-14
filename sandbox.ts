// explicit types ---> used when we don't want to initialize the variable but we want to specify the type of the variable
let character: string;
let age: number;
let isLoggedin: boolean;

// age = 'shadab'; // error
age = 13;

// arrays
let stringArray: string[] = []; // best to initialize with empty array

stringArray = ['shadab', 'ali', 'ahmed'];

// union types
let mixedArray: (string | number | boolean)[] = []; // only need to put the type of the array in the parenthesis
mixedArray.push('shadab');
mixedArray.push(13);
mixedArray.push(true);

console.log(mixedArray);

let id: string | number; // no need to put the type of the variable in the parenthesis


// objects
let shadab: object;
shadab = { name: 'shadab', age: 20 }
// shadab = ''; // error
shadab = []; // no error as array is also an object

let shadab2: {
    name: string,
    age: number,
    gamer: boolean
};

// shadab2 = {name: 'shadab', age: 20}; // error as gamer is missing
shadab2 = {name: 'shadab', age: 20, gamer: true};