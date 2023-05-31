const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;

var ground, bg;
var tower, cannon;
var angle = 50;

var balls = [];
var boats = [];

//animação do barco navegando
var boatAnimation = []
var boatSpriteSheet, boatSpriteData
var brokenBoatAnimation=[]
var brokenBoatSpriteSheet
var brokenBoatSpriteData

function preload() {
  bg = loadImage("./assets/background.gif");
  boatSpriteSheet = loadImage("./assets/boat/boat.png")
  boatSpriteData = loadJSON("./assets/boat/boat.json")
  brokenBoatSpriteSheet=loadimage("./assets/boat/broken_boat.png")
  brokenBoatSpriteData=loadJSON("./assets/boat/broken_boat.png")
} 

function setup() {
  //convertendo o angulo de radiano para graus
  angleMode(DEGREES);

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;

  tower = new Tower(150, 350, 160, 310);
  ground = new Ground(0, height - 1, width * 2, 1);
  cannon = new Cannon(180, 110, 110, 70, angle);
  //cannonBall = new CannonBall(cannon.x,cannon.y)


  //criando as animações
  var boatFrames = boatSpriteData.frames
  for( var i = 0; i < boatFrames.length; i++){
    var pos = boatFrames[i].position
    var img = boatSpriteSheet.get(pos.x, pos.y, pos.w, pos.h)
    boatAnimation.push(img)
  }
  // criando animação do barco quebrado :D

  var brokenboatFrames=brokenBoatSpriteData.frames
  for (var i=0; i<brokenboatFrames.length;i++){
    var pos=brokenboatFrames[i].position
    var img=brokenBoatSpriteSheet.get(pos.x,pos.y,pos.w,pos.h)
    brokenBoatAnimation.push(img)
  }
}

function draw() {
  background(189);
  image(bg, 0, 0, width, height);
  Engine.update(engine);

  tower.display();
  ground.display();
  showBoats();

  //cannonBall.display()

  //percorrendo o array de balas e chamando a função de exibir
  for (var i = 0; i < balls.length; i++) {
    showCannonBalls(balls[i], i);
  }

  cannon.display();

  strokeWeight(2);
  textAlign(CENTER);
  text("X: " + mouseX + " / " + "Y: " + mouseY, mouseX, mouseY);
}

//função para criar uma nova bala quando a seta para baixo for pressionada
function keyPressed() {
  if (keyCode === DOWN_ARROW) {
    var cannonBall = new CannonBall(cannon.x, cannon.y);
    balls.push(cannonBall);
  }
}

//função para atirar a bala ao liberar seta para baixo
function keyReleased() {
  if (keyCode == DOWN_ARROW) {
    balls[balls.length - 1].shoot();
  }
}

//função para exibir a bala
function showCannonBalls(ball, index) {
  ball.display();
  //condição para fazer a bala sumir
  if (ball.body.position.x >= width || ball.body.position.y >= height - 50) {
    Matter.World.remove(world, ball.body);
    balls.splice(index, 1);
  }
}

function showBoats() {
  if (boats.length > 0) {
    if (
      boats.length < 4 &&
      boats[boats.length - 1].body.position.x < width - 300
    ) {
      var positions = [-20, -60, -70, -80];
      var position = random(positions);
      var boat = new Boat(width, height - 100, 200, 200, position, boatAnimation);
      boats.push(boat);
    }

    for (var i = 0; i < boats.length; i++) {
      Matter.Body.setVelocity(boats[i].body, {
        x: -0.9,
        y: 0,
      });

      
      boats[i].display();
      boats[i].animate()
    }
  } else {
    var boat = new Boat(width, height - 100, 200, 200, -20, boatAnimation);
    boats.push(boat);
  }
}