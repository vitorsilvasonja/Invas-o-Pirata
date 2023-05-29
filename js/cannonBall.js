class CannonBall {
    constructor(x, y) {
      var options = {
        restitution: 0.8,
        friction: 1.0,
        density: 1.0,
        isStatic: true,
      };
      this.r = 20;
      this.image = loadImage("../assets/cannonball.png");
      this.body = Bodies.circle(x, y, this.r, options);
      World.add(world, this.body);
      this.trajectory=[]
    }
  
    //método para atirar a bala
    shoot() {
      var newAngle = cannon.angle - 28; //capturando o angulo do canhão
      newAngle = newAngle * (3.14 / 180); //convertendo o angulo para radianos
      var velocity = p5.Vector.fromAngle(newAngle); //extraindo as posições do angulo para gerar velocidade
      velocity.mult(0.5); //aumentando a velocidade
      Matter.Body.setStatic(this.body, false); //definindo a bala para static False
  
      //dando velocidade para a bala de acordo com o angulo do canhão
      Matter.Body.setVelocity(this.body, {
        x: velocity.x * (180 / 3.14),
        y: velocity.y * (180 / 3.14),
      });
    }
  
    display() {
      var pos = this.body.position;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.r, this.r);
      pop();

      if (this.body.velocity.x > 0 && this.body.position.x > 300) {
        var position = [this.body.position.x, this.body.position.y];
        this.trajectory.push(position);
      }
      for (var i = 0; i < this.trajectory.length; i++) {
        image(this.image, this.trajectory[i][0], this.trajectory[i][1], 5, 5);
      }
    }
  }