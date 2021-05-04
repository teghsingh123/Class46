var x, xImg;
var o, oImg;
var board,boardImg;

var box1,box2,box3,box4,box5,box6,box7,box8,box9
var box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,box21;

var PLAYER1TURN = 1;
var PLAYER2TURN = 2;
var END = 0;
//var gameState = PLAYER1TURN;
var gameState;

function preload() {
  xImg = loadImage("x.png");
  oImg = loadImage("O.png");
  boardImg = loadImage("board.png");
}

function setup() {
  createCanvas(800,400);
  
  board = createSprite(400,400);
  board.addImage(boardImg);
  board.scale = 1.7;

  box1 = createSprite(50,100);
  box2 = createSprite(175,100);
  box3 = createSprite(300,100);
  box4 = createSprite(425,100);
  box5 = createSprite(550,100);
  box6 = createSprite(675,100);
  box7 = createSprite(800,100);
  box8 = createSprite(50,225);
  box9 = createSprite(175,225);
  box10 = createSprite(300,225);
  box11 = createSprite(425,225);
  box12 = createSprite(550,225);
  box13 = createSprite(675,225);
  box14 = createSprite(800,225);
  box15 = createSprite(50,350);
  box16 = createSprite(175,350);
  box17 = createSprite(300,350);
  box18 = createSprite(425,350);
  box19 = createSprite(550,350);
  box20 = createSprite(675,350);
  box21 = createSprite(800,350);

  }



function draw() {
  background(255,255,255)
  console.log(gameState);
/*
  player1(box1);
player1(box2);
player1(box3);
player1(box4);
player1(box5);
player1(box6);
player1(box7);
player1(box8);
player1(box9);
player1(box10);
player1(box11);
player1(box12);
player1(box13);
player1(box14);
player1(box15);
player1(box16);
player1(box17);
player1(box18);
player1(box19);
player1(box20);
player1(box21);
*/
player2(box1);
player2(box2);
player2(box3);
player2(box4);
player2(box5);
player2(box6);
player2(box7);
player2(box8);
player2(box9);
player2(box10);
player2(box11);
player2(box12);
player2(box13);
player2(box14);
player2(box15);
player2(box16);
player2(box17);
player2(box18);
player2(box19);
player2(box20);
player2(box21);

  drawSprites();
}

/*function player1(box){
  if(gameState === PLAYER1TURN){  
    if(mousePressedOver(box)){
    box.shapeColor = "blue";
    gameState = PLAYER2TURN;
  }
}

}
*/
function player2(box){
  if(gameState === PLAYER2TURN){  
    if(mousePressedOver(box)){
    box.shapeColor = "red";
    gameState = PLAYER1TURN;
  }
}

}
