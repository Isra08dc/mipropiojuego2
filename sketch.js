const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg,backgroundImg2,pc1,ground;

var gameState = "onSling";
var bg = "sprites/ciudad.jpg";
var bg2 = "sprites/ciudadnoche.jpg";
var base = "sprites/base.png";
var score = 0;

function preload() {
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,height,1200,20);
    pc1 = new Pc(50,190,30);
    //pc1=createSprites(20,370);
   
}

function draw(){
    if(backgroundImg, backgroundImg2)
        background(backgroundImg, backgroundImg2);
    
        noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score, width-300, 50)
    
    Engine.update(engine);
    //strokeWeight(4);
     ground.display();
    pc1.display();
    //drawSprites();
}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=0600 && hour<=1800){
        bg = "sprites/cuidad.jpg";
    }
    else{
        bg2 = "sprites/ciudadnoche.jpg";
    }

    backgroundImg = loadImage(bg);
    backgroundImg2 = loadImage(bg2);
    console.log(backgroundImg);
    console.log(backgroundImg2);
}