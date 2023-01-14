// explicit types ---> used when we don't want to initialize the variable but we want to specify the type of the variable
var character;
var age;
var isLoggedin;
// age = 'shadab'; // error
age = 13;
// arrays
var stringArray = []; // best to initialize with empty array
stringArray = ['shadab', 'ali', 'ahmed'];
// union types
var mixedArray = []; // only need to put the type of the array in the parenthesis
mixedArray.push('shadab');
mixedArray.push(13);
mixedArray.push(true);
console.log(mixedArray);
var id; // no need to put the type of the variable in the parenthesis
// objects
var shadab;
shadab = { name: 'shadab', age: 20 };
// shadab = ''; // error
shadab = []; // no error as array is also an object
var shadab2;
// shadab2 = {name: 'shadab', age: 20}; // error as gamer is missing
shadab2 = { name: 'shadab', age: 20, gamer: true };
