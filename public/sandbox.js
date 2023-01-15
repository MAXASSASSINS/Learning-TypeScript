"use strict";
let greet = () => {
    console.log('Hello World');
};
// greet = 'shadab'; // error
const display = () => {
    console.log('this is function');
};
display();
const add = (a, b, c) => {
    console.log(a + b);
    console.log(c);
};
add(2, 45);
const subtract = (a, b = 0) => {
    return a - b;
};
let subans = subtract(10, 5); // this will infer the return type of subtract which is number so subans will be number
console.log(subans);
