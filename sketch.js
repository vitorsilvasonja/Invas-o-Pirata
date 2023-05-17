
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world

var ground, bg

var tower, cannon

var angle = 50

var cannonBall

function preload() {
  bg = loadImage("./assets/background.gif")
}

function setup() {

  angleMode(DEGREES)

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;

  tower = new Tower(150, 350, 160, 310)
  ground = new Ground(100, 400, 100, 20)
  cannon = new Cannon(180, 110, 110, 70, angle)
  cannonBall= new CannonBall(cannon.x,cannon.y)

}

function draw() {
  background(189);
  image(bg, 0, 0, width, height)
  tower.display()
  cannonBall.display()
  cannon.display()

  
  strokeWeight(2)
  textAlign(CENTER)
  text("X: " + mouseX + " / " + "Y: " + mouseY, mouseX, mouseY)
}

function keyReleased(){
  if (keyCode==DOWN_ARROW){
  cannonBall.shoot()
 
  }
}


