let x;

const fruits = ['apple', 'banana', 'orange'];
const berries = ['strawberry', 'blueberry', 'rasberry'];

// fruits.push(berries);

// x = fruits[3][1];

const allFruits = [fruits, berries];

x = allFruits[1][0];

x = fruits.concat(berries);

// Spread Operator (...)
x = [...fruits, ...berries];

// Flatten Arrays
const arr = [1, 2, [3, 4], 5, [6, 7], 8];

console.log(x);

