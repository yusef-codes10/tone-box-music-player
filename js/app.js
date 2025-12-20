import {bgmList} from './bgm.js'

// using event delegation for the buttons
const btnContainer = document.querySelector('.media-btns');
console.log(btnContainer);

let currentMusicId = 0;

btnContainer.addEventListener('click', e => {
    // ! we have to use closest() method
    const btn = e.target.closest('.btn');
    if (!btn) return;

    console.log(btn);
    if (e.target.closest('.backward-step-btn')) {
        console.log('yes, that\'s backward!');
    }    
    if (e.target.closest('.backward-btn')) {
        console.log('yes, that\'s btn backward-btn!');
    }    
    if (e.target.closest('.play-btn')) {
        console.log('yes, that\'s play-btn!');
        playMusic();
    }    
    if (e.target.closest('.forward-btn')) {
        console.log('yes, that\'s forward-btn!');
    }    
    if (e.target.closest('.forward-step-btn')) {
        console.log('yes, that\'s forward-step-btn!');
    }
})

function playMusic() {
    // playing the music here, 1st one
    // const currentMusic = bgmList.find(m => m.id === 'armor-hero-main');
    const currentMusic = bgmList[currentMusicId];
    currentMusic.ost.play();
    console.log(currentMusic);
    console.log(bgmList[0]);
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
    currentMusicId++;
}

function previousMusic() {
    currentMusicId--;
}