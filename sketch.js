function preload(){
  mario1=loadAnimation("1.png","2.png","3.png","4.png","5.png","6.png","7.png","8.png");
}
function setup() {
  createCanvas(1200,400);
  

  mario=createSprite(100,370,20,40);
  mario.addAnimation("marioRunning",mario1);
  ground=createSprite(600,390,1200,20);
  ground.x=ground.width/2;
  ground.velocityX=-7;
}

function draw() {
  background("black"); 
  if(ground.x<0){
    ground.x=ground.width/2;
  } 
   if(keyDown("space")){
      mario.velocityY=-13;
     
   }
   mario.velocityY= mario.velocityY + 0.8;
   mario.collide(ground);
  
  
  
  drawSprites();
}

