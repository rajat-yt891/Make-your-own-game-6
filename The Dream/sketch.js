var canvas, background, backgroundimg;

var gameState = 0;
var playerCount = 0;
var allPlayers;
var distance = 0;
var database, position;

var form, player, game;
var ground, groundimg;
var rightenergy = 0, leftenergy = 0;
var lefttower, righttower, lefttowerimg, righttowerimg;
var ltheart1,ltheart2, ltheart3,rtheart1,rtheart2,rtheart3, heartimg;
var leftboy, rightboy, leftboyimg, rightboyimg;
var leftcannon, rightcannon, leftcannonimg, rightcannonimg;
var leftcannonball, rightcannonball, leftcannonballimg,rightcannonballimg;
var leftcannonballgroup,rightcannonballgroup;
var a=0, d=0;
var lefttowercount=3, righttowercount=3;

function preload(){
  backgroundimg = loadImage("images/form.png")
  lefttowerimg = loadImage("images/lefttower.png");
  righttowerimg = loadImage("images/righttower.png");
  leftboyimg = loadImage("images/leftboy.png");
  rightboyimg = loadImage("images/rightboy.png");
  leftcannonimg =loadImage("images/cannonright.png");
  rightcannonimg = loadImage("images/cannonleft.png");
  leftcannonballimg = loadImage("images/cannonball.png");
  rightcannonballimg = loadImage("images/cannonball.png");
  groundimg = loadImage("images/ground.png");
  heartimg=loadImage("images/towerhealth.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  if(gameState === 0){
    game =new Game();
    game.start();
    game.getState();
 }
 leftcannonballgroup=new Group();
 rightcannonballgroup= new Group();
 
 ltheart1=createSprite(100,100,10,10);
 ltheart1.addImage("lh1", heartimg);
 ltheart1.scale=0.1;
 ltheart2=createSprite(150,100,10,10);
 ltheart2.addImage("lh2", heartimg);
 ltheart2.scale=0.1;
 ltheart3=createSprite(200,100,10,10);
 ltheart3.addImage("lh3", heartimg);
 ltheart3.scale=0.1;
 rtheart1=createSprite(displayWidth-100,100,10,10);
 rtheart1.addImage("rh1", heartimg);
 rtheart1.scale=0.1;
 rtheart2=createSprite(displayWidth-150,100,10,10);
 rtheart2.addImage("rh2", heartimg);
 rtheart2.scale=0.1;
 rtheart3=createSprite(displayWidth-200,100,10,10);
 rtheart3.addImage("rh3", heartimg);
 rtheart3.scale=0.1;
}
 function draw(){
 if(playerCount === 2){
   game.update(1);
 }
 if(gameState === 1){
   game.play();
 }
}
