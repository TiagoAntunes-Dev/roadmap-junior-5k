// Array de posts (simula banco)
const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' }
];

// Mostra os posts na tela
function getPosts() {
    setTimeout(() => {
        let output = '';

        posts.forEach((post) => {
            output += `<li>${post.title}</li>`;
        });

        document.body.innerHTML = output;
    }, 1000);
}

// Cria post usando CALLBACK
function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post); // adiciona novo post
        callback(); // executa função depois
    }, 2000);
}

// Execução
createPost({
    title: 'Post Three',
    body: 'This is post Three'
}, getPosts);