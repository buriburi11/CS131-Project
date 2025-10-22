// Extracted globals from original game.js
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var contextScale = 0.68;

var state = {WELCOME1: 0, WELCOME2: 1, CHOOSEGAME: 2, MATCHINTRO1: 3, MATCHINTRO2: 4, MATCHINTRO3: 5, MATCHLEVEL: 6, PLAYMATCH: 7, END: 8, SORTINTRO1: 9, SORTINTRO2: 10, SORTLEVEL: 11, PLAYSORT: 12, MAININTRO: 13, LOADING: 14};

var currentState = state.LOADING;

var mouseDown = false;

var percent;
var timerBarHeight = 30;
var timerBarWidth = 0;

var score = 0;

var level;

var gameTitle;

var timer = new Timer();
var timerTime;
var timeElapsed = Number(0).toFixed(2);

var chooseButtonSize = 200;
var originalPlayButtonSize = 100;
var soundButtonSize = 100;
var currentPlayButtonSize = originalPlayButtonSize;
var sortButtonSize = 75;

var levelButtonWidth = 125;
var levelButtonHeight = 50;

var increaseChooseButtonSize = true;
var increasePlayButtonSize = true;
var increaseLevelButtonSize = true;

var tileRowCount;
var tileColumnCount;
var tileSize;
var tilePadding;
var tileOffsetTop;
var tileOffsetLeft;

var tiles;

var focusedTileIndex = 0;

// audio/image placeholders (will be set by assets loader)
var backgroundMusic = new Audio();
var matchingMusic = new Audio();
var sortingMusic = new Audio();
var buttonSound = new Audio();
var tileFlipSound = new Audio();
var tileMatchSound = new Audio();

var muted = false;
var globalVolume = 1.0; // Default volume (max)

// variables used by both games
var numberLoaded = 0;
var numberOfAssets = 104;

// Sorting-specific globals
var dragImg;
var dragX;
var dragY;
var dragOffsetX;
var dragOffsetY;
var draggedGarbage = new Garbage(0, 0, 0, 0, 0);

var binWidth = 960 / 5;
var binBackHeight = 25;
var binFrontHeight = 100;

var sidebarLocalXOrigin = canvas.width - binWidth;
var sidebarWidth = binWidth;
var sidebarButtonSize = 60;

var garbageSize = 75;

var paper = 0;
var comingled = 1;
var organics = 2;
var landfill = 3;

var recyclingSorted = 0;
var landfillSorted = 0;
var scorePercentage = 0;

var paperColumnStart = 0;
var comingledColumnStart = binWidth;
var organicsColumnStart = binWidth * 2;
var landfillColumnStart = binWidth * 3;

var paperColumnEnd = paperColumnStart + binWidth;
var comingledColumnEnd = comingledColumnStart + binWidth;
var organicsColumnEnd = organicsColumnStart + binWidth;
var landfillColumnEnd = landfillColumnStart + binWidth;

var displayMatchInfo;
var matchInfoImage;
var matchInfoString1;
var matchInfoString2;

var imageIndex;
var numberTilesFlipped;
var firstFlippedTileIndex;
var secondFlippedTileIndex;

var timerCircleRadius = 60;
var startAngle = -(Math.PI / 2);
var endAngle = 0;

var fallSpeed;
var dropGarbageInterval;
var lastDropTime;

var garbage = [];
var garbageQueue = [];

var startingGarbageCount;
var itemsRemaining;

// Buttons (images set later)
var matchingButton;
var sortingButton;
var playButton;
var level1Button;
var level2Button;
var level3Button;
var pauseButton;
var restartButton;
var homeButton;
var muteButton;

var images = [];
