// Drawing helpers and main loop
function drawGameBoard()
{
    ctx.beginPath();
    ctx.rect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#FCE21E";
    ctx.fill();
    ctx.closePath();
}

function drawMatchInfo()
{
    ctx.drawImage(matchInfoImage, 90, canvas.height - 115, 100, 100);

    ctx.font = "20px Comic Sans MS";
    ctx.fillStyle = "#000000";
    ctx.textAlign = "left";
    ctx.textBaseline = "middle";
    ctx.fillText(matchInfoString1, 210, canvas.height - 75);
    ctx.fillText(matchInfoString2, 210, canvas.height - 50);
}

function drawScore()
{
    ctx.font = "bold 48px Comic Sans MS";
    ctx.fillStyle = "#201A91";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("Score: " + score, canvas.width / 2, tileOffsetTop / 2 + 10);
}

function drawTiles()
{
    for(i = 0; i < tiles.length; i++)
    {
        if(tiles[i].flipped || tiles[i].matched)
        {
            ctx.drawImage(cardFrontImg, tiles[i].x, tiles[i].y, tiles[i].size, tiles[i].size);
            
            var borderSize = tiles[i].size * (7/8);
            ctx.drawImage(tiles[i].image, tiles[i].x + borderSize, tiles[i].y + borderSize, tiles[i].size - (borderSize * 2), tiles[i].size - (borderSize * 2));
        }
        else
        {
            ctx.drawImage(matchingCardImg, tiles[i].x, tiles[i].y, tiles[i].size, tiles[i].size);
        }

        if (i === focusedTileIndex) {
            ctx.strokeStyle = "red";
            ctx.lineWidth = 4;
            ctx.strokeRect(tiles[i].x, tiles[i].y, tiles[i].size, tiles[i].size);
        }
    }
}

// --- Level setup and helper functions (moved from original monolith) ---
function setMatchLevelBoard()
{
    tiles = [];
    displayMatchInfo = false;
    score = 0;
    imageIndex = 0;
    numberTilesFlipped = 0;
    firstFlippedTileIndex = 0;
    secondFlippedTileIndex = 0;
    gameTitle = "matching";

    if(level == 1)
    {
        timerTime = 60000;
        tileRowCount = 3;
        tileColumnCount = 6;
        tileSize = 120;
        tilePadding = 15;
        tileOffsetTop = 120;
        tileOffsetLeft = 75;
        images = [bananaMatchImg, bananaMatchImg, bottleMatchImg, bottleMatchImg, chipsMatchImg, chipsMatchImg, grassMatchImg, grassMatchImg, newsPaperMatchImg, newsPaperMatchImg, paperCupMatchImg, paperCupMatchImg, paperTowelsMatchImg, paperTowelsMatchImg, plasticBagMatchImg, plasticBagMatchImg, strawAndLidMatchImg, strawAndLidMatchImg];
        images.sort(function(){return 0.5 - Math.random();});
    }

    if(level == 2)
    {
        timerTime = 75000;
        tileRowCount = 3;
        tileColumnCount = 8;
        tileSize = 95;
        tilePadding = 15;
        tileOffsetTop = 150;
        tileOffsetLeft = 50;
        images = [appleMatchImg, appleMatchImg, paperTowelsMatchImg, paperTowelsMatchImg, milkCartonMatchImg, milkCartonMatchImg, paperPlatesMatchImg, paperPlatesMatchImg, glassJarMatchImg, glassJarMatchImg, takeOutBoxMatchImg, takeOutBoxMatchImg, bonesMatchImg, bonesMatchImg, petWasteMatchImg, petWasteMatchImg, coffeeLidMatchImg, coffeeLidMatchImg, mailMatchImg, mailMatchImg, paperCupMatchImg, paperCupMatchImg, newsPaperMatchImg, newsPaperMatchImg];
        images.sort(function(){return 0.5 - Math.random();});
    }

    if(level == 3)
    {
        timerTime = 90000;
        tileRowCount = 4;
        tileColumnCount = 8;
        tileSize = 90;
        tilePadding = 15;
        tileOffsetTop = 105;
        tileOffsetLeft = 70;
        images = [appleMatchImg, appleMatchImg, paperTowelsMatchImg, paperTowelsMatchImg, milkCartonMatchImg, milkCartonMatchImg, paperPlatesMatchImg, paperPlatesMatchImg, glassJarMatchImg, glassJarMatchImg, sodaCanMatchImg, sodaCanMatchImg, paperBagMatchImg, paperBagMatchImg, petWasteMatchImg, petWasteMatchImg, coffeeLidMatchImg, coffeeLidMatchImg, mailMatchImg, mailMatchImg, paperCupMatchImg, paperCupMatchImg, newsPaperMatchImg, newsPaperMatchImg, plasticBagMatchImg, plasticBagMatchImg, bonesMatchImg, bonesMatchImg, brokenPlateMatchImg, brokenPlateMatchImg, takeOutBoxMatchImg, takeOutBoxMatchImg];
        images.sort(function(){return 0.5 - Math.random();});
    }

    for(i = 0; i < tileColumnCount; i++)
    {
        for(j = 0; j < tileRowCount; j++)
        {
            tiles.push(new Tile((i * (tileSize + tilePadding)) + tileOffsetLeft, (j * (tileSize + tilePadding)) + tileOffsetTop, tileSize, images[imageIndex]));

            imageIndex++;
        }
    }

    for(i = 0; i < tiles.length; i++)
    {
        tiles[i].flipped = false;
        tiles[i].matched = false;
    }
}

