// arrays
var names = ['shadab', 'ali', 'ahmed'];
// names = 'logan' // error 
names.push('khan');
// names.push(70); // error
// names.push(true); // error
// names[0] = 3; // error
var mixedArray = ['shadab', 70, true];
mixedArray.push('ali');
mixedArray.push(70);
mixedArray.push(false);
console.log(mixedArray);
mixedArray[0] = 3;
console.log(mixedArray);
// objects
var person = {
    name: 'shadab',
    age: 20,
    gamer: true
};
console.log(person);
// person.name = 30; // error
// similarly once the object is defined we can't add new properties to it
// person.skills = ['coding', 'gaming']; // error
person = {
    name: 'ali',
    age: 30,
    gamer: false
};
console.log(person);
