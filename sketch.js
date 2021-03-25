var database,game,form,player,allplayers;
var player1,player2,player3,player4,players,player1Img,player2Img,player3Img,player4Img;
var backgroundImg;
var playerCount = 0;
var gameState = 0;
function preload() {
    player1Img=loadImage("images/player1.jpg");
    player2Img=loadImage("images/player2.jpg");
    player3Img=loadImage("images/player3.jpg");
    player4Img=loadImage("images/player4.jpg");
    backgroundImg=loadImage("images/background.jpg");
}
function setup(){
    createCanvas(1200,1200);
    database=firebase.database();
    game=new Game();
    game.getState();
    game.start();
}

function draw(){
    background("pink");
    console.log(displayHeight);
    console.log(displayWidth);
    if(playerCount===4){
    gameState=1;
    game.updateState(1);
    }
    if(gameState===1){
        clear();
        game.play(); 
        drawSprites();
    }
}