// This file is for the progress bar logic
export const progressTime = document.querySelector('.progress-time');

// the progress bar functionality
export const bar = document.querySelector('.bar');


let musicDuration = 0;
export function setMusicDuration(id) {
    musicDuration = id;
}

export function getMusicDuraion() {
    return musicDuration;
}

let currentMusicTime = 0;
export function setCurrentMusicTime(id) {
    currentMusicTime = id;
}

export function getCurrentMusicTime() {
    return currentMusicTime;
}

