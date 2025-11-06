// Default global volume (max)
var globalVolume = 1.0;

// =====================
// Audio Control
// =====================

function toggleAudio(x, y) {
    if (muteButton.clicked(x, y) && !muted) {
        // Pausing depending on state
        if (currentState == state.PLAYMATCH) {
            matchingMusic.pause();
        } else if (currentState == state.PLAYSORT) {
            sortingMusic.pause();
        } else {
            backgroundMusic.pause();
        }

        muted = true;
        muteButton.image = unmuteImg;
    } 
    else if (muteButton.clicked(x, y) && muted) {
        // Resuming depending on state
        if (currentState == state.PLAYMATCH) {
            matchingMusic.play();
        } else if (currentState == state.PLAYSORT) {
            sortingMusic.play();
        } else {
            backgroundMusic.play();
        }

        muted = false;
        muteButton.image = muteImg;
    }
}

// Toggle with M key
function toggleMute() {
    muted = !muted;

    if (muted) {
        // Pause all tracks
        backgroundMusic.pause();
        matchingMusic.pause();
        sortingMusic.pause();
        muteButton.image = unmuteImg;
    } else {
        // Resume the correct one
        if (currentState === state.PLAYMATCH) {
            matchingMusic.play();
        } else if (currentState === state.PLAYSORT) {
            sortingMusic.play();
        } else {
            backgroundMusic.play();
        }

        muteButton.image = muteImg;
    }
}

function setVolume(value) {
    globalVolume = value;
    backgroundMusic.volume = value;
    matchingMusic.volume = value;
    sortingMusic.volume = value;
    buttonSound.volume = value;
    tileFlipSound.volume = value;
    tileMatchSound.volume = value;
}

// Initialize audio volumes
setVolume(globalVolume);

// Create and initialize volume slider
function createVolumeControl() {
    const container = document.createElement('div');
    container.style.textAlign = 'center';
    container.style.margin = '10px';

    const label = document.createElement('label');
    label.textContent = 'Volume:';
    label.setAttribute('for', 'volumeSlider');
    
    const slider = document.createElement('input');
    slider.type = 'range';
    slider.id = 'volumeSlider';
    slider.min = '0';
    slider.max = '100';
    slider.value = '100';
    slider.style.width = '200px';
    slider.style.marginRight = '10px';


    // Create percentage display
    const percentageDisplay = document.createElement('span');
    percentageDisplay.id = 'volumePercentage';
    percentageDisplay.textContent = '100%';
    percentageDisplay.style.display = 'inline-block';
    percentageDisplay.style.minWidth = '50px';
    percentageDisplay.style.marginLeft = '10px';
    percentageDisplay.style.fontSize = '14px';
    percentageDisplay.style.fontFamily = 'Arial, sans-serif';
    percentageDisplay.style.color = '#000';
    percentageDisplay.style.verticalAlign = 'middle';

    slider.addEventListener('input', function(e) {
        const percentage = e.target.value;
        setVolume(percentage / 100); // Convert 0-100 to 0-1 range
        percentageDisplay.textContent = Math.round(percentage) + '%';
    });
    
    // Also update when volume is changed through other means
    slider.addEventListener('change', function(e) {
        const percentage = e.target.value;
        percentageDisplay.textContent = Math.round(percentage) + '%';
    });

    container.appendChild(label);
    container.appendChild(slider);
    container.appendChild(percentageDisplay);

    // Insert after canvas
    const canvas = document.getElementById('myCanvas');
    canvas.parentNode.insertBefore(container, canvas.nextSibling);
}

createVolumeControl();

// Make audio functions globally accessible
window.toggleMute = toggleMute;
window.setVolume = setVolume;