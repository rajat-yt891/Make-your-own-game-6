class Game {
  constructor(){

  }
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
    
  }
  play(){
    form.hide();
    background(groundimg);
   var ground = createSprite(displayWidth/2, displayHeight-20, displayWidth, 20);
   if(rightenergy<200)
   rightenergy=rightenergy+1;
   fill("yellow");
   textSize(20);
   text("Tower 2 Energy"+rightenergy, displayWidth-300, 50);
   if(leftenergy<200)
   leftenergy=leftenergy+1;
   fill("yellow");
   textSize(20);
   text("Tower 1 Energy"+leftenergy, 300, 50);
   //making towers of botth side
   lefttower = createSprite(displayWidth/12 - 40, displayHeight -300, 50, 100);
   lefttower.addImage("lt",lefttowerimg);
   lefttower.debug=true;
   lefttower.setCollider("rectangle", -10,0,100,250);
   righttower = createSprite(displayWidth-90, displayHeight - 300, 50, 100);
   righttower.addImage("rt", righttowerimg);
   righttower.debug=true;
   righttower.setCollider("rectangle", -10,0,100,250);
   
   //sprites for dsiplay
   leftboy = createSprite(displayWidth-70, displayHeight-430, 50, 100);
   leftboy.addImage("LB", leftboyimg);
   leftboy.scale=0.2;
   rightboy = createSprite(displayWidth/12-80, displayHeight-430, 50, 100);
   rightboy.addImage("RB", rightboyimg);
   rightboy.scale=0.2;

   leftcannon = createSprite(displayWidth/12-20, displayHeight-430, 50, 100);
   leftcannon.addImage("lc", rightcannonimg);
   leftcannon.scale=0.5;
   rightcannon = createSprite(displayWidth-130, displayHeight-430, 50, 100);
   rightcannon.addImage("rc", leftcannonimg);
   rightcannon.scale=0.5;
   if(keyWentDown("a")){
     leftcannonball=createSprite(displayWidth/12-20, displayHeight-430, 50, 50);
     leftcannonball.addImage("lcb", leftcannonballimg);
     leftcannonball.scale=0.1;
     leftcannonball.velocityX=+16;
     leftcannonball.velocityY=+1;
     leftenergy=leftenergy-40;
     leftcannonballgroup.add(leftcannonball);
     a=1;
   }
   if(a===1){leftcannonballgroup.velocityY+=0.1;}
   if(keyWentDown("d")){
    rightcannonball=createSprite(displayWidth-130, displayHeight-430, 50, 50);
    rightcannonball.addImage("rcb", rightcannonballimg);
    rightcannonball.scale=0.1;
    rightcannonball.velocityX=-16;
    rightcannonball.velocityY=+1;
    rightenergy=rightenergy-40;
    rightcannonballgroup.add(rightcannonball);
    d=1;
   }
   //if(keyWentDown("d"){rightcannonballgroup.velocityY+=0.1;}

   if(leftcannonballgroup.isTouching(righttower))
   {righttowercount=righttowercount-1;
   if(righttowercount===2){
   rtheart3.visible=false;}
   else if(righttowercount===1){
   rtheart2.visible=false;}
   else if(righttowercount===0){
    rtheart1.visible=false;}}

   if(rightcannonballgroup.isTouching(lefttower))
   {lefttowercount=lefttowercount-1;
   if(lefttowercount===2){
   ltheart3.visible=false;}
   else if(lefttowercount===1){
   ltheart2.visible=false;}
   else if(lefttowercount===0){
   ltheart1.visible=false;}}
  drawSprites();
  }
}
