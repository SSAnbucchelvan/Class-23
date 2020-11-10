class Box{
    constructor(x,y,width,height){
        var box_options={
            isStatic:false,
            friction:0.3,
            density:1.0,
            restitution:0.8
         }
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;

         this.body=bodies.rectangle(this.x,this.y,this.width,this.height,box_options);
         world.add(myWorld,this.body);
    }
    display(){
    var pos=this.body.position;
    var angle=this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    angleMode(RADIANS);
    rectMode(CENTER);
    rect(0,0,this.width,this.height);
    pop();
    }
}