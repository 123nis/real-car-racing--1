var hypnoticBall, database;
var position;
var gameState=0
var database
var player,game,form,playerCounts
function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
game=new Game()
game.getState()
game.start()

  
}

function draw(){
  background("white");
  
    
  
}


