"use strict";
// let greet: Function
// example 1
let greet;
greet = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
greet('shadab', 'hello');
// example 2
let calc;
calc = (numOne, numTwo, action) => {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
// example 3
let loggDetails;
loggDetails = (person) => {
    console.log(`${person.name} is ${person.age} years old`);
};
console.log(loggDetails({ name: 'shadab', age: 20 }));
