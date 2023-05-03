const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

let box1 = document.querySelector(".box1");
let box2 = document.querySelector(".box2");
let thumbBox = document.createElement("div");
thumbBox.classList.add("thumbBox");
box2.appendChild(thumbBox);

images.forEach((elemento, indice) => {
    // Crea un div per contenere l'immagine, il titolo e il testo
    let slide = document.createElement("div");
    slide.classList.add("slide");
    // Nascondi tutte le slide tranne la prima
    if (indice > 0) {
        slide.classList.add("hidden");
    }
    box1.appendChild(slide);

    // Crea l'immagine
    let img = document.createElement("img");
    img.src = `./${elemento.image}`;
    slide.appendChild(img);

    // Crea il titolo
    let title = document.createElement("h2");
    title.textContent = elemento.title;
    slide.appendChild(title);

    // Crea il testo
    let text = document.createElement("p");
    text.textContent = elemento.text;
    slide.appendChild(text);

    // Crea la miniatura
    let thumb = document.createElement("img");
    thumb.src = elemento.image;
    thumb.classList.add("thumb");
    // Attiva l'opacità e il bordo per la prima miniatura
    if (indice == 0) {
        thumb.classList.add("activeThumb");
    }
    thumbBox.appendChild(thumb);
});


let slides = document.getElementsByClassName("slide");
let thumbs = document.getElementsByClassName("thumb");
let btnBack = document.querySelector(".btn-primary_1");
let btnNext = document.querySelector(".btn-primary_2");
let immagineCorrente = 0;

btnBack.addEventListener("click", function () {
    if (immagineCorrente > 0) {
        immagineCorrente--;
    } else {
        immagineCorrente = slides.length - 1;
    }

    for (let i = 0; i < slides.length; i++) {
        const slide = slides[i];

        if (i == immagineCorrente) {
            slide.classList.remove("hidden");
        } else {
            slide.classList.add("hidden");
        }
    }

    // ciclo while
    let i = 0;
    while (i < thumbs.length) {
        const thumb = thumbs[i];

        if (i == immagineCorrente) {
            thumb.classList.add("activeThumb");
        } else {
            thumb.classList.remove("activeThumb");
        }
        i++;
    }
});

    
btnNext.addEventListener("click", function () {
    if (immagineCorrente < slides.length - 1) {
        immagineCorrente++;
    } else {
        immagineCorrente = 0;
    }

    for (let i = 0; i < slides.length; i++) {
        const slide = slides[i];

        if (i == immagineCorrente) {
            slide.classList.remove("hidden");
        } else {
            slide.classList.add("hidden");
        }
    }


    // ciclo while
    let i = 0;
    while (i < thumbs.length) {
        const thumb = thumbs[i];

        if (i == immagineCorrente) {
            thumb.classList.add("activeThumb");
        } else {
            thumb.classList.remove("activeThumb");
        }
        i++;
    }
})