function setSortLevelBoard()
{
    if(level == 1)
    {
        timerTime = 60000;
        dropGarbageInterval = 2000;
        garbageQueue = [new Garbage(getRandomPaperX(), -garbageSize, garbageSize, newsPaperMatchImg, paper), new Garbage(getRandomPaperX(), -garbageSize, garbageSize, cardboardMatchImg, paper), new Garbage(getRandomPaperX(), -garbageSize, garbageSize, cerealMatchImg, paper), new Garbage(getRandomPaperX(), -garbageSize, garbageSize, mailMatchImg, paper), new Garbage(getRandomComingledX(), -garbageSize, garbageSize, bottleMatchImg, comingled), new Garbage(getRandomComingledX(), -garbageSize, garbageSize, sodaCanMatchImg, comingled), new Garbage(getRandomComingledX(), -garbageSize, garbageSize, canMatchImg, comingled), new Garbage(getRandomComingledX(), -garbageSize, garbageSize, glassBottleMatchImg, comingled), new Garbage(getRandomOrganicsX(), -garbageSize, garbageSize, bananaMatchImg, organics), new Garbage(getRandomOrganicsX(), -garbageSize, garbageSize, appleMatchImg, organics), new Garbage(getRandomOrganicsX(), -garbageSize, garbageSize, grassMatchImg, organics), new Garbage(getRandomOrganicsX(), -garbageSize, garbageSize, pumpkinMatchImg, organics), new Garbage(getRandomLandfillX(), -garbageSize, garbageSize, chipsMatchImg, landfill), new Garbage(getRandomLandfillX(), -garbageSize, garbageSize, brokenPlateMatchImg, landfill), new Garbage(getRandomLandfillX(), -garbageSize, garbageSize, diaperMatchImg, landfill), new Garbage(getRandomLandfillX(), -garbageSize, garbageSize, plasticBagMatchImg, landfill)];
        garbageQueue.sort(function(a, b){return 0.5 - Math.random();});
    }

    if(level == 2)
    {
        timerTime = 60000;
        dropGarbageInterval = 1500;
        garbageQueue = [new Garbage(getRandomPaperX(), -garbageSize, garbageSize, newsPaperMatchImg, paper), new Garbage(getRandomPaperX(), -garbageSize, garbageSize, cardboardMatchImg, paper), new Garbage(getRandomPaperX(), -garbageSize, garbageSize, cerealMatchImg, paper), new Garbage(getRandomPaperX(), -garbageSize, garbageSize, mailMatchImg, paper), new Garbage(getRandomComingledX(), -garbageSize, garbageSize, bottleMatchImg, comingled), new Garbage(getRandomComingledX(), -garbageSize, garbageSize, sodaCanMatchImg, comingled), new Garbage(getRandomComingledX(), -garbageSize, garbageSize, canMatchImg, comingled), new Garbage(getRandomComingledX(), -garbageSize, garbageSize, glassBottleMatchImg, comingled), new Garbage(getRandomOrganicsX(), -garbageSize, garbageSize, bananaMatchImg, organics), new Garbage(getRandomOrganicsX(), -garbageSize, garbageSize, appleMatchImg, organics), new Garbage(getRandomOrganicsX(), -garbageSize, garbageSize, grassMatchImg, organics), new Garbage(getRandomOrganicsX(), -garbageSize, garbageSize, pumpkinMatchImg, organics), new Garbage(getRandomLandfillX(), -garbageSize, garbageSize, chipsMatchImg, landfill), new Garbage(getRandomLandfillX(), -garbageSize, garbageSize, brokenPlateMatchImg, landfill), new Garbage(getRandomLandfillX(), -garbageSize, garbageSize, diaperMatchImg, landfill), new Garbage(getRandomLandfillX(), -garbageSize, garbageSize, plasticBagMatchImg, landfill), new Garbage(getRandomPaperX(), -garbageSize, garbageSize, eggsMatchImg, paper), new Garbage(getRandomPaperX(), -garbageSize, garbageSize, papersMatchImg, paper), new Garbage(getRandomComingledX(), -garbageSize, garbageSize, strawAndLidMatchImg, comingled), new Garbage(getRandomComingledX(), -garbageSize, garbageSize, glassJarMatchImg, comingled), new Garbage(getRandomOrganicsX(), -garbageSize, garbageSize, milkCartonMatchImg, organics), new Garbage(getRandomOrganicsX(), -garbageSize, garbageSize, leafMatchImg, organics), new Garbage(getRandomLandfillX(), -garbageSize, garbageSize, juiceMatchImg, landfill), new Garbage(getRandomLandfillX(), -garbageSize, garbageSize, styrofoamMatchImg, landfill)];
        garbageQueue.sort(function(a, b){return 0.5 - Math.random();});
    }

    if(level == 3)
    {
        timerTime = 60000;
        dropGarbageInterval = 1000;
        garbageQueue = [new Garbage(getRandomPaperX(), -garbageSize, garbageSize, newsPaperMatchImg, paper), new Garbage(getRandomPaperX(), -garbageSize, garbageSize, cardboardMatchImg, paper), new Garbage(getRandomPaperX(), -garbageSize, garbageSize, cerealMatchImg, paper), new Garbage(getRandomPaperX(), -garbageSize, garbageSize, mailMatchImg, paper), new Garbage(getRandomComingledX(), -garbageSize, garbageSize, bottleMatchImg, comingled), new Garbage(getRandomComingledX(), -garbageSize, garbageSize, sodaCanMatchImg, comingled), new Garbage(getRandomComingledX(), -garbageSize, garbageSize, canMatchImg, comingled), new Garbage(getRandomComingledX(), -garbageSize, garbageSize, glassBottleMatchImg, comingled), new Garbage(getRandomOrganicsX(), -garbageSize, garbageSize, bananaMatchImg, organics), new Garbage(getRandomOrganicsX(), -garbageSize, garbageSize, appleMatchImg, organics), new Garbage(getRandomOrganicsX(), -garbageSize, garbageSize, grassMatchImg, organics), new Garbage(getRandomOrganicsX(), -garbageSize, garbageSize, pumpkinMatchImg, organics), new Garbage(getRandomLandfillX(), -garbageSize, garbageSize, chipsMatchImg, landfill), new Garbage(getRandomLandfillX(), -garbageSize, garbageSize, brokenPlateMatchImg, landfill), new Garbage(getRandomLandfillX(), -garbageSize, garbageSize, diaperMatchImg, landfill), new Garbage(getRandomLandfillX(), -garbageSize, garbageSize, plasticBagMatchImg, landfill), new Garbage(getRandomPaperX(), -garbageSize, garbageSize, eggsMatchImg, paper), new Garbage(getRandomPaperX(), -garbageSize, garbageSize, papersMatchImg, paper), new Garbage(getRandomComingledX(), -garbageSize, garbageSize, strawAndLidMatchImg, comingled), new Garbage(getRandomComingledX(), -garbageSize, garbageSize, glassJarMatchImg, comingled), new Garbage(getRandomOrganicsX(), -garbageSize, garbageSize, milkCartonMatchImg, organics), new Garbage(getRandomOrganicsX(), -garbageSize, garbageSize, leafMatchImg, organics), new Garbage(getRandomLandfillX(), -garbageSize, garbageSize, juiceMatchImg, landfill), new Garbage(getRandomLandfillX(), -garbageSize, garbageSize, styrofoamMatchImg, landfill), new Garbage(getRandomPaperX(), -garbageSize, garbageSize, paperRollMatchImg, paper), new Garbage(getRandomPaperX(), -garbageSize, garbageSize, paperBagMatchImg, paper), new Garbage(getRandomComingledX(), -garbageSize, garbageSize, aluminumFoilMatchImg, comingled), new Garbage(getRandomComingledX(), -garbageSize, garbageSize, coffeeLidMatchImg, comingled), new Garbage(getRandomOrganicsX(), -garbageSize, garbageSize, stickMatchImg, organics), new Garbage(getRandomOrganicsX(), -garbageSize, garbageSize, takeOutBoxMatchImg, organics), new Garbage(getRandomLandfillX(), -garbageSize, garbageSize, petWasteMatchImg, landfill), new Garbage(getRandomLandfillX(), -garbageSize, garbageSize, candyMatchImg, landfill)];
        garbageQueue.sort(function(a, b){return 0.5 - Math.random();});
    }

    garbage = [];
    fallSpeed = 2;
    lastDropTime = 0;
    recyclingSorted = 0;
    landfillSorted = 0;
    scorePercentage = 0;
    startingGarbageCount = garbageQueue.length;
    itemsRemaining = startingGarbageCount;
    gameTitle = "sorting";
}

