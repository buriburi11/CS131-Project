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
        timerTime = 85000;
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
        timerTime = 130000;
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
        timerTime = 200000;
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
        timerTime = 100000;
        dropGarbageInterval = 2000;
        garbageQueue = [new Garbage(getRandomPaperX(), -garbageSize, garbageSize, newsPaperMatchImg, paper), new Garbage(getRandomPaperX(), -garbageSize, garbageSize, cardboardMatchImg, paper), new Garbage(getRandomPaperX(), -garbageSize, garbageSize, cerealMatchImg, paper), new Garbage(getRandomPaperX(), -garbageSize, garbageSize, mailMatchImg, paper), new Garbage(getRandomComingledX(), -garbageSize, garbageSize, bottleMatchImg, comingled), new Garbage(getRandomComingledX(), -garbageSize, garbageSize, sodaCanMatchImg, comingled), new Garbage(getRandomComingledX(), -garbageSize, garbageSize, canMatchImg, comingled), new Garbage(getRandomComingledX(), -garbageSize, garbageSize, glassBottleMatchImg, comingled), new Garbage(getRandomOrganicsX(), -garbageSize, garbageSize, bananaMatchImg, organics), new Garbage(getRandomOrganicsX(), -garbageSize, garbageSize, appleMatchImg, organics), new Garbage(getRandomOrganicsX(), -garbageSize, garbageSize, grassMatchImg, organics), new Garbage(getRandomOrganicsX(), -garbageSize, garbageSize, pumpkinMatchImg, organics), new Garbage(getRandomLandfillX(), -garbageSize, garbageSize, chipsMatchImg, landfill), new Garbage(getRandomLandfillX(), -garbageSize, garbageSize, brokenPlateMatchImg, landfill), new Garbage(getRandomLandfillX(), -garbageSize, garbageSize, diaperMatchImg, landfill), new Garbage(getRandomLandfillX(), -garbageSize, garbageSize, plasticBagMatchImg, landfill)];
        garbageQueue.sort(function(a, b){return 0.5 - Math.random();});
    }

    if(level == 2)
    {
        timerTime = 150000;
        dropGarbageInterval = 1500;
        garbageQueue = [new Garbage(getRandomPaperX(), -garbageSize, garbageSize, newsPaperMatchImg, paper), new Garbage(getRandomPaperX(), -garbageSize, garbageSize, cardboardMatchImg, paper), new Garbage(getRandomPaperX(), -garbageSize, garbageSize, cerealMatchImg, paper), new Garbage(getRandomPaperX(), -garbageSize, garbageSize, mailMatchImg, paper), new Garbage(getRandomComingledX(), -garbageSize, garbageSize, bottleMatchImg, comingled), new Garbage(getRandomComingledX(), -garbageSize, garbageSize, sodaCanMatchImg, comingled), new Garbage(getRandomComingledX(), -garbageSize, garbageSize, canMatchImg, comingled), new Garbage(getRandomComingledX(), -garbageSize, garbageSize, glassBottleMatchImg, comingled), new Garbage(getRandomOrganicsX(), -garbageSize, garbageSize, bananaMatchImg, organics), new Garbage(getRandomOrganicsX(), -garbageSize, garbageSize, appleMatchImg, organics), new Garbage(getRandomOrganicsX(), -garbageSize, garbageSize, grassMatchImg, organics), new Garbage(getRandomOrganicsX(), -garbageSize, garbageSize, pumpkinMatchImg, organics), new Garbage(getRandomLandfillX(), -garbageSize, garbageSize, chipsMatchImg, landfill), new Garbage(getRandomLandfillX(), -garbageSize, garbageSize, brokenPlateMatchImg, landfill), new Garbage(getRandomLandfillX(), -garbageSize, garbageSize, diaperMatchImg, landfill), new Garbage(getRandomLandfillX(), -garbageSize, garbageSize, plasticBagMatchImg, landfill), new Garbage(getRandomPaperX(), -garbageSize, garbageSize, eggsMatchImg, paper), new Garbage(getRandomPaperX(), -garbageSize, garbageSize, papersMatchImg, paper), new Garbage(getRandomComingledX(), -garbageSize, garbageSize, strawAndLidMatchImg, comingled), new Garbage(getRandomComingledX(), -garbageSize, garbageSize, glassJarMatchImg, comingled), new Garbage(getRandomOrganicsX(), -garbageSize, garbageSize, milkCartonMatchImg, organics), new Garbage(getRandomOrganicsX(), -garbageSize, garbageSize, leafMatchImg, organics), new Garbage(getRandomLandfillX(), -garbageSize, garbageSize, juiceMatchImg, landfill), new Garbage(getRandomLandfillX(), -garbageSize, garbageSize, styrofoamMatchImg, landfill)];
        garbageQueue.sort(function(a, b){return 0.5 - Math.random();});
    }

    if(level == 3)
    {
        timerTime = 250000;
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

    // Spawn first item immediately in keyboard mode
    if (keyboardMode && garbageQueue.length > 0) {
        activeGarbage = garbageQueue.pop();
        activeGarbage.x = canvas.width / 2 - garbageSize / 2;
        activeGarbage.y = -garbageSize;
        garbage.push(activeGarbage);
    }
}

