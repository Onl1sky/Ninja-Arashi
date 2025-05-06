let heroImg = window.document.querySelector('#hero-img');
heroImg.onclickc = (event) => {
    event.preventDefault();
}
let imgBlock = window.document.querySelector('#img-block');
let imgIdle = window.document.querySelector('#hero-idle')
let canvas = window.document.querySelector('#canvas');
let fsbtn = window.document.querySelector('#fsBtn')
let Position = 0;
let imgBlockPosition = 0;

fsbtn.onclick = () => {
    if(window.document.fullscreen) {
        window.document.exitFullscreen();
    } else {
        canvas.requestFullscreen();
    }
}

// Functile
const rightHandler = () => {
    heroImg.style.transform = "scale(1,1)";
    Position = Position + 1;
    imgBlockPosition = imgBlockPosition + 1;
    if (Position > 3) {
        Position = 0;
    }
    heroImg.style.left = `-${Position*288}px`;
    imgBlock.style.left = `${imgBlockPosition*20}px`;
}
const leftHandler = () => {
    heroImg.style.transform = "scale(-1,1)";
    Position = Position + 1;
    imgBlockPosition = imgBlockPosition - 1;
    if (Position > 3) {
        Position = 0;
    }
    heroImg.style.left = `-${Position*288}px`
    imgBlock.style.left = `${imgBlockPosition*20}px`;
}

const standHandler = () => {
    imgIdle.style.transform = "scale(1,1)";
    Position = Position + 1;
    if (Position > 3) {
        Position = 0;
    }
    imgIdle.style.left = `-${Position*288}px`;
}

let timer = null;
const lifeCycle = () => {
    timer = setInterval(()=>{
    standHandler();
    }, 150);
}
let x = 0;
let halfWidth = window.screen.width / 2;
let onTouchStart = (event) => {
    clearInterval(timer);
    x = (event.type === 'mousedown') ? event.screenX : x + event.touches
    timer = setInterval(() => {
          (x > halfWidth) ? rightHandler() : leftHandler();
    },130); 
}
let onTouchEnd = (event) => {
    timer = clearInterval(timer);
    lifeCycle();
}
//Indeplinerea functie
window.onmousedown = onTouchStart;
window.ontouchstart = onTouchStart;
window.onmouseup = onTouchEnd;
window.ontouchend = onTouchEnd;
