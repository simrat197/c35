var canvas, database;
var backgroundImg;
var gameState=0;
var playerCount,form,player,game;

function setup(){
canvas=createCanvas(400,400);
  database = firebase.database();
 game=new Game();
game.getState();
game.start();
}

function draw(){
    
}

