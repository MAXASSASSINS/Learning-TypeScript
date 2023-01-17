import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
let docOne;
let docTwo;
docOne = new Invoice('shadab', 'web dev', 1250);
docTwo = new Payment('saba', 'dev ops', 2000);
let docs = [];
docs.push(docOne);
docs.push(docTwo);
const me = {
    name: 'shadab',
    age: 20,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log('I spent', amount);
        return amount;
    }
};
console.log(me);
let someone;
const greetPerson = (person) => {
    console.log('hello', person.name);
};
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
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
// Classes
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
