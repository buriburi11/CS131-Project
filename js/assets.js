// Asset loader for images and audio
var loadingImg = image("Images/Screens/loadScreen.png");
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

// matching images
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

// grayscale versions
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

function loadAssets(){
    var finishedLoading = function(){
        numberLoaded++;
    };
    
    // attach onload callbacks
    var allImages = [mainIntroImg,welcome1Img,welcome2Img,chooseGameImg,matchingIntro1Img,matchingIntro2Img,matchingIntro3Img,matchingLevelSelectImg,endScreenMatchingImg,sortingIntro1Img,sortingIntro2Img,sortingLevelSelectImg,endScreenSortingImg,pauseScreenImg,matchingButtonImg,sortingButtonImg,muteImg,unmuteImg,pauseButtonImg,playButtonImg,level1Img,level2Img,level3Img,restartButtonImg,homeButtonImg,bananaMatchImg,bottleMatchImg,chipsMatchImg,grassMatchImg,newsPaperMatchImg,paperCupMatchImg,paperTowelsMatchImg,plasticBagMatchImg,strawAndLidMatchImg,appleMatchImg,bonesMatchImg,coffeeLidMatchImg,glassJarMatchImg,mailMatchImg,milkCartonMatchImg,paperPlatesMatchImg,petWasteMatchImg,takeOutBoxMatchImg,paperBagMatchImg,sodaCanMatchImg,brokenPlateMatchImg,canMatchImg,cardboardMatchImg,cerealMatchImg,diaperMatchImg,glassBottleMatchImg,pumpkinMatchImg,styrofoamMatchImg,leafMatchImg,papersMatchImg,juiceMatchImg,eggsMatchImg,stickMatchImg,candyMatchImg,paperRollMatchImg,aluminumFoilMatchImg,bananaGSImg,bottleGSImg,chipsGSImg,newsPaperGSImg,sodaCanGSImg,appleGSImg,brokenPlateGSImg,canGSImg,cardboardGSImg,cerealGSImg,diaperGSImg,glassBottleGSImg,glassJarGSImg,grassGSImg,leafGSImg,mailGSImg,papersGSImg,plasticBagGSImg,pumpkinGSImg,styrofoamGSImg,milkGSImg,juiceGSImg,eggsGSImg,strawGSImg,chineseGSImg,stickGSImg,candyGSImg,poopGSImg,paperRollGSImg,paperBagGSImg,aluminumFoilGSImg,coffeeLidGSImg,matchingCardImg,cardFrontImg,sortingBackgroundImg,paperBackImg,paperFrontImg,comingledBackImg,comingledFrontImg,organicsBackImg,organicsFrontImg,landfillBackImg,landfillFrontImg];

    allImages.forEach(function(img){ img.onload = finishedLoading; });

    // set sources
    mainIntroImg.src = "Images/Screens/mainIntro.png";
    welcome1Img.src = "Images/Screens/welcome1.png";
    welcome2Img.src = "Images/Screens/welcome2.png";
    chooseGameImg.src = "Images/Screens/chooseGame.png";
    matchingIntro1Img.src = "Images/Screens/matchingIntro1.png";
    matchingIntro2Img.src = "Images/Screens/matchingIntro2.png";
    matchingIntro3Img.src = "Images/Screens/matchingIntro3.png";
    matchingLevelSelectImg.src = "Images/Screens/chooseLevelMatching.png";
    endScreenMatchingImg.src = "Images/Screens/endScreenMatching.png";
    sortingIntro1Img.src = "Images/Screens/sortingIntro1.png";
    sortingIntro2Img.src = "Images/Screens/sortingIntro2.png";
    sortingLevelSelectImg.src = "Images/Screens/chooseLevelSorting.png";
    endScreenSortingImg.src = "Images/Screens/endScreenSorting.png";
    pauseScreenImg.src = "Images/Screens/pauseScreen.png";
    matchingButtonImg.src = "Images/Buttons/matchingButton.png";
    sortingButtonImg.src = "Images/Buttons/sortingButton.png";
    muteImg.src = "Images/Buttons/muteButton.png";
    unmuteImg.src = "Images/Buttons/unmuteButton.png";
    pauseButtonImg.src = "Images/Buttons/pauseButton.png";
    playButtonImg.src = "Images/Buttons/playButton.png";
    level1Img.src = "Images/Buttons/level1.png";
    level2Img.src = "Images/Buttons/level2.png";
    level3Img.src = "Images/Buttons/level3.png";
    restartButtonImg.src = "Images/Buttons/restartButton.png";
    homeButtonImg.src = "Images/Buttons/homeButton.png";

    bananaMatchImg.src = "Images/Clear/bananaPeelClr.png";
    bottleMatchImg.src = "Images/Clear/bottleClr.png";
    chipsMatchImg.src = "Images/Clear/chipsClr.png";
    grassMatchImg.src = "Images/Clear/grassClr.png";
    newsPaperMatchImg.src = "Images/Clear/newsPaperClr.png";
    paperCupMatchImg.src = "Images/Clear/paperCupClr.png";
    paperTowelsMatchImg.src = "Images/Clear/paperTowelsClr.png";
    plasticBagMatchImg.src = "Images/Clear/plasticBagClr.png";
    strawAndLidMatchImg.src = "Images/Clear/StrawAndLidClr.png";
    appleMatchImg.src = "Images/Clear/appleClr.png";
    bonesMatchImg.src = "Images/Clear/bonesClr.png";
    coffeeLidMatchImg.src = "Images/Clear/coffeeLidClr.png";
    glassJarMatchImg.src = "Images/Clear/glassJarClr.png";
    mailMatchImg.src = "Images/Clear/mailClr.png";
    milkCartonMatchImg.src = "Images/Clear/milkCartonClr.png";
    paperPlatesMatchImg.src = "Images/Clear/paperPlatesClr.png";
    petWasteMatchImg.src = "Images/Clear/petWasteClr.png";
    takeOutBoxMatchImg.src = "Images/Clear/takeOutClr.png";
    paperBagMatchImg.src = "Images/Clear/paperBagClr.png";
    sodaCanMatchImg.src = "Images/Clear/sodaCanClr.png";
    brokenPlateMatchImg.src = "Images/Clear/brokenPlateClr.png";
    canMatchImg.src = "Images/Clear/canClr.png";
    cardboardMatchImg.src = "Images/Clear/cardboardClr.png";
    cerealMatchImg.src = "Images/Clear/cerealClr.png";
    diaperMatchImg.src = "Images/Clear/diaperClr.png";
    glassBottleMatchImg.src = "Images/Clear/glassBottleClr.png";
    pumpkinMatchImg.src = "Images/Clear/pumpkinClr.png";
    styrofoamMatchImg.src = "Images/Clear/styrofoamClr.png";
    leafMatchImg.src = "Images/Clear/leafClr.png";
    papersMatchImg.src = "Images/Clear/papersClr.png";
    juiceMatchImg.src = "Images/Clear/juiceBoxClr.png";
    eggsMatchImg.src = "Images/Clear/eggCartonClr.png";
    stickMatchImg.src = "Images/Clear/stickClr.png";
    candyMatchImg.src = "Images/Clear/candyBarClr.png";
    paperRollMatchImg.src = "Images/Clear/paperRollClr.png"; 
    aluminumFoilMatchImg.src = "Images/Clear/aluminumFoilClr.png";

    bananaGSImg.src = "Images/Grayscale/bananaPeelGS.png";
    bottleGSImg.src = "Images/Grayscale/bottleGS.png";
    chipsGSImg.src = "Images/Grayscale/chipsGS.png";
    newsPaperGSImg.src = "Images/Grayscale/newsPaperGS.png";
    sodaCanGSImg.src = "Images/Grayscale/sodaCanGS.png";
    appleGSImg.src = "Images/Grayscale/appleGS.png";
    brokenPlateGSImg.src = "Images/Grayscale/brokenPlateGS.png";
    canGSImg.src = "Images/Grayscale/canGS.png";
    cardboardGSImg.src = "Images/Grayscale/cardboardGS.png";
    cerealGSImg.src = "Images/Grayscale/cerealGS.png";
    diaperGSImg.src = "Images/Grayscale/diaperGS.png";
    glassBottleGSImg.src = "Images/Grayscale/glassBottleGS.png";
    glassJarGSImg.src = "Images/Grayscale/glassJarGS.png";
    grassGSImg.src = "Images/Grayscale/grassGS.png";
    leafGSImg.src = "Images/Grayscale/leafGS.png";
    mailGSImg.src = "Images/Grayscale/mailGS.png";
    papersGSImg.src = "Images/Grayscale/papersGS.png";
    plasticBagGSImg.src = "Images/Grayscale/plasticBagGS.png";
    pumpkinGSImg.src = "Images/Grayscale/pumpkinGS.png";
    styrofoamGSImg.src = "Images/Grayscale/styrofoamGS.png";
    milkGSImg.src = "Images/Grayscale/milkCartonGS.png";
    juiceGSImg.src = "Images/Grayscale/juiceBoxGS.png";
    eggsGSImg.src = "Images/Grayscale/eggCartonGS.png";
    strawGSImg.src = "Images/Grayscale/StrawAndLidGS.png";
    chineseGSImg.src = "Images/Grayscale/takeOutGS.png";
    stickGSImg.src = "Images/Grayscale/stickGS.png";
    candyGSImg.src = "Images/Grayscale/candyBarGS.png";
    poopGSImg.src = "Images/Grayscale/petWasteGS.png";
    paperRollGSImg.src = "Images/Grayscale/paperRollGS.png"; 
    paperBagGSImg.src = "Images/Grayscale/paperBagGS.png";
    aluminumFoilGSImg.src = "Images/Grayscale/aluminumFoilGS.png";
    coffeeLidGSImg.src = "Images/Grayscale/coffeeLidGS.png"; 
    matchingCardImg.src = "Images/Other/matchingCard.png";
    cardFrontImg.src = "Images/Other/cardFront.png";
    sortingBackgroundImg.src = "Images/Other/sortingBackground.png";
    paperBackImg.src = "Images/Other/paperBack.png";
    paperFrontImg.src = "Images/Other/paperFront.png";
    comingledBackImg.src = "Images/Other/comingledBack.png";
    comingledFrontImg.src = "Images/Other/comingledFront.png";
    organicsBackImg.src = "Images/Other/organicsBack.png";
    organicsFrontImg.src = "Images/Other/organicsFront.png";
    landfillBackImg.src = "Images/Other/landfillBack.png";
    landfillFrontImg.src = "Images/Other/landfillFront.png";

    //Audio
    backgroundMusic.loop = true;   
    backgroundMusic.src = "Sound/bgMusic.mp3";
    matchingMusic.loop = true;
    matchingMusic.src = "Sound/matchingMusic.mp3";
    sortingMusic.loop = true;
    sortingMusic.src = "Sound/sortingMusic.mp3";
    buttonSound.src = "Sound/buttonPop.mp3";
    tileFlipSound.src = "Sound/swish.mp3";
    tileMatchSound.src = "Sound/ding.mp3";
}

function image(imageSrc)
{
    var image = new Image();

    image.src = imageSrc;

    return image;
}
