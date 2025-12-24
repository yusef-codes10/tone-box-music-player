
// the bar
export const bar = document.querySelector('.bar');
import {bgmList} from './bgm.js';
console.log(bgmList[0].ost.duration);

let progress = 0;
let intervalId = null;

// each time the music passes we increemnt

// we cannot just export interval cuz it will run when imported
// we have to create a function that does that duh!

export function startProgress() {
    // The bug was in this condition, it's '!==' not '==='
    if (intervalId !== null) return; // prevent duplicates

    intervalId = setInterval(() => {
        progress += 1;
        bar.style.width = progress + '%';

        if (progress >= 100) {
            stopProgress();
        }
    }, 1000);
}

export function stopProgress() {
    clearInterval(intervalId);
    intervalId = null;
}
