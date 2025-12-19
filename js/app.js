console.log("js has been loaded!");

// using event delegation for the buttons
const btnContainer = document.querySelector('.media-btns');
console.log(btnContainer);

btnContainer.addEventListener('click', e => {
    if (e.target.classList.contains('btn')) {
        console.log('yes, that\'s your target!');
    }
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