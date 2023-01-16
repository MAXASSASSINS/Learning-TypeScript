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

