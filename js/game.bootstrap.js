// Minimal bootstrap: load assets then start the game
loadAssets();

// Poll for assets to finish loading, then start
var assetCheckInterval = setInterval(function(){
    if(numberLoaded >= numberOfAssets){
        clearInterval(assetCheckInterval);
        if(window.startGame) startGame();
    }
}, 100);
