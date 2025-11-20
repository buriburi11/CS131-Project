var matchTimerEnabled = true; // T toggles this
var sortTimerEnabled = true;  // for Sorting game

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
var sortButtonSize = 93;

var levelButtonWidth = 150;
var levelButtonHeight = 80;

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
var narration = false;
var muted = false;
var images = [];
var activeGarbage = null; // currently controlled garbage item
var keyboardMode = true;  // one-item-at-a-time mode


//sorting game anti-spam mechanic
var ANTI_SPAM_Y_THRESHOLD_RATIO = 0.60;
var ANTI_SPAM_RESET_OFFSET_PX = 120;





// -------------------------------------------------------------
// CREATE HELP BUTTON + POPUP COMPLETELY IN JAVASCRIPT
// -------------------------------------------------------------

// 1. Create help button
const helpBtn = document.createElement("div");
helpBtn.id = "help-button";
helpBtn.innerText = "❔";
document.body.appendChild(helpBtn);

// 2. Create popup panel
const panel = document.createElement("div");
panel.id = "shortcut-panel";

panel.innerHTML = `
  <h3 style="margin-top:0;">Keyboard Shortcuts</h3>

  <p><strong>M</strong> – Mute / Unmute</p>
  <p><strong>H</strong> – Return Home</p>
  <p><strong>R</strong> – Restart Game</p>
  <p><strong>P</strong> – Continue / Advance Screens</p>
  <p><strong>Esc</strong> – Pause</p>
  <p><strong>T</strong> – Disable Timer</p>
  <p><strong>N</strong> – Enable / Disable Narration</p>


  <hr>

  <p><strong>Arrow Keys</strong> – Navigate Menus / Move Tile (Matching)</p>
  <p><strong>Enter / Space</strong> – Select / Flip Tile</p>

  <hr>

  <p><strong>1 / 2 / 3</strong> – Choose Level</p>

  <hr>

  <p><strong>Z</strong> – Sort to Bin 1</p>
  <p><strong>X</strong> – Sort to Bin 2</p>
  <p><strong>C</strong> – Sort to Bin 3</p>
  <p><strong>V</strong> – Sort to Bin 4</p>
`;
document.body.appendChild(panel);

// -------------------------------------------------------------
// STYLE BOTH ELEMENTS USING JAVASCRIPT ONLY
// -------------------------------------------------------------

// HELP BUTTON STYLE
helpBtn.style.position = "fixed";
helpBtn.style.top = "70px";  // adjust as needed
helpBtn.style.right = "20px";
helpBtn.style.background = "#1f3d24";
helpBtn.style.color = "white";
helpBtn.style.width = "40px";
helpBtn.style.height = "40px";
helpBtn.style.borderRadius = "50%";
helpBtn.style.display = "flex";
helpBtn.style.alignItems = "center";
helpBtn.style.justifyContent = "center";
helpBtn.style.fontSize = "22px";
helpBtn.style.cursor = "pointer";
helpBtn.style.zIndex = "99999";
helpBtn.style.userSelect = "none";
helpBtn.style.boxShadow = "0px 0px 6px rgba(0,0,0,0.3)";


// PANEL STYLE
panel.style.position = "fixed";
panel.style.top = "50%";
panel.style.left = "50%";
panel.style.transform = "translate(-50%, -50%)";
panel.style.width = "320px";
panel.style.background = "#1f3d24";
panel.style.color = "white";
panel.style.padding = "20px";
panel.style.borderRadius = "12px";
panel.style.boxShadow = "0 8px 20px rgba(0,0,0,0.4)";
panel.style.display = "none";
panel.style.zIndex = "20000";
panel.style.fontFamily = "Arial, sans-serif";
panel.style.fontSize = "15px";

// Style <hr> lines
panel.querySelectorAll("hr").forEach(hr => {
    hr.style.border = "none";
    hr.style.borderBottom = "1px solid #ffffff55";
    hr.style.margin = "10px 0";
});

// -------------------------------------------------------------
// OPEN/CLOSE LOGIC
// -------------------------------------------------------------

// open popup
helpBtn.addEventListener("click", () => {
  panel.style.display = "block";
});

// close popup on click outside
document.addEventListener("click", (e) => {
  if (e.target !== helpBtn && !panel.contains(e.target)) {
    panel.style.display = "none";
  }
});
