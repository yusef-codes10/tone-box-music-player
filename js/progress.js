
// the bar
const bar = document.querySelector('.bar');

let progress = 0;

// each time the music passes we increemnt

export const interval = setInterval(() => {
    progress += 10;

    bar.computedStyleMap.width = progress + '%';

    if (progress > 100) {
        clearInterval(interval);
    }
}, 1000);
