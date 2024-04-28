const library = [
    {
       title:'Problem Of The Rupee',
       author: 'Dr.B.R.Ambedkar',
       status: {
        own: true,
        reading: false,
        read: false
        }, 
    },
    {
        title:'It Starts With Us',
        author: 'Coollen Hoover',
        status: {
         own: true,
         reading: false,
         read: false
         },
     },
     {
        title:'Why Not Me',
        author: 'Anubhav Agrawal',
        status: {
         own: true,
         reading: false,
         read: false
         },
     },
];

// Step 2
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

// Step 3
const { title: firstBook } = library[0];
;
console.log(firstBook);

// Step 4
const libraryJSON = JSON.stringify(library);

console.log(libraryJSON);