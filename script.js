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
let direction = 'right';
//ФУНКЦИИ
const rightHandler = () => {
    heroImg.style.transform = "scale(1,1)";
    Position = Position + 1;
    imgBlockPosition = imgBlockPosition + 1;
    if (Position > 7) {
        Position = 0;
    }
    heroImg.style.left = `-${Position * 288}px`;
    heroImg.style.top = '0px';
    imgBlock.style.left = `${imgBlockPosition * 20}px`;
}
const leftHandler = () => {
    heroImg.style.transform = "scale(-1,1)";
    Position = Position + 1;
    imgBlockPosition = imgBlockPosition - 1;
    if (Position > 7) {
        Position = 1;
    }
    heroImg.style.left = `-${Position * 288}px`;
    heroImg.style.top = '0px';
    imgBlock.style.left = `${imgBlockPosition * 20}px`;
}	

const standHandler = () => {
    switch (direction) {
        case 'right': {
            heroImg.style.transform = "scale(1,1)";
            if (Position > 4) {
                Position = 0;
            }
            break;
        }
        case 'left': {
            heroImg.style.transform = "scale(-1,1)";
            if (Position > 7) {
                Position = 2;
            }
            break;
        }
        default: break;
    }
    Position = Position + 1;
    heroImg.style.left = `-${Position * 288}px`;
    heroImg.style.top = '-300px';
}

// ОБРАБОТЧИКИ СОБЫТИЙ
let timer = null;
const lifeCicle = () => {
    timer = setInterval(() => { 
        standHandler();
    }, 150);
}
let x = 0;
let halfWidth = window.screen.width / 2;
let onTouchStart = (event) => {
    clearInterval(timer);
    x = (event.type === 'mousedown') ? event.screenX : event.touches[0].screenX;
    timer = setInterval(() => {
        if (x > halfWidth) {
            direction = 'right';
            rightHandler();
        }  else { 
            direction = 'left';
            leftHandler();
        }
    }, 130);
}
let onTouchEnd = (event) => {
    clearInterval(timer);
    lifeCicle();
}

window.onmousedown = onTouchStart;
window.ontouchstart = onTouchStart;

window.onmouseup = onTouchEnd;
window.ontouchend = onTouchEnd;	

const start = () => {
    lifeCicle();
}
start();
