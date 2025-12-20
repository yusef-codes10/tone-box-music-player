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
        previousMusic();
    }    
    if (e.target.closest('.backward-btn')) {
        console.log('yes, that\'s btn backward-btn!');
    }    
    if (e.target.closest('.play-btn')) {
        console.log('yes, that\'s play-btn!');
        playMusic(currentMusicId);
    }    
    if (e.target.closest('.forward-btn')) {
        console.log('yes, that\'s forward-btn!');
    }    
    if (e.target.closest('.forward-step-btn')) {
        console.log('yes, that\'s forward-step-btn!');
        nextMusic(currentMusicId);
    }
})

function playMusic(id) {
    // playing the music here, 1st one
    // const currentMusic = bgmList.find(m => m.id === 'armor-hero-main');
    const currentMusic = bgmList[id];
    currentMusic.ost.play();
    console.log(currentMusic);
    console.log(bgmList[0]);
}

function stopMusic() {
    audio.pause();
    audio.currentTime = 0;
}

function pauseMusic() {
    
}

function moveForward() {
    
}

function moveBackward() {
    
}

function nextMusic() {
    // we have to make sure to not get out of bounds
    if (currentMusicId < bgmList.length - 1) {
        currentMusicId++;
    } else {
        currentMusicId = 0;
    }
    console.log(currentMusicId);
}

function previousMusic() {
    if (currentMusicId <= 0) {
        currentMusicId = bgmList.length - 1;
    } else {
        currentMusicId--;
    }
    console.log(currentMusicId);
}