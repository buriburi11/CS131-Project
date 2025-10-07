// Canvas and Context
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");


// Game States
var state = {
    WELCOME1: 0,
    WELCOME2: 1,
    CHOOSEGAME: 2,
    MATCHINTRO1: 3,
    MATCHINTRO2: 4,
    MATCHINTRO3: 5,
    MATCHLEVEL: 6,
    PLAYMATCH: 7,
    END: 8,
    SORTINTRO1: 9,
    SORTINTRO2: 10,
    SORTLEVEL: 11,
    PLAYSORT: 12,
    MAININTRO: 13,
    LOADING: 14
};

var currentState = state.LOADING;

// General Game Vars
var mouseDown = false;
var percent;
var timerBarHeight = 30;
var timerBarWidth = 0;

var score = 0;
var level;
var gameTitle;

var timer = new Timer();  // class from Timer.js
var timerTime;
var timeElapsed = Number(0).toFixed(2);


// Button Sizes
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


// Matching Game Vars
var tileRowCount;
var tileColumnCount;
var tileSize;
var tilePadding;
var tileOffsetTop;
var tileOffsetLeft;
var tiles;
var focusedTileIndex = 0;   // Which tile is currently focused


// Sorting Game Vars
var dragImg;
var dragX, dragY;
var dragOffsetX, dragOffsetY;
var draggedGarbage = new Garbage(0, 0, 0, 0, 0);

var binWidth = 960 / 5;
var binBackHeight = 25;
var binFrontHeight = 100;

var sidebarLocalXOrigin = canvas.width - binWidth;
var sidebarWidth = binWidth;
var sidebarButtonSize = 60;

var garbageSize = 75;

// bin categories
var paper = 0;
var comingled = 1;
var organics = 2;
var landfill = 3;

// scoring
var recyclingSorted = 0;
var landfillSorted = 0;
var scorePercentage = 0;

// bin column ranges
var paperColumnStart = 0;
var comingledColumnStart = binWidth;
var organicsColumnStart = binWidth * 2;
var landfillColumnStart = binWidth * 3;

var paperColumnEnd = paperColumnStart + binWidth;
var comingledColumnEnd = comingledColumnStart + binWidth;
var organicsColumnEnd = organicsColumnStart + binWidth;
var landfillColumnEnd = landfillColumnStart + binWidth;

// matching info display
var displayMatchInfo;
var matchInfoImage;
var matchInfoString1;
var matchInfoString2;

var imageIndex;
var numberTilesFlipped;
var firstFlippedTileIndex;
var secondFlippedTileIndex;

// timer circle
var timerCircleRadius = 60;
var startAngle = -(Math.PI / 2);
var endAngle = 0;

// sorting game progression
var fallSpeed;
var dropGarbageInterval;
var lastDropTime;
var garbage = [];
var garbageQueue = [];
var startingGarbageCount;
var itemsRemaining;


// Misc
var muted = false;
var images = [];
var activeGarbage = null; // currently controlled garbage item
var keyboardMode = true;  // one-item-at-a-time mode
