import {bgmList} from './bgm.js'
import { startProgress, stopProgress } from "./progress.js";

// using event delegation for the buttons
const btnContainer = document.querySelector('.media-btns');
const musicTitle = document.querySelector('.music-title');


let currentMusicId = 0;

// this is the volume step
let step  = 0.1;

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
    startProgress();
}


function stopMusic() {
    pauseMusic();
    pauseMusic().ost.currentTime = 0;
}

function pauseMusic() {
    const currentMusic = bgmList[currentMusicId];
    currentMusic.ost.pause();
    return currentMusic;
}

function moveForward() {
    
}

function moveBackward() {
    
}

function nextMusic() {
    // stop the current playing music
    stopMusic();

    // we have to make sure to not get out of bounds
    if (currentMusicId < bgmList.length - 1) {
        currentMusicId++;
    } else {
        currentMusicId = 0;
    }
    console.log(currentMusicId);

    // display the next music title
    displayMusicTitle();
}

function previousMusic() {
    // ! there is a bug | it only stops when the id is reset to zero
    // ? call it before updatignt the state
    // stop the current playing music
    stopMusic();

    if (currentMusicId <= 0) {
        currentMusicId = bgmList.length - 1;
    } else {
        currentMusicId--;
    }
    console.log(currentMusicId);

    // display the previous music title
    displayMusicTitle();
}

function volumeUp() {
    const audio = bgmList[currentMusicId].ost;
    audio.volume = Math.min(1, audio.volume + step);
}

function volumeDown() {
    const audio = bgmList[currentMusicId].ost;
    audio.volume = Math.max(0, audio.volume - step);
}

function skipForward() {
    
}

function skipBackward() {
    
}

// esc stop music
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
        stopMusic(currentMusicId);
    }
})

// arrowDown to invoke the volumeDown()
document.addEventListener('keydown', e => {
    if (e.key === 'ArrowDown') {
        console.log('key down');
        volumeDown();
    }
})

// aroowUp keyDown event
document.addEventListener('keydown', e => {
    if (e.key === 'ArrowUp') {
        console.log('Arrow Up');
        volumeUp();
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

// ! 4 & 5 left
// TODO 4- add image & and more info
// TODO 5- add a music bar and a time, use audio.length property if there's one

// TODO 6- volume down, volume up
// TODO 7- jumping forward/going backward