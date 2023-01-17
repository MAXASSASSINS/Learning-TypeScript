// interfaces
interface IsPerson {
    name: string;
    age: number;
    speak(a: string): void;
    spend(a: number): number;
}

const me: IsPerson = {
    name: 'shadab',
    age: 20,
    speak(text: string): void {
        console.log(text);
    },
    spend(amount: number): number {
        console.log('I spent', amount);
        return amount;
    }
}

console.log(me);

let someone: IsPerson;

const greetPerson = (person: IsPerson) => {
    console.log('hello', person.name);
}






import { Invoice } from './classes/Invoice.js';

const anchor = document.querySelector('a')!; // ! is a non-null assertion operator means that we are sure that the element is not null

console.log(anchor.href);

// const form  =  document.querySelector('form');

const form = document.querySelector('.new-item-form') as HTMLFormElement; // we are telling typescript that the form is a HTMLFormElement
console.log(form.children);

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber
    );
});

// Classes

const inv1 = new Invoice('shadab', 'work on the website', 1000);
const inv2 = new Invoice('mario', 'work on the website', 400);

console.log(inv1, inv2);

let invoices: Invoice[] = [];
// invoices.push('hello'); // error
invoices.push(inv1);
invoices.push(inv2);
console.log(invoices);

// inv1.name = 'max'; // error because name is readonly but you can this inside any class method
console.log(inv1);


invoices.forEach(inv => {
    console.log(inv.name, inv.amount, inv.format());
})