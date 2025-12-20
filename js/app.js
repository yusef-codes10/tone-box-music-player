import {bgmList} from './bgm.js'

// using event delegation for the buttons
const btnContainer = document.querySelector('.media-btns');
console.log(btnContainer);

btnContainer.addEventListener('click', e => {
    // ! we have to use closest() method
    const btn = e.target.closest('btn');
    console.log(btn);
    if (e.target.classList.contains('btn')) {
        console.log('yes, that\'s your target!');
    }     if (e.target.classList.contains('backward-step-btn')) {
        console.log('yes, that\'s backward!');
    }    if (e.target.classList.contains('backward-btn')) {
        console.log('yes, that\'s btn backward-btn!');
    }    if (e.target.classList.contains('play-btn')) {
        console.log('yes, that\'s play-btn!');
    }    if (e.target.classList.contains('forward-btn')) {
        console.log('yes, that\'s forward-btn!');
    }    if (e.target.classList.contains('forward-step-btn')) {
        console.log('yes, that\'s forward-step-btn!');
    }
})

function playMusic() {
    
}

function stopMusic() {
    
}

function pauseMusic() {
    
}

function moveForward() {
    
}

function moveBackward() {
    
}

function nextMusic() {
    
}

function previousMusic() {
    
}