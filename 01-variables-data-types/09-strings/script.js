let x;

const name = 'Mrunal';
const age = 20;

x = 'Hello, my name is ' + name + ' and I am ' + age + ' years old';

// Tamplate Literals
x = `Hello, my name is ${name} and I am ${age} years old`;

// String Properties and Methods
const s = new String ('Hello World'); 

x = typeof s;

// x = s.length;

// Access vale by key
x = s[0];

x = s.__proto__;

x = s.toUpperCase();
x = s.toLowerCase();

x = s.charAt(0);

x = s.indexOf('d');

x = s.substring(0, 4);

x = s.substring(7);

x = s.slice(-11, -6);

x = '       Hello World'

x = s.trim();

x = s.replace('World', 'Mrunu');

x = s.includes('Hell');

x = s.valueOf();

x = s.split('');

console.log(x);