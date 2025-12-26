// This file is for the progress bar logic
const progressTime = document.querySelector('.progress-time');

// the progress bar functionality
const bar = document.querySelector('.bar');


let musicDuration = 0;
function setMusicDuration(id) {
    musicDuration = id;
}

function getMusicDuraion() {
    return musicDuration;
}

let currentMusicTime = 0;
function setCurrentMusicTime(id) {
    currentMusicTime = id;
}

function getCurrentMusicTime() {
    return currentMusicTime;
}

export {progressTime, bar, setCurrentMusicTime, getCurrentMusicTime, setMusicDuration, getMusicDuraion};
