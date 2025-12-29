import {bgmList} from './bgm.js'
import { progressTime, bar
    ,setCurrentMusicTime, setMusicDuration
    ,getCurrentMusicTime, getMusicDuraion
 } from "./progressBar.js";
// import { startProgress, stopProgress,bar } from "./progress.js";

// using event delegation for the buttons
const btnContainer = document.querySelector('.media-btns');
const musicTitle = document.querySelector('.music-title');

const imgContainer = document.querySelector('.music-img');

// const progressTime = document.querySelector('.progress-time');

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
    loadImg();
    // playing the music here, 1st one
    // const currentMusic = bgmList.find(m => m.id === 'armor-hero-main');
    const currentMusic = bgmList[currentMusicId];
    currentMusic.ost.play();
    console.log(currentMusic);
    console.log(bgmList[0]);
    console.log(currentMusic.ost.duration);


    // calling the display music
    displayMusicTitle(currentMusicId);

    // setting 
    setMusicDuration(currentMusic.ost.duration);

    // ! attach the time event her
    currentMusic.ost.addEventListener('timeupdate', 
        () => {
                setCurrentMusicTime(currentMusic.ost.currentTime);
                // use this for the progress percentage
                // console.log(Math.trunc(currentMusic.ost.currentTime * 10) / 10);
                // use this for displaying it 
                // console.log(currentMusic.ost.currentTime.toFixed(1));
                // console.log(currentMusicTime);
                progressBarV2();
                updateBar();
        }
    )
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
    loadImg();
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
    loadImg();
}

function volumeUp() {
    const audio = bgmList[currentMusicId].ost;
    audio.volume = Math.min(1, audio.volume + step);
}

function volumeDown() {
    const audio = bgmList[currentMusicId].ost;
    audio.volume = Math.max(0, audio.volume - step);
}

function loadImg() {
    // we need a nodeList to use foreach
    const imgs = document.querySelectorAll('.img-todelete');
    imgs.forEach(
        // pass a callback or function expresion
        images => images.remove()
    )
    // we are going to load the img for each music
    // pay attention to the state
    const img = document.createElement('img');
    img.src = bgmList[currentMusicId].img;
    img.classList.add('img-todelete')
    imgContainer.append(img);

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

    // ! this function should be passed as a callback to the timeupdate
    // ! event that's an audio event

    // ! 1- User click event (click, mousedown, keydown)
    // ! 2- Time related event (setInterval, counterm, traffic lights)
    // ! 3- Event driven states (audio, object changing events)


// progress bar V2, since I know the timeupdate event
function progressBarV2() {
    // clear the entire state
    const timeTexts = document.querySelectorAll('.text-todelete');
    timeTexts.forEach(
        item => item.remove()
    )
    // create the new element
    // TODO: I have to turn it into text instead using this '00:00'
    const timeText = document.createElement('p');
    timeText.classList.add('text-todelete');
    timeText.textContent = bgmList[currentMusicId].ost.currentTime.toFixed(1);
    progressTime.append(timeText);
}

function updateBar() {
    const barWidth = (getCurrentMusicTime() / getMusicDuraion()) * 100;
    bar.style.width = barWidth + '%';
    console.log(barWidth);
}


// TODO extract other functionality, stop watch logic, and clickable bar (width -> currentTime and vise-versa)