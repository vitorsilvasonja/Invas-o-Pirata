const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world

var ground,ground2,ground3,ground4,ground5,ground6

 var angle=20


function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;

 
  ground = new Ground(100,400,100,20,angle,"red")
  ground2 = new Ground(300,400,100,20,angle,"blue")
  ground3 = new Ground(500,400,100,20,angle,"yellow")
  ground4 = new Ground(700,400,100,20,angle,"green")
  ground5 = new Ground(900,400,100,20,angle,"pink")
  ground6 = new Ground(1100,400,100,20,angle,"cyan")
}

function draw() {
  background(189);
   
 ground.display()
 ground2.display()
 ground3.display()
 ground4.display()
 ground5.display()
 ground6.display()





  strokeWeight(2)
  textAlign(CENTER)
  text("X: "+ mouseX + " / " + "Y: "+mouseY,mouseX,mouseY)
}
