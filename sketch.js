const engine=Matter.Engine;
const world=Matter.World;
const bodies=Matter.Bodies;

var myEngine,myWorld;
var ball,ground;
var box1,box2;



function setup() {
  createCanvas(800,400);
  myEngine=engine.create();
  myWorld=myEngine.world;
  
  var ground_options={
     isStatic:true
  }


  ground=bodies.rectangle(400,380,800,20,ground_options);
  world.add(myWorld,ground);
  var ball_options={
    isStatic:false,
    restitution:1.0
 }


 ball=bodies.circle(100,100,20,ball_options);
 world.add(myWorld,ball);

box1=new Box(200,300,50,50);
box2=new Box(240,100,50,150);

}

function draw() {
  background("blue");  
 engine.update(myEngine);

 rectMode(CENTER);

 rect(ground.position.x,ground.position.y,800,20);

 //ellipseMode(RADIUS);
 //ellipse(ball.position.x,ball.position.y,20,20);

 box1.display();
 box2.display();
}