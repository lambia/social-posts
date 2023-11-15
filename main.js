const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

//Per ogni post, inserisci il relativo HTML in pagina
posts.forEach(post => {
    let container = document.getElementById("container");
    container.innerHTML += renderPost(post);
});




let likeButtons = document.querySelectorAll(".like-button");
let likeCounters = document.querySelectorAll(".js-likes-counter");

// likeButtons.forEach((btn, i)=> {
for (let i = 0; i < likeButtons.length; i++) {
    const btn = likeButtons[i];
    const counter = likeCounters[i];

    btn.addEventListener("click", function (e) {

        e.preventDefault();

        const likeNumber = parseInt(counter.innerText);

        // if( posts[i].likes == likeNumber ) {}

        console.log("Cliccato sul post con id: ", btn.dataset.postid);

        if (btn.classList.contains("like-button--liked")) {
            //togliere classe mi-piace e decrementa contatore
            btn.classList.remove("like-button--liked");
            counter.innerText = likeNumber - 1;
        } else {
            //aggiungere classe mi-piace e incrementare il contatore

            btn.classList.add("like-button--liked");
            counter.innerText = likeNumber + 1;
        }

    });

}
// });

function renderPost(post) {
    let { content, media, id, likes, created } = post;
    let { image, name } = post.author;

    let result = `<div class="post">
    <div class="post__header">
        <div class="post-meta">                    
            <div class="post-meta__icon">${ getProfilePicture(image, name) }</div>
    <div class="post-meta__data">
        <div class="post-meta__author">${name}</div>
        <div class="post-meta__time">${ convertDate(created) }</div>
    </div>                    
    </div>
    </div>
    <div class="post__text">${content}</div>
    <div class="post__image">
    <img src="${media}" alt="">
    </div>
    <div class="post__footer">
    <div class="likes js-likes">
        <div class="likes__cta">
            <a class="like-button  js-like-button" href="#" data-postid="${id}">
                <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                <span class="like-button__label">Mi Piace</span>
            </a>
        </div>
        <div class="likes__counter">
            Piace a <b id="like-counter-${id}" class="js-likes-counter">${likes}</b> persone
        </div>
    </div> 
    </div>            
    </div>`;


    return result;
}

function getProfilePicture(image, name) {
    let result = "";

    if (image == null) {
        let nomeSeparato = name.split(" ");
        let firstName = nomeSeparato[0];
        let surname = nomeSeparato[1];
        let iniziali = firstName[0] + surname[0];

        result = `<div class="profile-pic-default"><span>${iniziali}</span></div>`;
    } else {
        result = `<img class="profile-pic" src="${image}" alt="${name}">`;
    }

    return result;
}

function convertDate(date) {
    return date.split("-").reverse().join("/");
}