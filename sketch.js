var GameState = 0;
var database, playerCount;
var form, player, game;
var allPlayers;

function setup(){
    createCanvas(500,500);

    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();

}

function draw(){
    
    background("white");

    
    if(playerCount === 4)
    {

        game.update(1);

    }
    if(GameState === 1)
    {

        clear();
        game.play();

    }

}