function image(imageSrc)
{
    var image = new Image();

    image.src = imageSrc;

    return image;
}

function getRandomPaperX()
{
    var min = binWidth;
    var max = canvas.width - binWidth - garbageSize;
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomComingledX()
{
    var min1 = 0;
    var max1 = binWidth - garbageSize;
    var min2 = binWidth * 2;
    var max2 = canvas.width - binWidth - garbageSize;
    min1 = Math.ceil(min1);
    max1 = Math.floor(max1);
    min2 = Math.ceil(min2);
    max2 = Math.floor(max2);
    var value1 = Math.floor(Math.random() * (max1 - min1 + 1)) + min1;
    var value2 = Math.floor(Math.random() * (max2 - min2 + 1)) + min2;
    return (Math.random() < 0.5) ? value1 : value2;
}

function getRandomOrganicsX()
{
    var min1 = 0;
    var max1 = (binWidth * 2) - garbageSize;
    var min2 = canvas.width - (binWidth * 2);
    var max2 = canvas.width - binWidth - garbageSize;
    min1 = Math.ceil(min1);
    max1 = Math.floor(max1);
    min2 = Math.ceil(min2);
    max2 = Math.floor(max2);
    var value1 = Math.floor(Math.random() * (max1 - min1 + 1)) + min1;
    var value2 = Math.floor(Math.random() * (max2 - min2 + 1)) + min2;
    return (Math.random() < 0.5) ? value1 : value2;
}

function getRandomLandfillX()
{
    var min = 0;
    var max = canvas.width - (binWidth * 2) - garbageSize;
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function drawLoadingScreen()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.drawImage(loadingImg, 0, 0, canvas.width, canvas.height);

    drawEmptyLoadingBar();
    drawLoadingBar();
    
    if(numberLoaded >= numberOfAssets){   
        currentState = state.MAININTRO;
        backgroundMusic.play();
    }
}

function drawEmptyLoadingBar()
{
    ctx.beginPath();
    ctx.rect(0, canvas.height/2, canvas.width, canvas.height/20);
    ctx.fillStyle = "#999";
    ctx.fill();
    ctx.closePath();
}

function drawLoadingBar()
{
    ctx.beginPath();
    ctx.rect(0, canvas.height/2, canvas.width * (numberLoaded/numberOfAssets), canvas.height/20);
    ctx.fillStyle = "#0F0";
    ctx.fill();
    ctx.closePath();
}

function drawMainIntroScreen()
{
    ctx.drawImage(mainIntroImg, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(playButton.image, playButton.x, playButton.y, playButton.size, playButton.size);
    ctx.drawImage(muteButton.image, muteButton.x, muteButton.y, muteButton.size, muteButton.size);
}

function drawWelcome1Screen()
{
    ctx.drawImage(welcome1Img, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(playButton.image, playButton.x, playButton.y, playButton.size, playButton.size);
    ctx.drawImage(muteButton.image, muteButton.x, muteButton.y, muteButton.size, muteButton.size);
}

function drawWelcome2Screen()
{
    ctx.drawImage(welcome2Img, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(playButton.image, playButton.x, playButton.y, playButton.size, playButton.size);
    ctx.drawImage(muteButton.image, muteButton.x, muteButton.y, muteButton.size, muteButton.size);
}

function drawChooseGameScreen()
{
    ctx.drawImage(chooseGameImg, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(matchingButton.image, matchingButton.x, matchingButton.y, matchingButton.width, matchingButton.height);
    ctx.drawImage(sortingButton.image, sortingButton.x, sortingButton.y, sortingButton.width, sortingButton.height);
    ctx.drawImage(muteButton.image, muteButton.x, muteButton.y, muteButton.size, muteButton.size);
}

function drawMatchingIntro1()
{
    ctx.drawImage(matchingIntro1Img, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(playButton.image, playButton.x, playButton.y, playButton.size, playButton.size);
    ctx.drawImage(muteButton.image, muteButton.x, muteButton.y, muteButton.size, muteButton.size);
}

function drawMatchingIntro2()
{
    ctx.drawImage(matchingIntro2Img, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(playButton.image, playButton.x, playButton.y, playButton.size, playButton.size);
    ctx.drawImage(muteButton.image, muteButton.x, muteButton.y, muteButton.size, muteButton.size);
}

function drawMatchingIntro3()
{
    ctx.drawImage(matchingIntro3Img, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(playButton.image, playButton.x, playButton.y, playButton.size, playButton.size);
    ctx.drawImage(muteButton.image, muteButton.x, muteButton.y, muteButton.size, muteButton.size);
}

function drawMatchingChooseLevelScreen()
{
    ctx.drawImage(matchingLevelSelectImg, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(level1Button.image, level1Button.x, level1Button.y, level1Button.width, level1Button.height);
    ctx.drawImage(level2Button.image, level2Button.x, level2Button.y, level2Button.width, level2Button.height);
    ctx.drawImage(level3Button.image, level3Button.x, level3Button.y, level3Button.width, level3Button.height);
    ctx.drawImage(muteButton.image, muteButton.x, muteButton.y, muteButton.size, muteButton.size);
}

function drawSortingChooseLevelScreen()
{
    ctx.drawImage(sortingLevelSelectImg, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(level1Button.image, level1Button.x, level1Button.y, level1Button.width, level1Button.height);
    ctx.drawImage(level2Button.image, level2Button.x, level2Button.y, level2Button.width, level2Button.height);
    ctx.drawImage(level3Button.image, level3Button.x, level3Button.y, level3Button.width, level3Button.height);
    ctx.drawImage(muteButton.image, muteButton.x, muteButton.y, muteButton.size, muteButton.size);
}

function drawSortingIntro1()
{
    ctx.drawImage(sortingIntro1Img, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(playButton.image, playButton.x, playButton.y, playButton.size, playButton.size);
    ctx.drawImage(muteButton.image, muteButton.x, muteButton.y, muteButton.size, muteButton.size);
}

function drawSortingIntro2()
{
    ctx.drawImage(sortingIntro2Img, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(playButton.image, playButton.x, playButton.y, playButton.size, playButton.size);
    ctx.drawImage(muteButton.image, muteButton.x, muteButton.y, muteButton.size, muteButton.size);
}

function drawEndGameScreen()
{
    if(gameTitle == "matching")
    {
        ctx.drawImage(endScreenMatchingImg, 0, 0, canvas.width, canvas.height);
        ctx.font = "bold 48px Comic Sans MS";
        ctx.fillStyle = "#201A91";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(score, canvas.width / 2 - 150, canvas.height / 2);
    }
    else
    {
        ctx.drawImage(endScreenSortingImg, 0, 0, canvas.width, canvas.height);
        ctx.font = "bold 28px Comic Sans MS";
        ctx.fillStyle = "#201A91";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(recyclingSorted + landfillSorted + " of " + startingGarbageCount + " items sorted correctly", canvas.width / 2 - 150, canvas.height / 2);
    }

    ctx.drawImage(restartButton.image, restartButton.x, restartButton.y, restartButton.size, restartButton.size);
    ctx.drawImage(homeButton.image, homeButton.x, homeButton.y, homeButton.size, homeButton.size);
    ctx.drawImage(muteButton.image, muteButton.x, muteButton.y, muteButton.size, muteButton.size);
}

function drawPauseButton()
{
    ctx.drawImage(pauseButton.image, pauseButton.x, pauseButton.y, pauseButton.size, pauseButton.size);
}

function drawMuteButton()
{
    ctx.drawImage(muteButton.image, muteButton.x, muteButton.y, muteButton.size, muteButton.size);
}

function drawEmptyBar()
{
    ctx.beginPath();
    ctx.rect(0, 0, canvas.width, timerBarHeight);
    ctx.fillStyle = "#00FF00";
    ctx.fill();
    ctx.closePath();
}

function drawTimerBar()
{
    ctx.beginPath();
    ctx.rect(0, 0, timerBarWidth, timerBarHeight);
    ctx.fillStyle = "#FF0000";
    ctx.fill();
    ctx.closePath();
}

function drawTime()
{
    ctx.font = "bold 16px Comic Sans MS";
    ctx.fillStyle = "#000000";
    ctx.textAlign="center";
    ctx.textBaseline="middle";
    ctx.fillText(timeElapsed, 30, canvas.height - 20);
}

function drawPauseScreen()
{
    ctx.drawImage(pauseScreenImg, 0, 0, canvas.width, canvas.height);

    ctx.drawImage(pauseButton.image, pauseButton.x, pauseButton.y, pauseButton.size, pauseButton.size);
    ctx.drawImage(restartButton.image, restartButton.x, restartButton.y, restartButton.size, restartButton.size);
    ctx.drawImage(homeButton.image, homeButton.x, homeButton.y, homeButton.size, homeButton.size);
    ctx.drawImage(muteButton.image, muteButton.x, muteButton.y, muteButton.size, muteButton.size);
}

function drawSortingGame()
{
    ctx.drawImage(sortingBackgroundImg, 0, 0, canvas.width, canvas.height);

    ctx.drawImage(paperBackImg, paperColumnStart, canvas.height - binFrontHeight - binBackHeight, binWidth, binBackHeight);
    ctx.drawImage(comingledBackImg, comingledColumnStart, canvas.height - binFrontHeight - binBackHeight, binWidth, binBackHeight);
    ctx.drawImage(organicsBackImg, organicsColumnStart, canvas.height - binFrontHeight - binBackHeight, binWidth, binBackHeight);
    ctx.drawImage(landfillBackImg, landfillColumnStart, canvas.height - binFrontHeight - binBackHeight, binWidth, binBackHeight);

    for(i = 0; i < garbage.length; i++)
    {
        ctx.drawImage(garbage[i].image, garbage[i].x, garbage[i].y, garbage[i].size, garbage[i].size);
    }

    if(mouseDown)
    {
        ctx.drawImage(draggedGarbage.image, draggedGarbage.x, draggedGarbage.y, draggedGarbage.size, draggedGarbage.size);
        ctx.drawImage(dragImg, dragX, dragY, garbageSize, garbageSize);
    }

    ctx.drawImage(paperFrontImg, paperColumnStart, canvas.height - binFrontHeight, binWidth, binFrontHeight);
    ctx.drawImage(comingledFrontImg, comingledColumnStart, canvas.height - binFrontHeight, binWidth, binFrontHeight);
    ctx.drawImage(organicsFrontImg, organicsColumnStart, canvas.height - binFrontHeight, binWidth, binFrontHeight);
    ctx.drawImage(landfillFrontImg, landfillColumnStart, canvas.height - binFrontHeight, binWidth, binFrontHeight);

    drawSidebar();
}
 
function drawSidebar()
{
    ctx.beginPath();
    ctx.rect(binWidth * 4, 0, binWidth, canvas.height);
    ctx.fillStyle = "#83ccee";
    ctx.fill();
    ctx.closePath();

    ctx.font = "25px Comic Sans MS";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.fillText("Time", sidebarLocalXOrigin + (binWidth*(4/8)), canvas.height * (1/8) - 20);
    ctx.fillText("Remaining", sidebarLocalXOrigin + (binWidth*(4/8)), canvas.height * (1/8) + 10);

    ctx.beginPath();
    ctx.rect(sidebarLocalXOrigin + (binWidth*(1/8)), canvas.height *(3/4)-80, binWidth*(3/4), 60);
    ctx.fillStyle = "#f4c831";
    ctx.fill();
    ctx.closePath();
    ctx.font = "25px Comic Sans MS";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.fillText("Score", sidebarLocalXOrigin + (binWidth*(4/8)), canvas.height *(3/4) - 42);

    ctx.beginPath();
    ctx.rect(sidebarLocalXOrigin + (binWidth*(2/8)), canvas.height * (3/4), binWidth/2, 50);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();

    ctx.font = "25px Comic Sans MS";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.fillText(scorePercentage + "%", sidebarLocalXOrigin + (binWidth*(4/8)), canvas.height *(3/4) + 35);

    ctx.font = "25px Comic Sans MS";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.fillText("Diverted from", sidebarLocalXOrigin + (binWidth*(4/8)), canvas.height *(7/8)+15);
    ctx.fillText("the landfill", sidebarLocalXOrigin + (binWidth*(4/8)), canvas.height *(7/8)+50);

    drawEmptyCircle();
    drawFilledCircle();
}

function drawEmptyCircle()
{
    ctx.beginPath();
    ctx.arc(sidebarLocalXOrigin + binWidth / 2, canvas.height / 4 + timerCircleRadius / 2, timerCircleRadius, 0, Math.PI * 2);
    ctx.fillStyle = "#F4C831";
    ctx.fill();
    ctx.closePath();
}

function drawFilledCircle()
{
    ctx.beginPath();
    ctx.moveTo(sidebarLocalXOrigin + binWidth / 2, canvas.height / 4 + timerCircleRadius / 2);
    ctx.arc(sidebarLocalXOrigin + binWidth / 2, canvas.height / 4 + timerCircleRadius / 2, timerCircleRadius, startAngle, endAngle);
    ctx.fillStyle = "#FFFFFF";
    ctx.fill();
    ctx.closePath();
}

function changeChooseButtonSize()
{
    if(chooseButtonSize < 250 && increaseChooseButtonSize)
    {
        chooseButtonSize += 1;

        matchingButton.x -= 0.5;
        matchingButton.y -= 0.5;

        matchingButton.width = chooseButtonSize;
        matchingButton.height = chooseButtonSize;

        sortingButton.x -= 0.5;
        sortingButton.y -= 0.5;

        sortingButton.width = chooseButtonSize;
        sortingButton.height = chooseButtonSize;

        if(chooseButtonSize >= 250)
        {
            increaseChooseButtonSize = false;
        }
    }
    else
    {
        chooseButtonSize -= 1;

        matchingButton.x += 0.5;
        matchingButton.y += 0.5;

        matchingButton.width = chooseButtonSize;
        matchingButton.height = chooseButtonSize;

        sortingButton.x += 0.5;
        sortingButton.y += 0.5;

        sortingButton.width = chooseButtonSize;
        sortingButton.height = chooseButtonSize;

        if(chooseButtonSize <= 200)
        {
            increaseChooseButtonSize = true;
        }
    }
}

function changePlayButtonSize()
{
    if(currentPlayButtonSize < 125 && increasePlayButtonSize)
    {
        currentPlayButtonSize += 0.5;

        playButton.x -= 0.25;
        playButton.y -= 0.25;

        playButton.size = currentPlayButtonSize;

        if(currentPlayButtonSize >= 125)
        {
            increasePlayButtonSize = false;
        }
    }
    else
    {
        currentPlayButtonSize -= 0.5;

        playButton.x += 0.25;
        playButton.y += 0.25;

        playButton.size = currentPlayButtonSize;

        if(currentPlayButtonSize <= 100)
        {
            increasePlayButtonSize = true;
        }
    }
}

function changeLevelButtonSize()
{
    if(levelButtonWidth < 150 && increaseLevelButtonSize)
    {
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

        if(levelButtonWidth >= 150)
        {
            increaseLevelButtonSize = false;
        }
    }
    else
    {
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

        if(levelButtonWidth <= 125)
        {
            increaseLevelButtonSize = true;
        }
    }
}

function changeRestartAndHomeButtonSize()
{
    if(currentPlayButtonSize < 125 && increasePlayButtonSize)
    {
        currentPlayButtonSize += 0.5;

        restartButton.x -= 0.25;
        restartButton.y -= 0.25;

        restartButton.size = currentPlayButtonSize;

        homeButton.x -= 0.25;
        homeButton.y -= 0.25;

        homeButton.size = currentPlayButtonSize;

        if(currentPlayButtonSize >= 125)
        {
            increasePlayButtonSize = false;
        }
    }
    else
    {
        currentPlayButtonSize -= 0.5;

        restartButton.x += 0.25;
        restartButton.y += 0.25;

        restartButton.size = currentPlayButtonSize;

        homeButton.x += 0.25;
        homeButton.y += 0.25;

        homeButton.size = currentPlayButtonSize;

        if(currentPlayButtonSize <= 100)
        {
            increasePlayButtonSize = true;
        }
    }
}

function draw()
{
    if(currentState == state.LOADING){
        drawLoadingScreen();
        
    }else if(currentState == state.MAININTRO)
    {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        drawMainIntroScreen();

        changePlayButtonSize();
    }
    else if(currentState == state.WELCOME1)
    {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        drawWelcome1Screen();

        changePlayButtonSize();
    }
    else if(currentState == state.WELCOME2)
    {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        drawWelcome2Screen();

        changePlayButtonSize();
    }
    else if(currentState == state.CHOOSEGAME)
    {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        drawChooseGameScreen();

        changeChooseButtonSize();
    }
    else if(currentState == state.MATCHINTRO1)
    {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        drawMatchingIntro1();

        changePlayButtonSize();
    }
    else if(currentState == state.MATCHINTRO2)
    {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        drawMatchingIntro2();

        changePlayButtonSize();
    }
    else if(currentState == state.MATCHINTRO3)
    {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        drawMatchingIntro3();

        changePlayButtonSize();
    }
    else if(currentState == state.MATCHLEVEL)
    {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        drawMatchingChooseLevelScreen();

        changeLevelButtonSize();
    }
    else if(currentState == state.SORTINTRO1)
    {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        drawSortingIntro1();

        changePlayButtonSize();
    }
    else if(currentState == state.SORTINTRO2)
    {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        drawSortingIntro2();

        changePlayButtonSize();
    }
    else if(currentState == state.SORTLEVEL)
    {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        drawSortingChooseLevelScreen();

        changeLevelButtonSize();
    }
    else if(currentState == state.PLAYMATCH)
    {
        timer.update();

        if(!timer.isPaused() && !timer.isMatchDelayed() && !timer.isEndDelayed())
        {
            percent = timer.getRunTime() / timer.getTimerTime();

            timerBarWidth = percent * canvas.width;

            timeElapsed = Number(timer.getRunTime()/1000).toFixed(2);
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        drawGameBoard();
        drawScore();
        drawEmptyBar();
        drawTimerBar();
        drawTiles();

        if(displayMatchInfo)
        {
            drawMatchInfo();
        }

        if(timer.isPaused())
        {
            muteButton.x = canvas.width / 2 - originalPlayButtonSize + originalPlayButtonSize / 8;
            muteButton.y = canvas.height / 2 + originalPlayButtonSize / 2;
            muteButton.size = originalPlayButtonSize;
            drawPauseScreen();
        }
        else
        {
            drawPauseButton();
            muteButton.x = canvas.width - soundButtonSize - (soundButtonSize/8);
            muteButton.y = soundButtonSize / 3.7;
            muteButton.size = soundButtonSize;
            drawMuteButton();
        }

        if(score == tiles.length * 50 / 2 && !timer.isMatchDelayed() && !timer.isEndDelayed())
        {
            if(!muted)
            {
                matchingMusic.pause();
                backgroundMusic.currentTime = 0;
                backgroundMusic.play();
            }

            currentState = state.END;

            homeButton.x = canvas.width / 3 + originalPlayButtonSize / 2;
            homeButton.y = canvas.height / 2 + canvas.height / 4 - originalPlayButtonSize / 2;

            restartButton.x = canvas.width / 4 - originalPlayButtonSize / 2;
            restartButton.y = canvas.height / 2 + canvas.height / 4 - originalPlayButtonSize / 2;

            muteButton.x = canvas.width - soundButtonSize - soundButtonSize / 8;
            muteButton.y = soundButtonSize / 8;
            muteButton.size = soundButtonSize;
        }

        if(numberTilesFlipped == 2 && !timer.isMissDelayed())
        {
            numberTilesFlipped = 0;
            tiles[firstFlippedTileIndex].flipped = false;
            tiles[secondFlippedTileIndex].flipped = false;
        }

        if(timer.getRunTime() > timer.getTimerTime() && !timer.isPaused() && !timer.isMatchDelayed() && !timer.isEndDelayed())
        {
            if(!muted)
            {
                matchingMusic.pause();
                backgroundMusic.currentTime = 0;
                backgroundMusic.play();
            }

            currentState = state.END;

            homeButton.x = canvas.width / 3 + originalPlayButtonSize / 2;
            homeButton.y = canvas.height / 2 + canvas.height / 4 - originalPlayButtonSize / 2;

            restartButton.x = canvas.width / 4 - originalPlayButtonSize / 2;
            restartButton.y = canvas.height / 2 + canvas.height / 4 - originalPlayButtonSize / 2;

            muteButton.x = canvas.width - soundButtonSize - soundButtonSize / 8;
            muteButton.y = soundButtonSize / 8;
            muteButton.size = soundButtonSize;
        }
    }
    else if(currentState == state.PLAYSORT)
    {
        timer.update();

        if(!timer.isPaused())
        {
            percent = timer.getRunTime() / timer.getTimerTime();

            endAngle = startAngle + (percent * Math.PI * 2);

            timeElapsed = Number(timer.getRunTime()/1000).toFixed(2);
        }

        for(i = garbage.length - 1; i >= 0; i--)
        {
            if(garbage[i].y > canvas.height - binFrontHeight)
            {
                if(!muted)
                {
                    tileMatchSound.load();
                    tileMatchSound.play();
                }

                if(garbage[i].type != landfill)
                {
                    recyclingSorted++;
                    scorePercentage = Number(recyclingSorted / startingGarbageCount * 100).toFixed(0);
                }
                else
                {
                    landfillSorted++;
                }

                garbage.splice(i, 1);
                itemsRemaining--;

                if(itemsRemaining < 1)
                {
                    timer.missDelay();
                }
            }
        }

        if(timer.getRunTime() > lastDropTime && garbageQueue.length > 0 && !timer.isPaused())
        {
            garbage.push(garbageQueue.pop());
            lastDropTime += dropGarbageInterval;
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        drawSortingGame();

        if(timer.isPaused())
        {
            muteButton.x = canvas.width / 2 - originalPlayButtonSize + originalPlayButtonSize / 8;
            muteButton.y = canvas.height / 2 + originalPlayButtonSize / 2;
            muteButton.size = originalPlayButtonSize;
            drawPauseScreen();
        }
        else
        {
            pauseButton.x = sidebarLocalXOrigin + binWidth / 4 - sortButtonSize / 2;
            pauseButton.y = canvas.height * (7/16);
            pauseButton.size = sortButtonSize;
            drawPauseButton();
            muteButton.x = canvas.width - binWidth / 4 - sortButtonSize / 2;
            muteButton.y = canvas.height * (7/16);
            muteButton.size = sortButtonSize;
            drawMuteButton();
        }

        if(timer.getRunTime() > timer.getTimerTime() && !timer.isPaused())
        {
            if(!muted)
            {
                sortingMusic.pause();
                backgroundMusic.currentTime = 0;
                backgroundMusic.play();
            }

            currentState = state.END;

            homeButton.x = canvas.width / 3 + originalPlayButtonSize / 2;
            homeButton.y = canvas.height / 2 + canvas.height / 4 - originalPlayButtonSize / 2;

            restartButton.x = canvas.width / 4 - originalPlayButtonSize / 2;
            restartButton.y = canvas.height / 2 + canvas.height / 4 - originalPlayButtonSize / 2;

            muteButton.x = canvas.width - soundButtonSize - soundButtonSize / 8;
            muteButton.y = soundButtonSize / 8;
            muteButton.size = soundButtonSize;
        }

        if(itemsRemaining < 1 && !timer.isMissDelayed())
        {
            if(!muted)
            {
                sortingMusic.pause();
                backgroundMusic.currentTime = 0;
                backgroundMusic.play();
            }

            currentState = state.END;

            homeButton.x = canvas.width / 3 + originalPlayButtonSize / 2;
            homeButton.y = canvas.height / 2 + canvas.height / 4 - originalPlayButtonSize / 2;

            restartButton.x = canvas.width / 4 - originalPlayButtonSize / 2;
            restartButton.y = canvas.height / 2 + canvas.height / 4 - originalPlayButtonSize / 2;

            muteButton.x = canvas.width - soundButtonSize - soundButtonSize / 8;
            muteButton.y = soundButtonSize / 8;
            muteButton.size = soundButtonSize;
        }

        if(!timer.isPaused())
        {
            for(i = 0; i < garbage.length; i++)
            {
                for(j = 0; j < garbage.length; j++)
                {
                    if(i != j)
                    {
                        if(garbage[i].isColliding(garbage[j]) && garbage[i].y < garbage[j].y)
                        {
                            garbage[i].falling = false;
                        }
                    }
                }

                if(garbage[i].isColliding(draggedGarbage) && mouseDown)
                {
                    garbage[i].falling = false;
                }

                if(garbage[i].y + garbage[i].size < canvas.height - binFrontHeight)
                {
                    if(garbage[i].falling)
                    {
                        garbage[i].y += fallSpeed;
                    }
                }
                else if((garbage[i].x >= paperColumnStart &&
                         garbage[i].x + garbageSize <= paperColumnEnd &&
                         garbage[i].type == paper) ||
                        (garbage[i].x >= comingledColumnStart &&
                         garbage[i].x + garbageSize <= comingledColumnEnd &&
                         garbage[i].type == comingled) ||
                        (garbage[i].x >= organicsColumnStart &&
                         garbage[i].x + garbageSize <= organicsColumnEnd &&
                         garbage[i].type == organics)  ||
                        (garbage[i].x >= landfillColumnStart &&
                         garbage[i].x + garbageSize <= landfillColumnEnd &&
                         garbage[i].type == landfill))
                {
                    if(garbage[i].falling)
                    {
                        garbage[i].y += fallSpeed;
                    }
                }

                garbage[i].falling = true;
            }
        }
    }
    else if(currentState == state.END)
    {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        drawEndGameScreen();

        changeRestartAndHomeButtonSize();
    }

    requestAnimationFrame(draw);
}

function startGame(){
    // create button objects now that images exist
    matchingButton = new RectangularButton(canvas.width / 4 - chooseButtonSize / 2, canvas.height / 4 - chooseButtonSize / 2, chooseButtonSize, chooseButtonSize, matchingButtonImg);
    sortingButton = new RectangularButton(canvas.width / 2 + canvas.width / 4 - chooseButtonSize / 2, canvas.height / 4 - chooseButtonSize / 2, chooseButtonSize, chooseButtonSize, sortingButtonImg);
    playButton = new CircularButton(canvas.width / 2 - originalPlayButtonSize - originalPlayButtonSize / 2, canvas.height / 2 + canvas.height / 4 - originalPlayButtonSize / 2, originalPlayButtonSize, playButtonImg);

    level1Button = new RectangularButton(canvas.width / 4 - levelButtonWidth / 2 - levelButtonWidth, canvas.height / 2 + canvas.height / 4 - levelButtonHeight / 2, levelButtonWidth, levelButtonHeight, level1Img);
    level2Button = new RectangularButton(canvas.width / 4, canvas.height / 2 + canvas.height / 4 - levelButtonHeight / 2, levelButtonWidth, levelButtonHeight, level2Img);
    level3Button = new RectangularButton(canvas.width / 4 + levelButtonWidth / 2 + levelButtonWidth, canvas.height / 2 + canvas.height / 4 - levelButtonHeight / 2, levelButtonWidth, levelButtonHeight, level3Img);

    pauseButton = new CircularButton(canvas.width - (originalPlayButtonSize * 2), canvas.height - originalPlayButtonSize - 15, originalPlayButtonSize, pauseButtonImg);
    restartButton = new CircularButton(canvas.width / 4 - originalPlayButtonSize / 2, canvas.height / 2 + canvas.height / 4 - originalPlayButtonSize / 2, originalPlayButtonSize, restartButtonImg);
    homeButton = new CircularButton(canvas.width / 3 + originalPlayButtonSize / 2, canvas.height / 2 + canvas.height / 4 - originalPlayButtonSize / 2, originalPlayButtonSize, homeButtonImg);
    muteButton = new CircularButton(canvas.width - soundButtonSize  - soundButtonSize  / 8, soundButtonSize  / 8, soundButtonSize , muteImg);

    // register listeners and start loop
    if(window.registerInputListeners) registerInputListeners();
    draw();
}

// expose startGame
window.startGame = startGame;
