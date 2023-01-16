"use strict";
const anchor = document.querySelector('a'); // ! is a non-null assertion operator means that we are sure that the element is not null
console.log(anchor.href);
// const form  =  document.querySelector('form');
const form = document.querySelector('.new-item-form'); // we are telling typescript that the form is a HTMLFormElement
console.log(form.children);
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
// Classes
class Invoice {
    // readonly name: string
    // private details: string
    // public amount: number
    // constructor(n: string, d: string, a: number){
    //     this.name = n;
    //     this.details = d;
    //     this.amount = a;
    // }
    constructor(name, details, amount) {
        this.name = name;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.name} owes $${this.amount} for ${this.details}`;
    }
}
const inv1 = new Invoice('shadab', 'work on the website', 1000);
const inv2 = new Invoice('mario', 'work on the website', 400);
console.log(inv1, inv2);
let invoices = [];
// invoices.push('hello'); // error
invoices.push(inv1);
invoices.push(inv2);
console.log(invoices);
// inv1.name = 'max'; // error because name is readonly but you can this inside any class method
console.log(inv1);
invoices.forEach(inv => {
    console.log(inv.name, inv.amount, inv.format());
});
