// Values are stored on the stack

const name = 'Mrunal';
const age = 30;

// Reference values are stored on the heap
const person = {
    name: 'Kalpt',
    age: 40
};

let newName = name;
newName = 'kaal';

let newPerson = person;
newPerson.name = 'Mrit';

console.log(name, newName);
console.log(person, newPerson);