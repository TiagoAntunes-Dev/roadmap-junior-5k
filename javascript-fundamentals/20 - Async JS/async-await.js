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

// Cria post com PROMISE (necessário pro await)
function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const error = false;

            if (!error) {
                resolve();
            } else {
                reject('Error: Something went wrong');
            }

        }, 2000);
    });
}

// Async/Await
async function init() {
    try {
        await createPost({
            title: 'Post Three',
            body: 'This is post Three'
        });

        getPosts(); // só roda depois do await
    } catch (err) {
        console.log(err);
    }
}

init();