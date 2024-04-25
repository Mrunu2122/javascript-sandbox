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

person.name = 'Kalpit Thakur';
person['isStudent'] = false;

delete person.age;

person.hasGirlfriend = true;

person.greet = function() {
    console.log(`Hello, my name is ${this.name}`);
};

x = person;

console.log(x);