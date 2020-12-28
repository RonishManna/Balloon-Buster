var backgroundImage,redBalloonImage,arrowImage,bowImage,greenBalloonImage,blueBalloonImage,pinkBalloonImage
var bow,redBalloon,greenBalloon,blueBalloon,pinkBalloon
var score=0
var arrowGroup,redGroup,greenGroup,blueGroup,pinkGroup

function preload(){
 //load your images here 
 backgroundImage=loadImage("background0.png")
  redBalloonImage=loadImage("red_balloon0.png")
  arrowImage=loadImage("arrow0.png")
  bowImage=loadImage("bow0.png")
  greenBalloonImage=loadImage("green_balloon0.png")
  blueBalloonImage=loadImage("blue_balloon0.png")
  pinkBalloonImage=loadImage("pink_balloon0.png")
}

function setup() {
  createCanvas(600, 600);
  background=createSprite(0,0,600,600)
  background.addImage(backgroundImage)
  //add code here
  background.scale=2.5
  
  bow=createSprite(500,100,20,50)
  bow.addImage(bowImage)
  bow.scale=1.2
  arrowGroup=new Group();
  redGroup=new Group();
  greenGroup=new Group();
  blueGroup=new Group();
  pinkGroup=new Group();
  
}

function draw() {
background.velocityX=-3;
  //add code here
  bow.y=mouseY
  
  //release when space key is pressed
  if(keyDown("space")){
   createArrow();
  }
  if(background.x<0){
    background.x=background.width/2
    
  }
  var selectBalloon=Math.round(random(1,4))
  if(frameCount%60===0){
    if(selectBalloon===1){
       redB();
       
       }
    if(selectBalloon===2){
       blueB();
       
       }
     if(selectBalloon===3){
       greenB();
       
       }
     if(selectBalloon===4){
       pinkB();
       
       }
     
    
  }
  if(arrowGroup.isTouching(redGroup)){
 redGroup.destroyEach();
    arrowGroup.destroyEach();
    score=score+1
  
  }
  if(arrowGroup.isTouching(blueGroup)){
 blueGroup.destroyEach();
    arrowGroup.destroyEach();
    score=score+3
  
  }
  if(arrowGroup.isTouching(greenGroup)){
 greenGroup.destroyEach();
    arrowGroup.destroyEach();
    score=score+2
  
  }
  if(arrowGroup.isTouching(pinkGroup)){
 pinkGroup.destroyEach();
    arrowGroup.destroyEach();
    score=score+5
  
  }
  drawSprites();
  textSize(20);
  text("score:"+score,270,30);
}
//creating arrows for bow
  function createArrow(){
 var  arrow=createSprite(360,100,5,10) 
 arrow.addImage(arrowImage)
    arrow.velocityX=-6;
    arrow.y=bow.y;
    arrow.scale=0.5;
    arrow.lifetime=100;
    arrowGroup.add(arrow);
   
    
  }
function redB(){
    redBalloon=createSprite(0,random(20,370),1,1)
    redBalloon.addImage(redBalloonImage)
    redBalloon.scale=0.1
  redBalloon.velocityX=3;
  redBalloon.lifetime=150;
  redGroup.add(redBalloon);
}
function blueB(){
    blueBalloon=createSprite(0,random(20,370),1,1)
    blueBalloon.addImage(blueBalloonImage)
    blueBalloon.scale=0.1
  blueBalloon.velocityX=3;
  blueBalloon.lifetime=150;
  blueGroup.add(blueBalloon);
}
function greenB(){
    greenBalloon=createSprite(0,random(20,370),1,1)
    greenBalloon.addImage(greenBalloonImage)
    greenBalloon.scale=0.1
  greenBalloon.velocityX=3;
  greenBalloon.lifetime=150;
  greenGroup.add(greenBalloon);
  
}
function pinkB(){
    pinkBalloon=createSprite(0,random(20,370),1,1)
    pinkBalloon.addImage(pinkBalloonImage)
    pinkBalloon.scale=1.2
  pinkBalloon.velocityX=3;
  pinkBalloon.lifetime=150;
  pinkGroup.add(pinkBalloon);
  
}











