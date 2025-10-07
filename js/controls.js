// Button Setup

// Create buttons (positions may be updated later by gameLogic)
var matchingButton = new RectangularButton(
    canvas.width / 4 - chooseButtonSize / 2, 
    canvas.height / 4 - chooseButtonSize / 2, 
    chooseButtonSize, chooseButtonSize, 
    matchingButtonImg
);

var sortingButton = new RectangularButton(
    canvas.width / 2 + canvas.width / 4 - chooseButtonSize / 2, 
    canvas.height / 4 - chooseButtonSize / 2, 
    chooseButtonSize, chooseButtonSize, 
    sortingButtonImg
);

var playButton = new CircularButton(
    canvas.width / 2 - originalPlayButtonSize - originalPlayButtonSize / 2, 
    canvas.height / 2 + canvas.height / 4 - originalPlayButtonSize / 2, 
    originalPlayButtonSize, 
    playButtonImg
);

var level1Button = new RectangularButton(
    canvas.width / 4 - levelButtonWidth / 2 - levelButtonWidth, 
    canvas.height / 2 + canvas.height / 4 - levelButtonHeight / 2, 
    levelButtonWidth, levelButtonHeight, 
    level1Img
);

var level2Button = new RectangularButton(
    canvas.width / 4, 
    canvas.height / 2 + canvas.height / 4 - levelButtonHeight / 2, 
    levelButtonWidth, levelButtonHeight, 
    level2Img
);

var level3Button = new RectangularButton(
    canvas.width / 4 + levelButtonWidth / 2 + levelButtonWidth, 
    canvas.height / 2 + canvas.height / 4 - levelButtonHeight / 2, 
    levelButtonWidth, levelButtonHeight, 
    level3Img
);

var pauseButton = new CircularButton(
    canvas.width - (originalPlayButtonSize * 2), 
    canvas.height - originalPlayButtonSize - 15, 
    originalPlayButtonSize, 
    pauseButtonImg
);

var restartButton = new CircularButton(
    canvas.width / 4 - originalPlayButtonSize / 2, 
    canvas.height / 2 + canvas.height / 4 - originalPlayButtonSize / 2, 
    originalPlayButtonSize, 
    restartButtonImg
);

var homeButton = new CircularButton(
    canvas.width / 3 + originalPlayButtonSize / 2, 
    canvas.height / 2 + canvas.height / 4 - originalPlayButtonSize / 2, 
    originalPlayButtonSize, 
    homeButtonImg
);

var muteButton = new CircularButton(
    canvas.width - soundButtonSize  - soundButtonSize  / 8, 
    soundButtonSize  / 8, 
    soundButtonSize , 
    muteImg
);

// =====================
// Button Animation Functions
// =====================

// Grow/shrink the "Choose Game" buttons
function changeChooseButtonSize() {
    if (chooseButtonSize < 250 && increaseChooseButtonSize) {
        chooseButtonSize += 1;

        matchingButton.x -= 0.5;
        matchingButton.y -= 0.5;
        matchingButton.width = chooseButtonSize;
        matchingButton.height = chooseButtonSize;

        sortingButton.x -= 0.5;
        sortingButton.y -= 0.5;
        sortingButton.width = chooseButtonSize;
        sortingButton.height = chooseButtonSize;

        if (chooseButtonSize >= 250) {
            increaseChooseButtonSize = false;
        }
    } else {
        chooseButtonSize -= 1;

        matchingButton.x += 0.5;
        matchingButton.y += 0.5;
        matchingButton.width = chooseButtonSize;
        matchingButton.height = chooseButtonSize;

        sortingButton.x += 0.5;
        sortingButton.y += 0.5;
        sortingButton.width = chooseButtonSize;
        sortingButton.height = chooseButtonSize;

        if (chooseButtonSize <= 200) {
            increaseChooseButtonSize = true;
        }
    }
}

// Grow/shrink the Play button
function changePlayButtonSize() {
    if (currentPlayButtonSize < 125 && increasePlayButtonSize) {
        currentPlayButtonSize += 0.5;
        playButton.x -= 0.25;
        playButton.y -= 0.25;
        playButton.size = currentPlayButtonSize;

        if (currentPlayButtonSize >= 125) {
            increasePlayButtonSize = false;
        }
    } else {
        currentPlayButtonSize -= 0.5;
        playButton.x += 0.25;
        playButton.y += 0.25;
        playButton.size = currentPlayButtonSize;

        if (currentPlayButtonSize <= 100) {
            increasePlayButtonSize = true;
        }
    }
}

// Grow/shrink Level Select buttons
function changeLevelButtonSize() {
    if (levelButtonWidth < 150 && increaseLevelButtonSize) {
        levelButtonWidth += 0.5;
        levelButtonHeight += 0.2;

        level1Button.width = levelButtonWidth;
        level1Button.height = levelButtonHeight;
        level1Button.x -= 0.25;
        level1Button.y -= 0.1;

        level2Button.width = levelButtonWidth;
        level2Button.height = levelButtonHeight;
        level2Button.x -= 0.25;
        level2Button.y -= 0.1;

        level3Button.width = levelButtonWidth;
        level3Button.height = levelButtonHeight;
        level3Button.x -= 0.25;
        level3Button.y -= 0.1;

        if (levelButtonWidth >= 150) {
            increaseLevelButtonSize = false;
        }
    } else {
        levelButtonWidth -= 0.5;
        levelButtonHeight -= 0.2;

        level1Button.width = levelButtonWidth;
        level1Button.height = levelButtonHeight;
        level1Button.x += 0.25;
        level1Button.y += 0.1;

        level2Button.width = levelButtonWidth;
        level2Button.height = levelButtonHeight;
        level2Button.x += 0.25;
        level2Button.y += 0.1;

        level3Button.width = levelButtonWidth;
        level3Button.height = levelButtonHeight;
        level3Button.x += 0.25;
        level3Button.y += 0.1;

        if (levelButtonWidth <= 125) {
            increaseLevelButtonSize = true;
        }
    }
}

// Grow/shrink Restart & Home buttons in End screen
function changeRestartAndHomeButtonSize() {
    if (currentPlayButtonSize < 125 && increasePlayButtonSize) {
        currentPlayButtonSize += 0.5;

        restartButton.x -= 0.25;
        restartButton.y -= 0.25;
        restartButton.size = currentPlayButtonSize;

        homeButton.x -= 0.25;
        homeButton.y -= 0.25;
        homeButton.size = currentPlayButtonSize;

        if (currentPlayButtonSize >= 125) {
            increasePlayButtonSize = false;
        }
    } else {
        currentPlayButtonSize -= 0.5;

        restartButton.x += 0.25;
        restartButton.y += 0.25;
        restartButton.size = currentPlayButtonSize;

        homeButton.x += 0.25;
        homeButton.y += 0.25;
        homeButton.size = currentPlayButtonSize;

        if (currentPlayButtonSize <= 100) {
            increasePlayButtonSize = true;
        }
    }
}
