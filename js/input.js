// Registers DOM event listeners — call after handlers are loaded
function registerInputListeners(){
    document.addEventListener("mousedown", clickHandler, false);
    document.addEventListener("mousedown", mouseDownHandler, false);
    document.addEventListener("mousemove", mouseMoveHandler, false);
    document.addEventListener("mouseup", mouseUpHandler, false);

    document.addEventListener("touchstart", touch2Mouse, true);
    document.addEventListener("touchmove", touch2Mouse, true);
    document.addEventListener("touchend", touch2Mouse, true);

    document.addEventListener("keydown", function(e) {
        if (e.key.toLowerCase() === "m") {
            toggleMute();
        }
    });

    // Map Escape to pause/unpause toggle
    document.addEventListener("keydown", function(e) {
        if (e.key === "Escape" || e.key === "Esc") {
            // Prevent default to avoid closing dialogs or exiting fullscreen unexpectedly
            e.preventDefault();
            if (typeof togglePause === 'function') togglePause();
        }
    });

    document.addEventListener("keydown", keyDownHandler, false);
}

window.registerInputListeners = registerInputListeners;
