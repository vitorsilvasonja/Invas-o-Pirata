class Ground {
    constructor(x, y, w, h) {
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
  
      this.body = Bodies.rectangle(x, y, this.w, this.h, { isStatic: true });
      World.add(world, this.body);
    }
  
    display() {
      var pos = this.body.position;
      rect(pos.x, pos.y, this.w, this.h);
    }
  }