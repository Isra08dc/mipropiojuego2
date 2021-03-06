const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot, obs;

var gameState = "onSling";
var bg = "sprites/ciudad.jpg";
var bg2 = "sprites/ciudadnoche.jpj"
//var obstaculos ="sprites/obstaculos.png"
var score = 0;

function preload() {
    getBackgroundImg();
     pC=loadImage("sprites/pc.png")
     obs=loadImage("sprites/obstaculos.png")
}

function setup(){
    var canvas = createCanvas(displayWidth, displayHeight-120);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,height,1600,20);
    persona=createSprite(100,height-100,40,20);
    persona.addImage(pC);
    persona.scale=0.5;
    obstaculos=createSprite(1000,550,10,10);
    obstaculos.addImage(obs);
    obstaculos.scale=0.4
    ground = createSprite(800,height-25,3000,20);
    ground.visible = false
    //slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    if(backgroundImg)
        background(backgroundImg);
    
        noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score, width-300, 50)
    
    Engine.update(engine);
    //strokeWeight(4);
    
     if(keyDown("space")&& persona.y >= 400) {
        persona.velocityY = -12;
     }
     if (keyDown("RIGHT_ARROW")){
         persona.velocityX = 8
     }

     if (keyDown("LEFT_ARROW")){
         persona.velocityX = -8
     }
     persona.velocityY = persona.velocityY + 0.5;
     obstaculos.velocityX=obstaculos.velocityX-2
     ground.display();
     persona.collide(ground);
     //slingshot.display();
   drawSprites();
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32 && persona.velocityY>=100){
       bird.trajectory = [];
       Matter.Body.setPosition(bird.body,{x:200, y:50});
       slingshot.attach(bird.body);
    }
}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/America/Mexico_City");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=0600 && hour<=1900){
        bg = "sprites/ciudad.jpg";
    }
    else{
        bg = "sprites/ciudadnoche.jpg";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}