console.log("js has been loaded!");

// using event delegation for the buttons
const btnContainer = document.querySelector('.media-btns');
console.log(btnContainer);

btnContainer.addEventListener('click', e => {
    console.log(`${e.target} has been clicked`);
    console.log(e.target);
})

function playMusic() {
    
}

function stopMusic() {
    
}

function pauseMusic() {
    
}

function moveForward() {
    
}

function moveBackward() {
    
}

function nextMusic() {
    
}

function previousMusic() {
    
}