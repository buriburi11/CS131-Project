// =====================
// Image Declarations
// =====================
var loadingImg = new Image();
var mainIntroImg = new Image();
var welcome1Img = new Image();
var welcome2Img = new Image();
var chooseGameImg = new Image();
var matchingIntro1Img = new Image();
var matchingIntro2Img = new Image();
var matchingIntro3Img = new Image();
var matchingLevelSelectImg = new Image();
var endScreenMatchingImg = new Image();
var sortingIntro1Img = new Image();
var sortingIntro2Img = new Image();
var sortingLevelSelectImg = new Image();
var endScreenSortingImg = new Image();
var pauseScreenImg = new Image();

// Buttons
var matchingButtonImg = new Image();
var sortingButtonImg = new Image();
var muteImg = new Image();
var unmuteImg = new Image();
var pauseButtonImg = new Image();
var playButtonImg = new Image();
var level1Img = new Image();
var level2Img = new Image();
var level3Img = new Image();
var restartButtonImg = new Image();
var homeButtonImg = new Image();

// Matching game items
var bananaMatchImg = new Image();
var bottleMatchImg = new Image();
var chipsMatchImg = new Image();
var grassMatchImg = new Image();
var newsPaperMatchImg = new Image();
var paperCupMatchImg = new Image();
var paperTowelsMatchImg = new Image();
var plasticBagMatchImg = new Image();
var strawAndLidMatchImg = new Image();
var appleMatchImg = new Image();
var bonesMatchImg = new Image();
var coffeeLidMatchImg = new Image();
var glassJarMatchImg = new Image();
var mailMatchImg = new Image();
var milkCartonMatchImg = new Image();
var paperPlatesMatchImg = new Image();
var petWasteMatchImg = new Image();
var takeOutBoxMatchImg = new Image();
var paperBagMatchImg = new Image();
var sodaCanMatchImg = new Image();
var brokenPlateMatchImg = new Image();
var canMatchImg = new Image();
var cardboardMatchImg = new Image();
var cerealMatchImg = new Image();
var diaperMatchImg = new Image();
var glassBottleMatchImg = new Image();
var pumpkinMatchImg = new Image();
var styrofoamMatchImg = new Image();
var leafMatchImg = new Image();
var papersMatchImg = new Image();
var juiceMatchImg = new Image();
var eggsMatchImg = new Image();
var stickMatchImg = new Image();
var candyMatchImg = new Image();
var paperRollMatchImg = new Image();
var aluminumFoilMatchImg = new Image();

// Sorting grayscale items
var bananaGSImg = new Image();
var bottleGSImg = new Image();
var chipsGSImg = new Image();
var newsPaperGSImg = new Image();
var sodaCanGSImg = new Image();
var appleGSImg = new Image();
var brokenPlateGSImg = new Image();
var canGSImg = new Image();
var cardboardGSImg = new Image();
var cerealGSImg = new Image();
var diaperGSImg = new Image();
var glassBottleGSImg = new Image();
var glassJarGSImg = new Image();
var grassGSImg = new Image();
var leafGSImg = new Image();
var mailGSImg = new Image();
var papersGSImg = new Image();
var plasticBagGSImg = new Image();
var pumpkinGSImg = new Image();
var styrofoamGSImg = new Image();
var milkGSImg = new Image();
var juiceGSImg = new Image();
var eggsGSImg = new Image();
var strawGSImg = new Image();
var chineseGSImg = new Image();
var stickGSImg = new Image();
var candyGSImg = new Image();
var poopGSImg = new Image();
var paperRollGSImg = new Image();
var paperBagGSImg = new Image();
var aluminumFoilGSImg = new Image();
var coffeeLidGSImg = new Image();

// Other graphics
var matchingCardImg = new Image();
var cardFrontImg = new Image();
var sortingBackgroundImg = new Image();
var paperBackImg = new Image();
var paperFrontImg = new Image();
var comingledBackImg = new Image();
var comingledFrontImg = new Image();
var organicsBackImg = new Image();
var organicsFrontImg = new Image();
var landfillBackImg = new Image();
var landfillFrontImg = new Image();

// =====================
// Audio
// =====================
var backgroundMusic = new Audio();
var matchingMusic = new Audio();
var sortingMusic = new Audio();
var buttonSound = new Audio();
var tileFlipSound = new Audio();
var tileMatchSound = new Audio();

// =====================
// Asset Loader
// =====================
var numberLoaded = 0;
var numberOfAssets = 0; // will count dynamically

