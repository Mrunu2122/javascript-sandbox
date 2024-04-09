// Ways to declare a variable 
// var, let, const

let firstName = 'Mrunal';
let lastName = 'Soshte';
let age = 30;

console.log(firstName, lastName, age);

// Naming conventions
// - Only letters, numbers, underscores and dollar signs
// - can't start with a number

// Multi word formatting
// firstName = camelCase
// first_name = underscore
// FirstName = pascalCase
// firstname = lowercase

// Re-assigning Variables
age = 31;

console.log(age);

let score;
score = 1;

console.log(score);

if(true) {
    score = score + 1;
}

console.log(score);

const x = 100;

const arr = [1, 2, 3, 4];

arr.push(5);

console.log(arr);

const person = {
    name: 'Mrunal'
};

person.name = 'kalpit';
person.email = 'veerkalpit@gmail.com';
console.log(person);

// Declare multiple values at once
let a, b, c;
 const d = 10,
 e = 20,
 f = 30;

 console.log(d);