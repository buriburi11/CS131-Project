// Input and control handlers
function getCanvasXY(e){
    var rect = canvas.getBoundingClientRect();
    var x = e.pageX - rect.left - window.scrollX;
    var y = e.pageY - rect.top - window.scrollY;
    return {x:x,y:y};
}

function clickHandler(e)
{
    var p = getCanvasXY(e);
    var x = p.x; var y = p.y;

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

            playButton.x = canvas.width / 2 - originalPlayButtonSize / 2;
            playButton.y = canvas.height / 2 + canvas.height / 4 - originalPlayButtonSize - originalPlayButtonSize / 8;
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
            level1Button.y = canvas.height / 2 + canvas.height / 4 - levelButtonHeight / 2;

            level2Button.x = canvas.width / 4;
            level2Button.y = canvas.height / 2 + canvas.height / 4 - levelButtonHeight / 2;

            level3Button.x = canvas.width / 4 + levelButtonWidth / 2 + levelButtonWidth;
            level3Button.y = canvas.height / 2 + canvas.height / 4 - levelButtonHeight / 2;
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
    var p = getCanvasXY(e);
    var x = p.x; var y = p.y;

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
    var p = getCanvasXY(e);
    var x = p.x; var y = p.y;

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
    var p = getCanvasXY(e);
    var x = p.x; var y = p.y;

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
                garbage.push(draggedGarbage);
            }
            else
            {
                draggedGarbage.image = dragImg;
                draggedGarbage.x = tempX;
                draggedGarbage.y = tempY;
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

function keyDownHandler(e) {
    // prevent page scroll on arrows/space
    if (["ArrowRight","ArrowLeft","ArrowDown","ArrowUp","Enter"," ", "Spacebar"].includes(e.key)) {
        e.preventDefault();
    }

    if (currentState == state.PLAYMATCH && !timer.isPaused()) {
        const rows = tileRowCount; 
        const cols = tileColumnCount;

        let col = Math.floor(focusedTileIndex / rows);
        let row = focusedTileIndex % rows;

        if (e.key === "ArrowRight") {
            col = (col + 1) % cols;
        } else if (e.key === "ArrowLeft") {
            col = (col - 1 + cols) % cols;
        } else if (e.key === "ArrowDown") {
            row = (row + 1) % rows;
        } else if (e.key === "ArrowUp") {
            row = (row - 1 + rows) % rows;
        } else if (e.key === "Enter" || e.key === " " || e.key === "Spacebar"){
            if (!tiles[focusedTileIndex].flipped && !tiles[focusedTileIndex].matched && numberTilesFlipped < 2 && !timer.isMatchDelayed() && !timer.isEndDelayed()) {
                tiles[focusedTileIndex].flipped = true;

                if (numberTilesFlipped == 1) {
                    secondFlippedTileIndex = focusedTileIndex;
                } else {
                    if (!muted) {
                        tileFlipSound.load();
                        tileFlipSound.play();
                    }
                    firstFlippedTileIndex = focusedTileIndex;
                }

                numberTilesFlipped++;

                if (numberTilesFlipped == 2) {
                    if (tiles[firstFlippedTileIndex].image == tiles[secondFlippedTileIndex].image) {
                        tiles[firstFlippedTileIndex].matched = true;
                        tiles[secondFlippedTileIndex].matched = true;
                        score += 50;
                        // set match info (omitted here for brevity; draw will show existing variables)
                        displayMatchInfo = true;
                        timer.matchDelay();
                        setTimeout(() => {
                            timer.update();
                            timer.endMatchDelay();
                            timer.update();
                            numberTilesFlipped = 0;
                        }, timer.matchDelayDuration + 10);
                    }else {
                        timer.missDelay();
                    }
                }
            }
            return;
        }

        focusedTileIndex = col * rows + row;
    }
}
