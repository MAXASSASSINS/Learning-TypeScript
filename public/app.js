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
