var bg,bgImage;
var player,playerImage;
var aliens,aliensImage,aliensGroup;
var fire,fireImage,fireGroup;
var PLAY=1;
var END=0;
var gameState=PLAY;
var gameOver,gameOverImage;
var restart,restartImage;
var spaceShip,spaceShipImage;
var score;



function preload(){
  
  bgImage=loadImage("download (1).png");
  playerImage=loadImage("f918402ed1f35266e128431c3d592b92.png");
  aliensImage=loadImage("images.png");
  fireImage=loadImage("download.png");
  gameOverImage=loadImage("game over image.jpg");
  restartImage=loadImage("restart image.png");
  spaceShipImage=loadImage("images (1) (1).png")
  
}



function setup() {
  createCanvas(800, 600);
  
  bg=createSprite(300,300,600,600);
  bg.addImage(bgImage);
  bg.scale=5.0;
  bg .velocityX=-10;
  
  player=createSprite(50,300,20,20);
  player.addImage(playerImage);
  player.scale=0.1;
  
  gameOver=createSprite(400,400,800,800);
  gameOver.addImage(gameOverImage);
  
  gameOver.scale=1.8;
  
  
  restart=createSprite(400,100,20,20);
  restart.addImage(restartImage);
 
  restart.scale=0.8;
  
  
  spaceShip=createSprite(20,20,20,20);
  spaceShip.addImage(spaceShipImage);
  spaceShip.scale=0.4;
  
  
  score=0;
  
  
  aliensGroup=createGroup();
  
  fireGroup=createGroup();
 
  
}

function draw() { 
  
  background(0);
  
  
  if(gameState=== PLAY ){
    
    if(aliensGroup.isTouching(player)){
    
    gameState=END;  
      
  }
    
   gameOver.visible=false;
   restart.visible=false;
    spaceShip.visible=true;
    
    bg.velocityX=-10;
    
    
     if(keyDown("space")) {   
    
        spawnFire();
  
  
    
  }
    
     if(fireGroup.isTouching(aliensGroup)){
    
        aliensGroup.destroyEach();
        fireGroup.destroyEach();
        score=score+1;       
    
  }
  
  
  player.y=World.mouseY;
  player.x=World.mouseX;
    
    
  spaceShip.x=player.x-150;
  spaceShip.y=player.y-20;  
  
   if (bg.x < 0){
      bg.x = bg.width/2;
    } 
    
    
  spawnAliens();
    
  }else if(gameState === END){
    
    bg.velocityX=0;
    aliensGroup.destroyEach();
    gameOver.visible=true;  
    restart.visible=true;  
    fireGroup.destroyEach();
    spaceShip.visible=false;
    
    if(mousePressedOver(restart)) {
      
      reset();
      
    }
    
    
  }
 
  
  drawSprites();
  
   stroke("white");
  textSize(20);
  fill("white");
  text("Score:"+score,700,50);
  
  

  }  


function reset(){
 
  
  gameState = PLAY;
  
  score=0;
  
    
}



function spawnAliens(){
  
  if(World.frameCount%100===0){
  
  
  aliens=createSprite(800,300,20,20);
  aliens.addImage(aliensImage);
  aliens.scale=0.6;
  aliens.velocityX=-10;
  aliens.y=Math.round(random(50,340));
  aliens.Lifetime=100;  
  aliensGroup.add(aliens);  
    
  
    
  }
   
}

function spawnFire(){
  
  fire=createSprite(100,200,10,10);
  fire .addImage(fireImage);
  fire.scale=0.1
  fire.x=player.x;
  fire.y=player.y;
  fireGroup.add(fire);
  fire.velocityX= 10;  
  fire.lifeTime=100;
  
  
  
}
  
  
  