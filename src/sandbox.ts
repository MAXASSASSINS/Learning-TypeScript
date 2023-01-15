// let greet: Function

// example 1
let greet: (a: string, b: string) => void;
greet = (name: string, greeting: string) => {
    console.log(`${name} says ${greeting}`);
}

greet('shadab', 'hello');


// example 2
let calc: (a: number, b: number, c: string) => number;

calc = (numOne: number, numTwo: number, action: string) => {
    if (action === 'add') {
        return numOne + numTwo;
    } else {
        return numOne - numTwo;
    }
}

// example 3
let loggDetails: (obj: {name: string, age: number}) => void;

type personDetail = {name: string, age: number};

loggDetails = (person: personDetail) => {
    console.log(`${person.name} is ${person.age} years old`);
}

console.log(loggDetails({name: 'shadab', age: 20}));

