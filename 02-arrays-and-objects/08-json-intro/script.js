const post = {
    id: 1,
    title: 'post One',
    body: 'This is the body',
};

// Convert to JSON String
const str = JSON.stringify(post);

// Parse JSON
const obj = JSON.parse(str);

const posts = [
    {
        id: 2,
        title: 'post Two',
        body: 'This is the body',
    },
];

const str2 = JSON.stringify(posts);

console.log(str2);