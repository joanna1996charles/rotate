const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var angle;

function preload() {

}

function setup() {

  canvas = createCanvas(600, 600);
  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES)
  angle=15;
  
}

function draw() {
  background(180);
  //ellipseMode(RADIUS)
  
  Engine.update(engine);
  fill("black")
  textSize(15)
  ellipse(0,0,10,10);
  text("ORIGIN (0,0)",20,20)
  ellipse(200,200,10,10);
  text("(200,200)",220,200)
  //text("NEW ORIGIN (200,200)",220,200)
  ellipse(400,400,10,10);
  text("(400,400)",420,400)
  //text("NEW ORIGIN (400,400)",420,400)
  ellipse(300,300,10,10);
  text("(300,300)",320,300)
  //text("NEW ORIGIN (300,300)",320,300)


  if(keyIsDown(RIGHT_ARROW)){
    angle+=1;
  }
  if(keyIsDown(LEFT_ARROW)){
    angle-=1;
  }
  push();
  //translate(200,200)
  //rotate(angle)
  rectMode(CENTER)
  rect(200,200,50,50)
  pop()


}
