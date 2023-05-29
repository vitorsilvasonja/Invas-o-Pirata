class Cannon {
    constructor(x, y, w, h, angle) {
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.angle = angle;
      this.cannonImage = loadImage("../assets/canon.png");
      this.baseImage = loadImage("../assets/cannonBase.png");
    }
  
    display() {
      //console.log(this.angle)
      //condições para mover o cano do canhão
      if (keyIsDown(RIGHT_ARROW) && this.angle < 68) {
        this.angle += 1;
      }
  
      if (keyIsDown(LEFT_ARROW) && this.angle > -50) {
        this.angle -= 1;
      }
  
      //cano do canhão
      push();
      translate(this.x, this.y);
      rotate(this.angle);
      imageMode(CENTER);
      image(this.cannonImage, 0, 0, this.w, this.h);
      pop();
  
      //base do canhão
      image(this.baseImage, 50, 20, 220, 200);
    }
  }