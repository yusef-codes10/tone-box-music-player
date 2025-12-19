const fill = document.querySelector('.bar-fill');

let progress = 0;

const interval = setInterval(() => {
  progress += 10;
  fill.style.width = progress + '%';

  if (progress >= 100) {
    clearInterval(interval);
  }
}, 1000);
