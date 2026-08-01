const promise1 = Promise.resolve('Hello World');
const promise2 = 14;

const promise3 = new Promise((resolve) => {
    setTimeout(resolve, 2000, 'Goodbye');
});

const promise4 = fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json());

// Executa tudo ao mesmo tempo
Promise.all([promise1, promise2, promise3, promise4])
    .then(values => console.log(values));