//ПЕРЕМЕННЫЕ
let Position = 0;
let imgBlockPosition = 0;
let direction = 'right';
let hit = false;
let jump = false;
let timer = null;
let x = 0;
let halfWidth = window.screen.width / 2;

let jumpBlock = window.document.querySelector('#jump-block');
let hitBlock = window.document.querySelector('#hit-block');
let heroImg = window.document.querySelector('#hero-img');
let imgBlock = window.document.querySelector('#img-block');
let canvas = window.document.querySelector('#canvas');
let fsBtn = window.document.querySelector('#fsBtn');

heroImg.onclick = (event) => {
    event.preventDefault();
}

jumpBlock.style.top = `${window.screen.height/2 - 144/2}px`;

hitBlock.style.top = `${window.screen.height/2 - 144/2}px`;

fsBtn.onclick = () => {
    if(window.document.fullscreenElement) {
        window.document.exitFullscreen();
    } else {
        canvas.requestFullscreen();
    }
}

jumpBlock.onclick = () => {jump = true};
hitBlock.onclick = () => {hit = true};

//ФУНКЦИИ
const rightHandler = () => {
    heroImg.style.transform = "scale(1,1)";
    Position = Position + 1;
    imgBlockPosition = imgBlockPosition + 1;
    if (Position > 7) {
        Position = 0;
    }
    heroImg.style.left = `-${Position * 288}px`;
    heroImg.style.top = '-100px';
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
    heroImg.style.top = '-100px';
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
    heroImg.style.top = '-420px';
}

const hitHandler = () => {
        switch (direction) {
        case 'right': {
            heroImg.style.transform = "scale(1,1)";
            if (Position > 3) {
                Position = 0;
                hit = false;
            }
            break;
        }
        case 'left': {
            heroImg.style.transform = "scale(-1,1)";
            if (Position > 7) {
                Position = 4;
                hit = false;
            }
            break;
        }
        default: break;
    }
    Position = Position + 1;
    heroImg.style.left = `-${Position * 288}px`;
    heroImg.style.top = '-1000px';
}

const jumpHandler = () => {
        switch (direction) {
        case 'right': {
            heroImg.style.transform = "scale(1,1)";
            if (Position > 8) {
                Position = 0;
                jump = false;
            }
            break;
        }
        case 'left': {
            heroImg.style.transform = "scale(-1,1)";
            if (Position > 8) {
                Position = 2;
                jump = false;
            }
            break;
        }
        default: break;
    }
    Position = Position + 1;
    heroImg.style.left = `-${Position * 288}px`;
    heroImg.style.top = '-1690px';
}

// ОБРАБОТЧИКИ СОБЫТИЙ
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

const lifeCicle = () => {
    timer = setInterval(() => { 
        if (hit) {
            hitHandler();
        } else if (jump) {
            jumpHandler();
        } else {
            standHandler();
        }
    }, 150);
}

const start = () => {
    lifeCicle();
}


start();