function loadAssets() {
    function track(imgOrAudio, src) {
        numberOfAssets++;
        imgOrAudio.onload = finishedLoading;
        imgOrAudio.oncanplaythrough = finishedLoading; // for audio
        imgOrAudio.src = src;
    }

    function finishedLoading() {
        numberLoaded++;
    }

    // =====================
    // Screens
    // =====================
    track(loadingImg, "Images/Screens/loadScreen.png");
    track(mainIntroImg, "Images/Screens/mainIntro.png");
    track(welcome1Img, "Images/Screens/welcome1.png");
    track(welcome2Img, "Images/Screens/welcome2.png");
    track(chooseGameImg, "Images/Screens/chooseGame.png");
    track(matchingIntro1Img, "Images/Screens/matchingIntro1.png");
    track(matchingIntro2Img, "Images/Screens/matchingIntro2.png");
    track(matchingIntro3Img, "Images/Screens/matchingIntro3.png");
    track(matchingLevelSelectImg, "Images/Screens/chooseLevelMatching.png");
    track(endScreenMatchingImg, "Images/Screens/endScreenMatching.png");
    track(sortingIntro1Img, "Images/Screens/sortingIntro1.png");
    track(sortingIntro2Img, "Images/Screens/sortingIntro2.png");
    track(sortingLevelSelectImg, "Images/Screens/chooseLevelSorting.png");
    track(endScreenSortingImg, "Images/Screens/endScreenSorting.png");
    track(pauseScreenImg, "Images/Screens/pauseScreen.png");

    // =====================
    // Buttons
    // =====================
    track(matchingButtonImg, "Images/Buttons/matchingButton.png");
    track(sortingButtonImg, "Images/Buttons/sortingButton.png");
    track(muteImg, "Images/Buttons/muteButton.png");
    track(unmuteImg, "Images/Buttons/unmuteButton.png");
    track(pauseButtonImg, "Images/Buttons/pauseButton.png");
    track(playButtonImg, "Images/Buttons/playButton.png");
    track(level1Img, "Images/Buttons/level1.png");
    track(level2Img, "Images/Buttons/level2.png");
    track(level3Img, "Images/Buttons/level3.png");
    track(restartButtonImg, "Images/Buttons/restartButton.png");
    track(homeButtonImg, "Images/Buttons/homeButton.png");

    // =====================
    // Matching (Clear) Items
    // =====================
    track(bananaMatchImg, "Images/Clear/bananaPeelClr.png");
    track(bottleMatchImg, "Images/Clear/bottleClr.png");
    track(chipsMatchImg, "Images/Clear/chipsClr.png");
    track(grassMatchImg, "Images/Clear/grassClr.png");
    track(newsPaperMatchImg, "Images/Clear/newsPaperClr.png");
    track(paperCupMatchImg, "Images/Clear/paperCupClr.png");
    track(paperTowelsMatchImg, "Images/Clear/paperTowelsClr.png");
    track(plasticBagMatchImg, "Images/Clear/plasticBagClr.png");
    track(strawAndLidMatchImg, "Images/Clear/StrawAndLidClr.png");
    track(appleMatchImg, "Images/Clear/appleClr.png");
    track(bonesMatchImg, "Images/Clear/bonesClr.png");
    track(coffeeLidMatchImg, "Images/Clear/coffeeLidClr.png");
    track(glassJarMatchImg, "Images/Clear/glassJarClr.png");
    track(mailMatchImg, "Images/Clear/mailClr.png");
    track(milkCartonMatchImg, "Images/Clear/milkCartonClr.png");
    track(paperPlatesMatchImg, "Images/Clear/paperPlatesClr.png");
    track(petWasteMatchImg, "Images/Clear/petWasteClr.png");
    track(takeOutBoxMatchImg, "Images/Clear/takeOutClr.png");
    track(paperBagMatchImg, "Images/Clear/paperBagClr.png");
    track(sodaCanMatchImg, "Images/Clear/sodaCanClr.png");
    track(brokenPlateMatchImg, "Images/Clear/brokenPlateClr.png");
    track(canMatchImg, "Images/Clear/canClr.png");
    track(cardboardMatchImg, "Images/Clear/cardboardClr.png");
    track(cerealMatchImg, "Images/Clear/cerealClr.png");
    track(diaperMatchImg, "Images/Clear/diaperClr.png");
    track(glassBottleMatchImg, "Images/Clear/glassBottleClr.png");
    track(pumpkinMatchImg, "Images/Clear/pumpkinClr.png");
    track(styrofoamMatchImg, "Images/Clear/styrofoamClr.png");
    track(leafMatchImg, "Images/Clear/leafClr.png");
    track(papersMatchImg, "Images/Clear/papersClr.png");
    track(juiceMatchImg, "Images/Clear/juiceBoxClr.png");
    track(eggsMatchImg, "Images/Clear/eggCartonClr.png");
    track(stickMatchImg, "Images/Clear/stickClr.png");
    track(candyMatchImg, "Images/Clear/candyBarClr.png");
    track(paperRollMatchImg, "Images/Clear/paperRollClr.png");
    track(aluminumFoilMatchImg, "Images/Clear/aluminumFoilClr.png");

    // =====================
    // Sorting (Grayscale) Items
    // =====================
    track(bananaGSImg, "Images/Grayscale/bananaPeelGS.png");
    track(bottleGSImg, "Images/Grayscale/bottleGS.png");
    track(chipsGSImg, "Images/Grayscale/chipsGS.png");
    track(newsPaperGSImg, "Images/Grayscale/newsPaperGS.png");
    track(sodaCanGSImg, "Images/Grayscale/sodaCanGS.png");
    track(appleGSImg, "Images/Grayscale/appleGS.png");
    track(brokenPlateGSImg, "Images/Grayscale/brokenPlateGS.png");
    track(canGSImg, "Images/Grayscale/canGS.png");
    track(cardboardGSImg, "Images/Grayscale/cardboardGS.png");
    track(cerealGSImg, "Images/Grayscale/cerealGS.png");
    track(diaperGSImg, "Images/Grayscale/diaperGS.png");
    track(glassBottleGSImg, "Images/Grayscale/glassBottleGS.png");
    track(glassJarGSImg, "Images/Grayscale/glassJarGS.png");
    track(grassGSImg, "Images/Grayscale/grassGS.png");
    track(leafGSImg, "Images/Grayscale/leafGS.png");
    track(mailGSImg, "Images/Grayscale/mailGS.png");
    track(papersGSImg, "Images/Grayscale/papersGS.png");
    track(plasticBagGSImg, "Images/Grayscale/plasticBagGS.png");
    track(pumpkinGSImg, "Images/Grayscale/pumpkinGS.png");
    track(styrofoamGSImg, "Images/Grayscale/styrofoamGS.png");
    track(milkGSImg, "Images/Grayscale/milkCartonGS.png");
    track(juiceGSImg, "Images/Grayscale/juiceBoxGS.png");
    track(eggsGSImg, "Images/Grayscale/eggCartonGS.png");
    track(strawGSImg, "Images/Grayscale/StrawAndLidGS.png");
    track(chineseGSImg, "Images/Grayscale/takeOutGS.png");
    track(stickGSImg, "Images/Grayscale/stickGS.png");
    track(candyGSImg, "Images/Grayscale/candyBarGS.png");
    track(poopGSImg, "Images/Grayscale/petWasteGS.png");
    track(paperRollGSImg, "Images/Grayscale/paperRollGS.png");
    track(paperBagGSImg, "Images/Grayscale/paperBagGS.png");
    track(aluminumFoilGSImg, "Images/Grayscale/aluminumFoilGS.png");
    track(coffeeLidGSImg, "Images/Grayscale/coffeeLidGS.png");

    // =====================
    // Other Graphics
    // =====================
    track(matchingCardImg, "Images/Other/matchingCard.png");
    track(cardFrontImg, "Images/Other/cardFront.png");
    track(sortingBackgroundImg, "Images/Other/sortingBackground.png");
    track(paperBackImg, "Images/Other/paperBack.png");
    track(paperFrontImg, "Images/Other/paperFront.png");
    track(comingledBackImg, "Images/Other/comingledBack.png");
    track(comingledFrontImg, "Images/Other/comingledFront.png");
    track(organicsBackImg, "Images/Other/organicsBack.png");
    track(organicsFrontImg, "Images/Other/organicsFront.png");
    track(landfillBackImg, "Images/Other/landfillBack.png");
    track(landfillFrontImg, "Images/Other/landfillFront.png");

    // =====================
    // Audio
    // =====================
    backgroundMusic.loop = true;
    track(backgroundMusic, "Sound/bgMusic.mp3");
    matchingMusic.loop = true;
    track(matchingMusic, "Sound/matchingMusic.mp3");
    sortingMusic.loop = true;
    track(sortingMusic, "Sound/sortingMusic.mp3");
    track(buttonSound, "Sound/buttonPop.mp3");
    track(tileFlipSound, "Sound/swish.mp3");
    track(tileMatchSound, "Sound/ding.mp3");
}

