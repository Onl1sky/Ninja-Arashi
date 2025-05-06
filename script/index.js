//Date
let heroImg = window.document.querySelector('#hero-img');
let rightButton = window.document.querySelector('#right');
let leftButton = window.document.querySelector('#left');
let Position = 0;

// Functile
const rightHandler = () => {
    Position = Position + 1;
    heroImg.style.left = `${Position*288}px`
    //hero.style.left = `${Position}px`;
}
const leftHandler = () => {
    Position = Position - 1;
    heroImg.style.left = `${Position*288}px`
    //hero.style.left = `${Position}px`;
}

//Indeplinerea functie
rightButton.onclick = rightHandler;
leftButton.onclick = leftHandler;