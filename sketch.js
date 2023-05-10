const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world

var tower

var ground

var bg

function preload(){
  bg=loadImage("./assets/background.gif")
}


function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
  tower= new Tower(150,350,160,310)
  ground = new Ground(100,400,100,20)
}

function draw() {
  background(189);
   
  image(bg,0,0,width,height)
  tower.display()

  strokeWeight(2)
  textAlign(CENTER)
  text("X: "+ mouseX + " / " + "Y: "+mouseY,mouseX,mouseY)
}