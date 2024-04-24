let x;

const person = {
    name: 'Mrunal Soshte',
    age: 20,
    isStudent: true,
    address: {
        street: 'Mukt Jeevan Ashram road',
        city: 'Vasind',
        state: 'Maharashtra'
    },
    hobbies: ['music', 'dance'],
};

x = person.name;
x = person['age'];
x = person.address.state;
x = person.hobbies[0];

console.log(x);