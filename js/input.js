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

    document.addEventListener("keydown", keyDownHandler, false);
}

window.registerInputListeners = registerInputListeners;
