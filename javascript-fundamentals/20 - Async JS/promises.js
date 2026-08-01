// Array de posts
const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' }
];

// Mostra posts
function getPosts() {
    setTimeout(() => {
        let output = '';

        posts.forEach((post) => {
            output += `<li>${post.title}</li>`;
        });

        document.body.innerHTML = output;
    }, 1000);
}

// Cria post com PROMISE
function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const error = false; // muda pra true pra testar erro

            if (!error) {
                resolve();
            } else {
                reject('Error: Something went wrong');
            }

        }, 2000);
    });
}

// Execução
createPost({
    title: 'Post Three',
    body: 'This is post Three'
})
.then(getPosts)
.catch(err => console.log(err));