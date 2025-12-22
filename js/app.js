import {bgmList} from './bgm.js'

// using event delegation for the buttons
const btnContainer = document.querySelector('.media-btns');
const musicTitle = document.querySelector('.music-title');


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
        playMusic();
    }    
    if (e.target.closest('.forward-btn')) {
        console.log('yes, that\'s forward-btn!');
    }    
    if (e.target.closest('.forward-step-btn')) {
        console.log('yes, that\'s forward-step-btn!');
        nextMusic();
    }
})

function playMusic() {
    // playing the music here, 1st one
    // const currentMusic = bgmList.find(m => m.id === 'armor-hero-main');
    const currentMusic = bgmList[currentMusicId];
    currentMusic.ost.play();
    console.log(currentMusic);
    console.log(bgmList[0]);

    // calling the display music
    displayMusicTitle(currentMusicId);
}

function stopMusic() {
    const currentMusic = bgmList[currentMusicId];
    currentMusic.ost.pause();
    currentMusic.currentTime = 0;
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

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
        stopMusic(currentMusicId);
    }
})

function displayMusicTitle() {
    // updating the whole state
    const items = musicTitle.querySelectorAll('.title-dynamic');
    // items is a node list now
    items.forEach(
        item => item.remove()
    );

    const currentMusic = bgmList[currentMusicId];
    const titleSpan = document.createElement('p');
    titleSpan.classList.add('title-dynamic');
    titleSpan.textContent = currentMusic.title;
    musicTitle.append(titleSpan);
    
}

// next plans
// TODO 1- call the stop function when you click one the next/previous music
// TODO 2- call the show function when you click on the next/show (dynamic UI FeedBack)
// TODO 3- get rid of the args, this is global scope variable
// TODO 4- add image & and more info
// TODO 5- add a music bar and a time, use audio.length property if there's one