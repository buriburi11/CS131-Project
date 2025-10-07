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