function image(imageSrc) {
    var image = new Image();
    image.src = imageSrc;
    return image;
}

function getRandomPaperX() {
    var min = binWidth;
    var max = canvas.width - binWidth - garbageSize;
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

function clickHandler(e)
{
    var x = e.pageX - canvas.offsetLeft;
    var y = e.pageY - canvas.offsetTop;

    if(currentState == state.PLAYMATCH)
    {
        if(timer.isMatchDelayed())
        {
            timer.endMatchDelay();
            timer.update();
            numberTilesFlipped = 0;
        }
    }

    if(currentState == state.MAININTRO)
    {
        if(playButton.clicked(x, y))
        {
            if(!muted)
            {
                backgroundMusic.play();
                buttonSound.load();
                buttonSound.play();
            }

            currentState = state.WELCOME1;

            playButton.size = originalPlayButtonSize;
            currentPlayButtonSize = originalPlayButtonSize;
            increasePlayButtonSize = true;
        }

        toggleAudio(x, y);
    }
    else if(currentState == state.WELCOME1)
    {
        if(playButton.clicked(x, y))
        {
            if(!muted)
            {
                buttonSound.load();
                buttonSound.play();
            }

            currentState = state.WELCOME2;

            playButton.size = originalPlayButtonSize;
            currentPlayButtonSize = originalPlayButtonSize;
            increasePlayButtonSize = true;
        }

        toggleAudio(x, y);
    }
    else if(currentState == state.WELCOME2)
    {
        if(playButton.clicked(x, y))
        {
            if(!muted)
            {
                buttonSound.load();
                buttonSound.play();
            }

            currentState = state.CHOOSEGAME;
        }

        toggleAudio(x, y);
    }
    else if(currentState == state.CHOOSEGAME)
    {
        if(matchingButton.clicked(x, y))
        {
            if(!muted)
            {
                buttonSound.load();
                buttonSound.play();
            }

            currentState = state.MATCHINTRO1;

            playButton.x = canvas.width / 2 + canvas.width / 4 - originalPlayButtonSize / 2;
            playButton.y = canvas.height / 2 + canvas.height / 4 - originalPlayButtonSize / 2;
            playButton.size = originalPlayButtonSize;
            currentPlayButtonSize = originalPlayButtonSize;
            increasePlayButtonSize = true;
        }
        else if(sortingButton.clicked(x, y))
        {
            if(!muted)
            {
                buttonSound.load();
                buttonSound.play();
            }

            currentState = state.SORTINTRO1;

            playButton.x = canvas.width / 2 - originalPlayButtonSize/2;
            playButton.y = canvas.height / 2 - originalPlayButtonSize/4;
            playButton.size = originalPlayButtonSize;
            currentPlayButtonSize = originalPlayButtonSize;
            increasePlayButtonSize = true;
        }

        toggleAudio(x, y);
    }
    else if(currentState == state.MATCHINTRO1)
    {
        if(playButton.clicked(x, y))
        {
            if(!muted)
            {
                buttonSound.load();
                buttonSound.play();
            }

            currentState = state.MATCHINTRO2;

            /*
            playButton.x = canvas.width / 2 - originalPlayButtonSize / 2;
            playButton.y = canvas.height / 2 + canvas.height / 4 - originalPlayButtonSize - originalPlayButtonSize / 8;
            */

            //position for MatchingIntro2 only (move to the left of the bubble)
            playButton.x = canvas.width / 2 - canvas.width / 3 - originalPlayButtonSize / 2; 
            playButton.y = canvas.height / 2 - canvas.height / 14 - originalPlayButtonSize;
            playButton.size = originalPlayButtonSize;
            currentPlayButtonSize = originalPlayButtonSize;
            increasePlayButtonSize = true;
        }

        toggleAudio(x, y);
    }
    else if(currentState == state.MATCHINTRO2)
    {
        if(playButton.clicked(x, y))
        {
            if(!muted)
            {
                buttonSound.load();
                buttonSound.play();
            }

            currentState = state.MATCHINTRO3;

            playButton.x = canvas.width / 2 - canvas.width / 4 - originalPlayButtonSize / 2;
            playButton.y = canvas.height / 2 + canvas.height / 4 - originalPlayButtonSize / 2;
            playButton.size = originalPlayButtonSize;
            currentPlayButtonSize = originalPlayButtonSize;
            increasePlayButtonSize = true;
        }

        toggleAudio(x, y);
    }
    else if(currentState == state.MATCHINTRO3)
    {
        if(playButton.clicked(x, y))
        {
            if(!muted)
            {
                buttonSound.load();
                buttonSound.play();
            }

            currentPlayButtonSize = originalPlayButtonSize;
            increasePlayButtonSize = true;

            currentState = state.MATCHLEVEL;

            level1Button.x = canvas.width / 4 - levelButtonWidth / 2 - levelButtonWidth;
            level1Button.y = canvas.height / 2 + canvas.height / 4 - levelButtonHeight / 2 + 20;

            level2Button.x = canvas.width / 4;
            level2Button.y = canvas.height / 2 + canvas.height / 4 - levelButtonHeight / 2 + 20;

            level3Button.x = canvas.width / 4 + levelButtonWidth / 2 + levelButtonWidth;
            level3Button.y = canvas.height / 2 + canvas.height / 4 - levelButtonHeight / 2 + 20;
        }

        toggleAudio(x, y);
    }
    else if(currentState == state.MATCHLEVEL)
    {
        toggleAudio(x, y);

        if(level1Button.clicked(x, y) || level2Button.clicked(x, y) || level3Button.clicked(x, y))
        {
            if(!muted)
            {
                buttonSound.load();
                buttonSound.play();
            }

            if(level1Button.clicked(x, y))
            {
                level = 1;
            }

            if(level2Button.clicked(x, y))
            {
                level = 2;

            }

            if(level3Button.clicked(x, y))
            {
                level = 3;
            }

            setMatchLevelBoard();

            currentState = state.PLAYMATCH;

            pauseButton.image = pauseButtonImg;
            pauseButton.x = canvas.width - originalPlayButtonSize * 2;
            pauseButton.y = canvas.height - originalPlayButtonSize - 15;

            homeButton.x = canvas.width / 2 - originalPlayButtonSize * 2 - originalPlayButtonSize / 4;
            homeButton.y = canvas.height / 2 + originalPlayButtonSize / 2;
            homeButton.size = originalPlayButtonSize;

            restartButton.x = canvas.width / 2 - originalPlayButtonSize + originalPlayButtonSize / 8;
            restartButton.y = canvas.height / 2 - originalPlayButtonSize / 2 - originalPlayButtonSize / 8;
            restartButton.size = originalPlayButtonSize;

            muteButton.x = canvas.width / 2 - originalPlayButtonSize + originalPlayButtonSize / 8;
            muteButton.y = canvas.height / 2 + originalPlayButtonSize / 2;
            muteButton.size = originalPlayButtonSize;

            if(!muted)
            {
                backgroundMusic.pause();
                matchingMusic.currentTime = 0;
                matchingMusic.play();
            }

            timer.setTimerTime(timerTime);
            timer.start();
        }
    }
    else if(currentState == state.PLAYMATCH)
    {
    	if(score != tiles.length * 50 / 2)
    	{
        	toggleAudio(x, y); 
        }

        for(i = 0; i < tiles.length; i++)
        {
            if(tiles[i].clicked(x, y) && !timer.isPaused() && !tiles[i].flipped && !tiles[i].matched && numberTilesFlipped < 2 && !timer.isMatchDelayed() && !timer.isEndDelayed())
            {
                tiles[i].flipped = true;

                if(numberTilesFlipped == 1)
                {
                    secondFlippedTileIndex = i;
                }
                else
                {
                    if(!muted)
                    {
                        tileFlipSound.load();
                        tileFlipSound.play();
                    }

                    firstFlippedTileIndex = i;
                }

                numberTilesFlipped++;

                if(numberTilesFlipped == 2)
                {
                    if(tiles[firstFlippedTileIndex].image == tiles[secondFlippedTileIndex].image)
                    {
                        if(!muted)
                        {
                            tileMatchSound.load();
                            tileMatchSound.play();
                        }

                        tiles[firstFlippedTileIndex].matched = true;
                        tiles[secondFlippedTileIndex].matched = true;

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

                        displayMatchInfo = true;

                        score += 50;

                        if(!muted)
                        {
                            tileMatchSound.load();
                            tileMatchSound.play();
                        }

                        if(score != tiles.length * 50 / 2)
                        {
                            timer.matchDelay();
                        }
                        else
                        {
                            timer.endDelay();
                        }
                    }
                    else
                    {
                        if(!muted)
                        {
                            tileFlipSound.load();
                            tileFlipSound.play();
                        }

                        timer.missDelay();
                    }
                }
            }
        }

        if(pauseButton.clicked(x, y) && score != tiles.length * 50 / 2)
        {
            if(!timer.isPaused() && !timer.isMatchDelayed() && !timer.isEndDelayed())
            {
                if(!muted)
                {
                    buttonSound.load();
                    buttonSound.play();
                }

                timer.pause();
                pauseButton.image = playButtonImg;
                pauseButton.x = canvas.width / 2 - originalPlayButtonSize * 2 - originalPlayButtonSize / 4;
                pauseButton.y = canvas.height / 2 - originalPlayButtonSize / 2 - originalPlayButtonSize / 8;
            }
            else if(!timer.isMatchDelayed() && !timer.isEndDelayed())
            {
                if(!muted)
                {
                    buttonSound.load();
                    buttonSound.play();
                }

                timer.unpause();
                pauseButton.image = pauseButtonImg;
                pauseButton.x = canvas.width - originalPlayButtonSize * 2;
                pauseButton.y = canvas.height - originalPlayButtonSize - 15;
            }
        }

        if(restartButton.clicked(x, y) && timer.isPaused())
        {
            if(!muted)
            {
                buttonSound.load();
                buttonSound.play();

                matchingMusic.pause();
                backgroundMusic.currentTime = 0;
                backgroundMusic.play();
            }

            currentState = state.MATCHLEVEL;

            homeButton.x = canvas.width / 3 + originalPlayButtonSize / 2;
            homeButton.y = canvas.height / 2 + canvas.height / 4 - originalPlayButtonSize / 2;

            restartButton.x = canvas.width / 4 - originalPlayButtonSize / 2;
            restartButton.y = canvas.height / 2 + canvas.height / 4 - originalPlayButtonSize / 2;

            muteButton.x = canvas.width - soundButtonSize - soundButtonSize / 8;
            muteButton.y = soundButtonSize / 8;
            muteButton.size = soundButtonSize;
        }

        if(homeButton.clicked(x, y) && timer.isPaused())
        {
            if(!muted)
            {
                buttonSound.load();
                buttonSound.play();

                matchingMusic.pause();
                backgroundMusic.currentTime = 0;
                backgroundMusic.play();
            }

            currentState = state.CHOOSEGAME;

            homeButton.x = canvas.width / 3 + originalPlayButtonSize / 2;
            homeButton.y = canvas.height / 2 + canvas.height / 4 - originalPlayButtonSize / 2;

            restartButton.x = canvas.width / 4 - originalPlayButtonSize / 2;
            restartButton.y = canvas.height / 2 + canvas.height / 4 - originalPlayButtonSize / 2;

            muteButton.x = canvas.width - soundButtonSize - soundButtonSize / 8;
            muteButton.y = soundButtonSize / 8;
            muteButton.size = soundButtonSize;
        }
    }
    else if(currentState == state.SORTINTRO1)
    {
        if(playButton.clicked(x, y))
        {
            if(!muted)
            {
                buttonSound.load();
                buttonSound.play();
            }

            currentState = state.SORTINTRO2;

            playButton.x = canvas.width / 2 - originalPlayButtonSize/2;
            playButton.y = canvas.height / 2 - originalPlayButtonSize/4;
            playButton.size = originalPlayButtonSize;
            currentPlayButtonSize = originalPlayButtonSize;
            increasePlayButtonSize = true;
        }

        toggleAudio(x, y);
    }
    else if(currentState == state.SORTINTRO2)
    {
        if(playButton.clicked(x, y))
        {
            if(!muted)
            {
                buttonSound.load();
                buttonSound.play();
            }

            currentState = state.SORTLEVEL;

            level1Button.x = canvas.width / 8;
            level1Button.y = canvas.height / 2 - levelButtonHeight / 2;
            level2Button.x = canvas.width / 8 + levelButtonWidth * (3 / 2);
            level2Button.y = canvas.height / 2 - levelButtonHeight / 2;
            level3Button.x = canvas.width / 8 + levelButtonWidth * 3;
            level3Button.y = canvas.height / 2 - levelButtonHeight / 2;
        }

        toggleAudio(x, y);
    }
    else if(currentState == state.SORTLEVEL)
    {
        if(level1Button.clicked(x, y) || level2Button.clicked(x, y) || level3Button.clicked(x, y))
        {
            if(!muted)
            {
                buttonSound.load();
                buttonSound.play();
            }

            if(level1Button.clicked(x, y))
            {
                level = 1;
            }

            if(level2Button.clicked(x, y))
            {
                level = 2;
            }
            
            if(level3Button.clicked(x, y))
            {
                level = 3;
            }

            setSortLevelBoard();

            currentState = state.PLAYSORT;

            pauseButton.image = pauseButtonImg;
            pauseButton.x = sidebarLocalXOrigin + (binWidth*(1/8));
            pauseButton.y = canvas.height * (7/16);
            pauseButton.size = sortButtonSize;

            muteButton.x = sidebarLocalXOrigin + (binWidth*(9/16));
            muteButton.y = canvas.height * (7/16);
            muteButton.size = sortButtonSize;

            homeButton.x = canvas.width / 2 - originalPlayButtonSize * 2 - originalPlayButtonSize / 4;
            homeButton.y = canvas.height / 2 + originalPlayButtonSize / 2;
            homeButton.size = originalPlayButtonSize;

            restartButton.x = canvas.width / 2 - originalPlayButtonSize + originalPlayButtonSize / 8;
            restartButton.y = canvas.height / 2 - originalPlayButtonSize / 2 - originalPlayButtonSize / 8;
            restartButton.size = originalPlayButtonSize;

            if(!muted)
            {
                backgroundMusic.pause();
                sortingMusic.currentTime = 0;
                sortingMusic.play();
            }
            
            timer.setTimerTime(timerTime);
            timer.start();
        }

        toggleAudio(x, y);
    }
    else if(currentState == state.PLAYSORT)
    {
    	if(itemsRemaining >= 1)
    	{
        	toggleAudio(x, y);
        }

        if(pauseButton.clicked(x, y) && itemsRemaining >= 1)
        {
            if(!timer.isPaused())
            {
                if(!muted)
                {
                    buttonSound.load();
                    buttonSound.play();
                }

                timer.pause();

                pauseButton.image = playButtonImg;
                pauseButton.x = canvas.width / 2 - originalPlayButtonSize * 2 - originalPlayButtonSize / 4;
                pauseButton.y = canvas.height / 2 - originalPlayButtonSize / 2 - originalPlayButtonSize / 8;
                pauseButton.size = originalPlayButtonSize;
            }
            else
            {
                if(!muted)
                {
                    buttonSound.load();
                    buttonSound.play();
                }

                timer.unpause();

                pauseButton.image = pauseButtonImg;
                pauseButton.x = sidebarLocalXOrigin + (binWidth*(1/8));
                pauseButton.y = canvas.height * (7/16);
                pauseButton.size = sortButtonSize;
            }
        }

        if(restartButton.clicked(x, y) && timer.isPaused())
        {
            if(!muted)
            {
                buttonSound.load();
                buttonSound.play();

                sortingMusic.pause();
                backgroundMusic.currentTime = 0;
                backgroundMusic.play();
            }

            currentState = state.SORTLEVEL;

            homeButton.x = canvas.width / 3 + originalPlayButtonSize / 2;
            homeButton.y = canvas.height / 2 + canvas.height / 4 - originalPlayButtonSize / 2;

            restartButton.x = canvas.width / 4 - originalPlayButtonSize / 2;
            restartButton.y = canvas.height / 2 + canvas.height / 4 - originalPlayButtonSize / 2;

            muteButton.x = canvas.width - soundButtonSize - soundButtonSize / 8;
            muteButton.y = soundButtonSize / 8;
            muteButton.size = soundButtonSize;
        }

        if(homeButton.clicked(x, y) && timer.isPaused())
        {
            if(!muted)
            {
                buttonSound.load();
                buttonSound.play();

                sortingMusic.pause();
                backgroundMusic.currentTime = 0;
                backgroundMusic.play();
            }

            currentState = state.CHOOSEGAME;

            homeButton.x = canvas.width / 3 + originalPlayButtonSize / 2;
            homeButton.y = canvas.height / 2 + canvas.height / 4 - originalPlayButtonSize / 2;

            restartButton.x = canvas.width / 4 - originalPlayButtonSize / 2;
            restartButton.y = canvas.height / 2 + canvas.height / 4 - originalPlayButtonSize / 2;

            muteButton.x = canvas.width - soundButtonSize - soundButtonSize / 8;
            muteButton.y = soundButtonSize / 8;
            muteButton.size = soundButtonSize;
        }
    }
    else if(currentState == state.END)
    {
        if(restartButton.clicked(x, y))
        {
            if(!muted)
            {
                buttonSound.load();
                buttonSound.play();
            }

            if(gameTitle == "matching")
            {
                currentState = state.MATCHLEVEL;
            }
            else
            {
                currentState = state.SORTLEVEL;
            }
        }

        if(homeButton.clicked(x, y))
        {
            if(!muted)
            {
                buttonSound.load();
                buttonSound.play();
            }

            currentState = state.CHOOSEGAME;
        }

        toggleAudio(x, y);
    }
}

function mouseDownHandler(e)
{
    var x = e.pageX - canvas.offsetLeft;
    var y = e.pageY - canvas.offsetTop;

    if(currentState == state.PLAYSORT)
    {
        for(i = garbage.length - 1; i >= 0; i--)
        {
            if(garbage[i].clicked(x, y) && !mouseDown && garbage[i].y + garbageSize < canvas.height - binFrontHeight + fallSpeed)
            {
                dragImg = garbage[i].image;

                draggedGarbage = garbage[i];

                switch(garbage[i].image)
                {
                    case bananaMatchImg:
                    draggedGarbage.image = bananaGSImg;
                    break;
                    case bottleMatchImg:
                    draggedGarbage.image = bottleGSImg;
                    break;
                    case chipsMatchImg:
                    draggedGarbage.image = chipsGSImg;
                    break;
                    case newsPaperMatchImg:
                    draggedGarbage.image = newsPaperGSImg;
                    break;
                    case sodaCanMatchImg:
                    draggedGarbage.image = sodaCanGSImg;
                    break;
                    case appleMatchImg:
                    draggedGarbage.image = appleGSImg;
                    break;
                    case brokenPlateMatchImg:
                    draggedGarbage.image = brokenPlateGSImg;
                    break;
                    case canMatchImg:
                    draggedGarbage.image = canGSImg;
                    break;
                    case cardboardMatchImg:
                    draggedGarbage.image = cardboardGSImg;
                    break;
                    case cerealMatchImg:
                    draggedGarbage.image = cerealGSImg;
                    break;
                    case diaperMatchImg:
                    draggedGarbage.image = diaperGSImg;
                    break;
                    case glassBottleMatchImg:
                    draggedGarbage.image = glassBottleGSImg;
                    break;
                    case glassJarMatchImg:
                    draggedGarbage.image = glassJarGSImg;
                    break;
                    case grassMatchImg:
                    draggedGarbage.image = grassGSImg;
                    break;
                    case leafMatchImg:
                    draggedGarbage.image = leafGSImg;
                    break;
                    case papersMatchImg:
                    draggedGarbage.image = papersGSImg;
                    break;
                    case mailMatchImg:
                    draggedGarbage.image = mailGSImg;
                    break;
                    case plasticBagMatchImg:
                    draggedGarbage.image = plasticBagGSImg;
                    break;
                    case pumpkinMatchImg:
                    draggedGarbage.image = pumpkinGSImg;
                    break;
                    case styrofoamMatchImg:
                    draggedGarbage.image = styrofoamGSImg;
                    break;
                    case milkCartonMatchImg: 
                    draggedGarbage.image = milkGSImg;
                    break;
                    case juiceMatchImg:
                    draggedGarbage.image = juiceGSImg;
                    break;
                    case eggsMatchImg:
                    draggedGarbage.image = eggsGSImg;
                    break;
                    case strawAndLidMatchImg:
                    draggedGarbage.image = strawGSImg;
                    break;
                    case takeOutBoxMatchImg:
                    draggedGarbage.image = chineseGSImg;
                    break;
                    case stickMatchImg:
                    draggedGarbage.image = stickGSImg;
                    break;
                    case candyMatchImg:
                    draggedGarbage.image = candyGSImg;
                    break;
                    case petWasteMatchImg:
                    draggedGarbage.image = poopGSImg;
                    break;
                    case paperRollMatchImg:
                    draggedGarbage.image = paperRollGSImg;
                    break;
                    case paperBagMatchImg:
                    draggedGarbage.image = paperBagGSImg;
                    break;
                    case aluminumFoilMatchImg:
                    draggedGarbage.image = aluminumFoilGSImg;
                    break;
                    case coffeeLidMatchImg:
                    draggedGarbage.image = coffeeLidGSImg;
                    break;
                    default:
                    //do nothing
                }

                dragOffsetX = garbage[i].x - x;
                dragOffsetY = garbage[i].y - y;

                dragX = x + dragOffsetX;
                dragY = y + dragOffsetY;

                garbage.splice(i, 1);

                mouseDown = true;
            }
        }
    }
}

function mouseMoveHandler(e)
{
    var x = e.pageX - canvas.offsetLeft;
    var y = e.pageY - canvas.offsetTop;

    if(currentState == state.PLAYSORT)
    {
        if(mouseDown)
        {
            dragX = x + dragOffsetX;
            dragY = y + dragOffsetY;
        }
    }
}

function mouseUpHandler(e)
{
    if(currentState == state.PLAYSORT)
    {
        if(mouseDown)
        {
            var validPlacement = true;

            var tempX = draggedGarbage.x;
            var tempY = draggedGarbage.y;

            draggedGarbage.x = dragX;
            draggedGarbage.y = dragY;

            for(i = 0; i < garbage.length; i++)
            {
                if(draggedGarbage.isColliding(garbage[i]) && draggedGarbage.y + draggedGarbage.size < canvas.height - binFrontHeight)
                {
                    validPlacement = false;
                }
            }

            if((dragY < 0) || (dragX < 0) || (dragX + garbageSize > canvas.width - binWidth) ||
               (dragY + garbageSize > canvas.height - binFrontHeight && 
                dragX < paperColumnStart &&
                draggedGarbage.type == paper) ||
               (dragY + garbageSize > canvas.height - binFrontHeight && 
                dragX + garbageSize > paperColumnEnd &&
                draggedGarbage.type == paper) ||
               (dragY + garbageSize > canvas.height - binFrontHeight && 
                dragX < comingledColumnStart &&
                draggedGarbage.type == comingled) ||
               (dragY + garbageSize > canvas.height - binFrontHeight && 
                dragX + garbageSize > comingledColumnEnd &&
                draggedGarbage.type == comingled) ||
               (dragY + garbageSize > canvas.height - binFrontHeight && 
                dragX < organicsColumnStart &&
                draggedGarbage.type == organics) ||
               (dragY + garbageSize > canvas.height - binFrontHeight && 
                dragX + garbageSize > organicsColumnEnd &&
                draggedGarbage.type == organics) ||
               (dragY + garbageSize > canvas.height - binFrontHeight && 
                dragX < landfillColumnStart &&
                draggedGarbage.type == landfill) ||
               (dragY + garbageSize > canvas.height - binFrontHeight && 
                dragX + garbageSize > landfillColumnEnd &&
                draggedGarbage.type == landfill))
            {
                validPlacement = false;
            }

            if(validPlacement)
            {
                draggedGarbage.image = dragImg;
                draggedGarbage.falling = true;   // allow it to fall again
                garbage.push(draggedGarbage);
            }
            else
            {
                draggedGarbage.image = dragImg;
                draggedGarbage.x = tempX;
                draggedGarbage.y = tempY;
                draggedGarbage.falling = true;   // allow it to fall again
                garbage.push(draggedGarbage);
            }
        }
    }

    mouseDown = false;
}

//remap touch event as mouse event
function touch2Mouse(e)
{
  var theTouch = e.changedTouches[0];
  var mouseEv;
  
  switch(e.type)
  {
    case "touchstart": mouseEv="mousedown";  break;
    case "touchend":   mouseEv="mouseup"; break;
    case "touchmove":  mouseEv="mousemove"; break;
    default: return;
  }

  var mouseEvent = document.createEvent("MouseEvent");
  mouseEvent.initMouseEvent(mouseEv, true, true, window, 1, theTouch.screenX, theTouch.screenY, theTouch.clientX, theTouch.clientY, false, false, false, false, 0, null);
  theTouch.target.dispatchEvent(mouseEvent);
    //prevent activating multiple events at once
  e.preventDefault();
}

// Drawing Functions
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

        // 🔹 Add highlight around the focused tile
        if (i === focusedTileIndex) {
            ctx.strokeStyle = "red";
            ctx.lineWidth = 4;
            ctx.strokeRect(tiles[i].x, tiles[i].y, tiles[i].size, tiles[i].size);
        }
    }
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

    // 🔹 Highlight active garbage in keyboard mode
    if (keyboardMode && activeGarbage) {
        ctx.strokeStyle = "red";
        ctx.lineWidth = 4;
        ctx.strokeRect(activeGarbage.x, activeGarbage.y, activeGarbage.size, activeGarbage.size);
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
    //sidebar background
    ctx.beginPath();
    ctx.rect(binWidth * 4, 0, binWidth, canvas.height);
    ctx.fillStyle = "#83ccee";
    ctx.fill();
    ctx.closePath();

    //"Time Remaining" text
    ctx.font = "25px Comic Sans MS";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.fillText("Time", sidebarLocalXOrigin + (binWidth*(4/8)), canvas.height * (1/8) - 20);
    ctx.fillText("Remaining", sidebarLocalXOrigin + (binWidth*(4/8)), canvas.height * (1/8) + 10);

    //yellow box that contains "Score:"
    ctx.beginPath();
    ctx.rect(sidebarLocalXOrigin + (binWidth*(1/8)), canvas.height *(3/4)-80, binWidth*(3/4), 60);
    ctx.fillStyle = "#f4c831";
    ctx.fill();
    ctx.closePath();
    ctx.font = "25px Comic Sans MS";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.fillText("Score", sidebarLocalXOrigin + (binWidth*(4/8)), canvas.height *(3/4) - 42);

    //white box that surrounds the percentage score
    ctx.beginPath();
    ctx.rect(sidebarLocalXOrigin + (binWidth*(2/8)), canvas.height * (3/4), binWidth/2, 50);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();

    //the percentage text
    ctx.font = "25px Comic Sans MS";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.fillText(scorePercentage + "%", sidebarLocalXOrigin + (binWidth*(4/8)), canvas.height *(3/4) + 35);

    //percentage description text
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

// Main Game Loop
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
        
        //drawTime();
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

        for (i = garbage.length - 1; i >= 0; i--) {
            if (garbage[i].y > canvas.height - binFrontHeight) {
                // Only count it if it fell into the correct lane
                let correctLane = 
                    (garbage[i].x >= paperColumnStart && garbage[i].x + garbageSize <= paperColumnEnd && garbage[i].type == paper) ||
                    (garbage[i].x >= comingledColumnStart && garbage[i].x + garbageSize <= comingledColumnEnd && garbage[i].type == comingled) ||
                    (garbage[i].x >= organicsColumnStart && garbage[i].x + garbageSize <= organicsColumnEnd && garbage[i].type == organics) ||
                    (garbage[i].x >= landfillColumnStart && garbage[i].x + garbageSize <= landfillColumnEnd && garbage[i].type == landfill);

                if (correctLane) {
                    if (!muted) {
                        tileMatchSound.load();
                        tileMatchSound.play();
                    }

                    if (garbage[i].type != landfill) {
                        recyclingSorted++;
                        scorePercentage = Number((recyclingSorted+landfillSorted) / startingGarbageCount * 100).toFixed(0);
                    } else {
                        landfillSorted++;
                    }

                    // If this was the active garbage, free it so next spawns
                    if (garbage[i] === activeGarbage) {
                        activeGarbage = null;
                    }

                    garbage.splice(i, 1);
                    itemsRemaining--;

                    if (itemsRemaining < 1) {
                        timer.missDelay();
                    }
                } else {
                    // Wrong lane: just sit on bin top
                    garbage[i].y = canvas.height - binFrontHeight - garbageSize;
                    garbage[i].falling = false;
                }
            }
        }

        // Keyboard mode: one item at a time
        if (keyboardMode && !timer.isPaused() && activeGarbage == null && garbageQueue.length > 0) {
            activeGarbage = garbageQueue.pop(); 
            activeGarbage.x = canvas.width/2 - garbageSize/2; // spawn at center top
            activeGarbage.y = -garbageSize;
            garbage.push(activeGarbage);
        }
        // Original mouse mode: keep multi-item spawn
        else if (!keyboardMode && timer.getRunTime() > lastDropTime && garbageQueue.length > 0 && !timer.isPaused()) {
            garbage.push(garbageQueue.pop());
            lastDropTime += dropGarbageInterval;
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        drawSortingGame();

        //drawTime();

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

        // Move and check garbage
        if (!timer.isPaused()) {
            for (i = garbage.length - 1; i >= 0; i--) {
                if (garbage[i].y + garbage[i].size >= canvas.height - binFrontHeight) {
                    // reached bin level
                    let correctLane = 
                        (garbage[i].x >= paperColumnStart && garbage[i].x + garbageSize <= paperColumnEnd && garbage[i].type == paper) ||
                        (garbage[i].x >= comingledColumnStart && garbage[i].x + garbageSize <= comingledColumnEnd && garbage[i].type == comingled) ||
                        (garbage[i].x >= organicsColumnStart && garbage[i].x + garbageSize <= organicsColumnEnd && garbage[i].type == organics) ||
                        (garbage[i].x >= landfillColumnStart && garbage[i].x + garbageSize <= landfillColumnEnd && garbage[i].type == landfill);

                    if (correctLane) {
                        // Score and remove
                        if (!muted) {
                            tileMatchSound.load();
                            tileMatchSound.play();
                        }

                        if (garbage[i].type != landfill) {
                            recyclingSorted++;
                            scorePercentage = Number((recyclingSorted+landfillSorted) / startingGarbageCount * 100).toFixed(0);
                        } else {
                            landfillSorted++;
                        }

                        if (garbage[i] === activeGarbage) {
                            activeGarbage = null; // free highlight
                        }

                        garbage.splice(i, 1);
                        itemsRemaining--;
                        if (itemsRemaining < 1) {
                            timer.missDelay();
                        }
                    } else {
                        // Wrong lane: freeze on top of bin
                        garbage[i].y = canvas.height - binFrontHeight - garbageSize;
                        garbage[i].falling = false;
                    }
                } else {
                    // normal falling
                    if (garbage[i].falling) {
                        garbage[i].y += fallSpeed;
                    }
                }
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

