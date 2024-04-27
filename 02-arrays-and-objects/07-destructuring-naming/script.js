const firstName = 'Mrunal';
const lastName = 'Soshte';
const age = 30;

const person = {
    firstName: firstName,
    lastName : lastName,
    age : age,
};

console.log(person.age);

// Destructuring

const todo = {
id: 1,
title: 'Take out trash',
user: {
    name: 'Kalpit'
}
};

const {id, title}= todo;

console.log(id, title);