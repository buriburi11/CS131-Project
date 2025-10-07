// Event Listeners

// Mouse clicks (game buttons, flipping tiles, etc.)
document.addEventListener("mousedown", clickHandler, false);

// Sorting drag & drop
document.addEventListener("mousedown", mouseDownHandler, false);
document.addEventListener("mousemove", mouseMoveHandler, false);
document.addEventListener("mouseup", mouseUpHandler, false);

// Touch support (maps to mouse events)
document.addEventListener("touchstart", touch2Mouse, true);
document.addEventListener("touchmove", touch2Mouse, true);
document.addEventListener("touchend", touch2Mouse, true);

// Keyboard mute toggle (M)
document.addEventListener("keydown", function(e) {
    if (e.key.toLowerCase() === "m") {
        toggleMute();
    }
});

// Keyboard gameplay (arrows, enter, space, z/x/c/v for sorting)
document.addEventListener("keydown", keyDownHandler, false);


// Game Start
loadAssets();   // from assets.js
draw();         // main game loop
