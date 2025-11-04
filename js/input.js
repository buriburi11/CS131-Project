function keyDownHandler(e) {
    // prevent page scroll on arrows/space
    if (["ArrowRight","ArrowLeft","ArrowDown","ArrowUp","Enter"," ", "Spacebar"].includes(e.key)) {
        e.preventDefault(); // stops the browser from scrolling when these keys are pressed
    }

    // Number keys for Level Select (1, 2, 3) 
    if (
    (currentState === state.MATCHLEVEL || currentState === state.SORTLEVEL) &&
    ["1","2","3"].includes(e.key)
    ) {
        // choose which level button to "click"
        const btn =
          e.key === "1" ? level1Button :
          e.key === "2" ? level2Button :
          level3Button;

        // simulate a mouse click at the center of that button
        const clickX = canvas.offsetLeft + btn.x + (btn.width / 2);
        const clickY = canvas.offsetTop  + btn.y + (btn.height / 2);

        e.preventDefault();
        clickHandler({ pageX: clickX, pageY: clickY });
        return;
    }

    // Arrow keys to choose game on "Choose Game" screen
    if (currentState === state.CHOOSEGAME) {
        if (e.key === "ArrowLeft") {
            // Simulate click on Matching button
            const clickX = canvas.offsetLeft + matchingButton.x + matchingButton.width / 2;
            const clickY = canvas.offsetTop + matchingButton.y + matchingButton.height / 2;
            clickHandler({ pageX: clickX, pageY: clickY });
            return;
        }
        if (e.key === "ArrowRight") {
            // Simulate click on Sorting button
            const clickX = canvas.offsetLeft + sortingButton.x + sortingButton.width / 2;
            const clickY = canvas.offsetTop + sortingButton.y + sortingButton.height / 2;
            clickHandler({ pageX: clickX, pageY: clickY });
            return;
        }
    }

    //Only handle keyboard input when we are playing the Matching game and the timer is not paused
    if (currentState == state.PLAYMATCH && !timer.isPaused()) {
        // use row/col math to keep movement tidy
        const rows = tileRowCount; 
        const cols = tileColumnCount;

        // Convert the current focusedTileIndex into (col, row) coordinates
        // In column-major order (not row by row): index = col * rows + row
        let col = Math.floor(focusedTileIndex / rows); // find the current column
        let row = focusedTileIndex % rows; // find the current row

        //Arrow key movement
        if (e.key === "ArrowRight") {
            col = (col + 1) % cols; // move right, wrap around at the last column
        } else if (e.key === "ArrowLeft") {
            col = (col - 1 + cols) % cols; // move left, wrap around to last column if needed
        } else if (e.key === "ArrowDown") {
            row = (row + 1) % rows;
        } else if (e.key === "ArrowUp") {
            row = (row - 1 + rows) % rows;
        } else if (e.key === "Enter" || e.key === " " || e.key === "Spacebar"){//Flip tile with Enter or Space
            // Check if tile is flippable: not already flipped, not matched,
            // less than 2 flips active, and no delay timers running
            if (!tiles[focusedTileIndex].flipped && !tiles[focusedTileIndex].matched && numberTilesFlipped < 2 && !timer.isMatchDelayed() && !timer.isEndDelayed()) {
                
                tiles[focusedTileIndex].flipped = true;// flip the tile

                if (numberTilesFlipped == 1) {
                    // This is the second tile flipped
                    secondFlippedTileIndex = focusedTileIndex;
                } else {
                    // This is the first tile flipped
                    if (!muted) {
                        tileFlipSound.load();
                        tileFlipSound.play();
                    }
                    firstFlippedTileIndex = focusedTileIndex;
                }

                numberTilesFlipped++; // increase flip counter

                //If two tiles are flipped, check for match
                if (numberTilesFlipped == 2) {

                    if (tiles[firstFlippedTileIndex].image == tiles[secondFlippedTileIndex].image) {
                        tiles[firstFlippedTileIndex].matched = true;
                        tiles[secondFlippedTileIndex].matched = true;
                        score += 50;
                        
                        // Show match info depending on what image it was
                        switch(tiles[firstFlippedTileIndex].image)
                        {
                            case bananaMatchImg:
                            matchInfoImage = bananaMatchImg;
                            matchInfoString1 = "Banana peels can be composted with other organics.";
                            matchInfoString2 = "";
                            break;
                            case bottleMatchImg:
                            matchInfoImage = bottleMatchImg;
                            matchInfoString1 = "Plastic bottles can be recycled with other plastics.";
                            matchInfoString2 = "";
                            break;
                            case chipsMatchImg:
                            matchInfoImage = chipsMatchImg;
                            matchInfoString1 = "Chip bags should be placed in the trash.";
                            matchInfoString2 = "";
                            break;
                            case grassMatchImg:
                            matchInfoImage = grassMatchImg;
                            matchInfoString1 = "Grass clippings can be composted with other organics.";
                            matchInfoString2 = "";
                            break;
                            case newsPaperMatchImg:
                            matchInfoImage = newsPaperMatchImg;
                            matchInfoString1 = "Newspaper can be recycled with other papers.";
                            matchInfoString2 = "";
                            break;
                            case paperCupMatchImg:
                            matchInfoImage = paperCupMatchImg;
                            matchInfoString1 = "Coffee cups can be composted with other organics.";
                            matchInfoString2 = "";
                            break;
                            case paperTowelsMatchImg:
                            matchInfoImage = paperTowelsMatchImg;
                            matchInfoString1 = "Paper towels can be composted with other organics.";
                            matchInfoString2 = "";
                            break;
                            case plasticBagMatchImg:
                            matchInfoImage = plasticBagMatchImg;
                            matchInfoString1 = "Plastic bags should be placed in the trash.";
                            matchInfoString2 = "";
                            break;
                            case strawAndLidMatchImg:
                            matchInfoImage = strawAndLidMatchImg;
                            matchInfoString1 = "Plastic straws and disposable cup lids can be";
                            matchInfoString2 = "recycled with other plastics.";
                            break;
                            case coffeeLidMatchImg:
                            matchInfoImage = coffeeLidMatchImg;
                            matchInfoString1 = "Disposable plastic coffee cup lids can be recycled";
                            matchInfoString2 = "with other plastics.";
                            break;
                            case appleMatchImg:
                            matchInfoImage = appleMatchImg;
                            matchInfoString1 = "Apple cores can be composted with other organics.";
                            matchInfoString2 = "";
                            break;
                            case glassJarMatchImg:
                            matchInfoImage = glassJarMatchImg;
                            matchInfoString1 = "Glass food jars can be recycled.";
                            matchInfoString2 = "";
                            break;
                            case mailMatchImg:
                            matchInfoImage = mailMatchImg;
                            matchInfoString1 = "Mail can be recycled with other papers.";
                            matchInfoString2 = "";
                            break;
                            case petWasteMatchImg:
                            matchInfoImage = petWasteMatchImg;
                            matchInfoString1 = "Pet waste should be placed in the trash.";
                            matchInfoString2 = "";
                            break;
                            case paperPlatesMatchImg:
                            matchInfoImage = paperPlatesMatchImg;
                            matchInfoString1 = "Paper plates can be composted with other organics.";
                            matchInfoString2 = "";
                            break;
                            case takeOutBoxMatchImg:
                            matchInfoImage = takeOutBoxMatchImg;
                            matchInfoString1 = "Chopsticks and take-out food boxes can be composted";
                            matchInfoString2 = "with other organics.";
                            break;
                            case bonesMatchImg:
                            matchInfoImage = bonesMatchImg;
                            matchInfoString1 = "Meat and bones can be composted with other organics.";
                            matchInfoString2 = "";
                            break;
                            case milkCartonMatchImg:
                            matchInfoImage = milkCartonMatchImg;
                            matchInfoString1 = "Milk cartons can be composted with other organics.";
                            matchInfoString2 = "";
                            break;
                            case paperBagMatchImg:
                            matchInfoImage = paperBagMatchImg;
                            matchInfoString1 = "Paper bags can be recycled with other papers.";
                            matchInfoString2 = "";
                            break;
                            case sodaCanMatchImg:
                            matchInfoImage = sodaCanMatchImg;
                            matchInfoString1 = "Aluminum cans may be recycled with other metals.";
                            matchInfoString2 = "";
                            break;
                            case brokenPlateMatchImg:
                            matchInfoImage = brokenPlateMatchImg;
                            matchInfoString1 = "Broken dishes and glassware should be placed in";
                            matchInfoString2 = "the trash.";
                            break;
                            default:
                            //do nothing
                        }
                        displayMatchInfo = true; //tell draw() to show info box
                        timer.matchDelay();      //short delay so player can see match

                        //Reset flip counter after delay
                        setTimeout(() => {
                        timer.update();          // advance the timer
                        timer.endMatchDelay();   // request to end delay
                        timer.update();          // commit the change
                        numberTilesFlipped = 0;  // reset flips
                        }, timer.matchDelayDuration + 10); // small buffer helps timing

                    }else {
                        //No match: start a miss delay
                        timer.missDelay();
                    }
                }
            }
            return; //exit function after flipping so we don’t change focused index
        }

        // Convert (col,row) back into index for highlighting
        focusedTileIndex = col * rows + row;
    }

    if (currentState == state.PLAYSORT && !timer.isPaused() && keyboardMode) {
        if (!activeGarbage) return;

        if (["z","x","c","v"].includes(e.key.toLowerCase())) {
            let targetX = 0;
            let targetType = null;

            if (e.key.toLowerCase() === "z") {
                targetX = paperColumnStart + binWidth/2 - garbageSize/2;
                targetType = paper;
            } else if (e.key.toLowerCase() === "x") {
                targetX = comingledColumnStart + binWidth/2 - garbageSize/2;
                targetType = comingled;
            } else if (e.key.toLowerCase() === "c") {
                targetX = organicsColumnStart + binWidth/2 - garbageSize/2;
                targetType = organics;
            } else if (e.key.toLowerCase() === "v") {
                targetX = landfillColumnStart + binWidth/2 - garbageSize/2;
                targetType = landfill;
            }

            // snap garbage into chosen lane
            activeGarbage.x = targetX;
            activeGarbage.falling = true;

            var binTopY = canvas.height - binFrontHeight - garbageSize;
            var thresholdY = canvas.height * ANTI_SPAM_Y_THRESHOLD_RATIO; // default 85%

             if ((activeGarbage.y + activeGarbage.size) >= thresholdY)
             {
                var bump = ANTI_SPAM_RESET_OFFSET_PX; // default 120px
                activeGarbage.y = Math.max(-garbageSize, binTopY - bump);
                activeGarbage.falling = true; // keep it falling after the bump
             }

            // only release control if the choice was correct
            if (activeGarbage.type === targetType) {
                //activeGarbage = null;
            }
        }
    }
}

