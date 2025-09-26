function toggleAudio(x, y)
{
    if(muteButton.clicked(x, y) && !muted)
    {
        if(currentState == state.PLAYMATCH)
        {
            matchingMusic.pause();
        }
        else if(currentState == state.PLAYSORT)
        {
            sortingMusic.pause();
        }
        else
        {
            backgroundMusic.pause();
        }

        muted = true;
        muteButton.image = unmuteImg;
    }
    else if(muteButton.clicked(x, y) && muted)
    {
        if(currentState == state.PLAYMATCH)
        {
            matchingMusic.play();
        }
        else if(currentState == state.PLAYSORT)
        {
            sortingMusic.play();
        }
        else
        {
            backgroundMusic.play();
        }

        muted = false;
        muteButton.image = muteImg;
    }
}

function toggleMute() {
    muted = !muted;
    if (muted) {
        backgroundMusic.pause();
        matchingMusic.pause();
        sortingMusic.pause();
        muteButton.image = unmuteImg;
        muted = true;
    } else {
        if (currentState === state.PLAYMATCH) {
            matchingMusic.play();
        } else if (currentState === state.PLAYSORT) {
            sortingMusic.play();
        } else {
            backgroundMusic.play();
        }
        muted = false;
        muteButton.image = muteImg;
    }
}

window.toggleMute = toggleMute;
