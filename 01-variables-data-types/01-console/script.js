console.log(100);

console.log('Hello world!');

const x = 100;

console.log(x);

console.error('Alert');

console.warn('warning');

console.table({name : 'Brad', email : 'brad@gmail.com'});

console.group('simpe');
console.log(x);
console.error('Alert');
console.warn('warning');
console.groupEnd();

const styles = 'padding: 10px; background-color: pink; color: green';

console.log('%cHello world', styles);