// Map Escape to pause/unpause toggle
document.addEventListener("keydown", function(e) {
    if (e.key === "Escape" || e.key === "Esc") {
        // Prevent default to avoid closing dialogs or exiting fullscreen unexpectedly
        e.preventDefault();
        if (typeof togglePause === 'function') togglePause();
    }
});


// Map P key to: (1) unpause when paused, (2) "click" the Play button on intro screens
document.addEventListener("keydown", function (e) {
    if ((e.key || "").toLowerCase() !== "p") return;
        e.preventDefault();

    // 1) If we’re in a play state and currently paused, P should unpause (same as clicking the big Play icon)
    if (
        (currentState === state.PLAYMATCH || currentState === state.PLAYSORT) &&
        typeof timer !== "undefined" &&
        timer.isPaused() &&
        typeof togglePause === "function"
    ) {
        togglePause();
        return;
    }

    // 2) Otherwise, if we’re on a screen that shows the round Play button, P should "click" it
    if (
    currentState === state.MAININTRO ||
    currentState === state.WELCOME1 ||
    currentState === state.WELCOME2 ||
    currentState === state.MATCHINTRO1 ||
    currentState === state.MATCHINTRO2 ||
    currentState === state.MATCHINTRO3 ||
    currentState === state.SORTINTRO1 ||
    currentState === state.SORTINTRO2
    ) {
        // Click the center of the circular Play button so the hit test passes
        const clickX = canvas.offsetLeft + playButton.x + playButton.size / 2;
        const clickY = canvas.offsetTop  + playButton.y + playButton.size / 2;
        clickHandler({ pageX: clickX, pageY: clickY });
    }
});

// Map R to "Restart" and H to "Home"
document.addEventListener("keydown", function (e) {
  const key = (e.key || "").toLowerCase();
  if (key !== "r" && key !== "h") return;

  // Only act when those buttons are visible:
  //  - Paused during play (PLAYMATCH or PLAYSORT)
  //  - OR on the END screen
  const onPauseScreen = (currentState === state.PLAYMATCH || currentState === state.PLAYSORT) && typeof timer !== "undefined" && timer.isPaused();
  const onEndScreen = currentState === state.END;

  if (!onPauseScreen && !onEndScreen) return;

  e.preventDefault();

  if (key === "r") {
    // simulate a click in the center of the Restart button
    const clickX = canvas.offsetLeft + restartButton.x + (restartButton.size / 2);
    const clickY = canvas.offsetTop  + restartButton.y + (restartButton.size / 2);
    clickHandler({ pageX: clickX, pageY: clickY });
    return;
  }

  if (key === "h") {
    // simulate a click in the center of the Home button
    const clickX = canvas.offsetLeft + homeButton.x + (homeButton.size / 2);
    const clickY = canvas.offsetTop  + homeButton.y + (homeButton.size / 2);
    clickHandler({ pageX: clickX, pageY: clickY });
    return;
  }
});