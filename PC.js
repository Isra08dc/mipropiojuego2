class Pc{
    constructor(x,y,r){
   var options={
    friction:0.001,
    restitution:0.1

}
this.x=x;
this.y=y;
this.r=r;
this.pcimg= loadImage("sprites/pc.png");
this.body = Bodies.circle(this.x,this.y,(this.r-20)/2,options)
//cargar la imagen del personaje
World.add(world,this.body);

    }

        display(){
    /*if (UP_ARROW){
       this.body.position.y=+5,y;
    }

    if (DOWN_ARROW){
        this.body.position.y=-5,y;
     }

     if (LEFT_ARROW){
        this.body.position.y=x,-5;
     }

     if (RIGHT_ARROW){
        this.body.position.y=x,+5;
     }*/
    var pcposition=this.body.position;
     push();
     translate(pcposition.x,pcposition.y);
    imageMode(CENTER);
    //fill("");
    image(this.pcimg,0,0,this.r,this.r);
    pop();

}
}
        
    
