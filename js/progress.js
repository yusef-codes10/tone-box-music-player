
// the bar
const bar = document.querySelector('.bar');

let progress = 0;
let intervalId = null;

// each time the music passes we increemnt

// we cannot just export interval cuz it will run when imported
// we have to create a function that does that duh!

export function startProgress() {
    console.log('progress started');
    console.log(bar);
    if (intervalId === null) return;

    intervalId = setInterval(() => {
    progress += 10;

    bar.style.width = progress + '%';

    if (progress > 100) {
        stopProgress();
    }
}, 1000);
}

export function stopProgress() {
    clearInterval(intervalId);
    intervalId = null;
}