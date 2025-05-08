//ПЕРЕМЕННЫЕ
let heroImg = window.document.querySelector('#hero-img');
heroImg.onclick = (event) => {
    event.preventDefault();
}
let imgBlock = window.document.querySelector('#img-block');
let canvas = window.document.querySelector('#canvas');
let fsBtn = window.document.querySelector('#fsBtn');
fsBtn.onclick = () => {
    if(window.document.fullscreen) {
        window.document.exitFullscreen();
    } else {
        canvas.requestFullscreen();
    }
}
let Position = 0;
let imgBlockPosition = 0;
//ФУНКЦИИ
const rightHandler = () => {
    heroImg.style.transform = "scale(1,1)";
    Position = Position + 1;
    imgBlockPosition = imgBlockPosition + 1;
    if (Position > 7) {
        Position = 0;
    }
    heroImg.style.left = `-${Position * 288}px`;
    imgBlock.style.left = `${imgBlockPosition * 20}px`;
}
const leftHandler = () => {
    heroImg.style.transform = "scale(-1,1)";
    Position = Position + 1;
    imgBlockPosition = imgBlockPosition - 1;
    if (Position > 7) {
        Position = 0;
    }
    heroImg.style.left = `-${Position * 288}px`;
    imgBlock.style.left = `${imgBlockPosition * 20}px`;
}	

// ОБРАБОТЧИКИ СОБЫТИЙ
let timer = null;
let x = 0;
let halfWidth = window.screen.width / 2;
let onTouchStart = (event) => {
    clearInterval(timer);
    x = (event.type === 'mousedown') ? event.screenX : event.touches[0].screenX;
    timer = setInterval(() => {
        (x > halfWidth) ? rightHandler() : leftHandler();
    }, 130);
}
let onTouchEnd = (event) => {
    clearInterval(timer);
}

window.onmousedown = onTouchStart;
window.ontouchstart = onTouchStart;

window.onmouseup = onTouchEnd;
window.ontouchend = onTouchEnd;	
