
// the bar
const bar = document.querySelector('.bar');

let progress = 0;

// each time the music passes we increemnt

const interval = setInterval(() => {
    progress += 10;

    bar.computedStyleMap.width = progress + '%';
}, 1000);