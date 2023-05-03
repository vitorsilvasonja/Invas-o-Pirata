class Ground{
    constructor(x,y,w,h,angle,color){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.angle=angle
        this.ground = Bodies.rectangle(this.x, this.y, this.w, this.h,{isStatic:true})
        World.add(world, this.ground);
        this.color=color
    }

    display(){
        Body.rotate(this.ground,this.angle)
        rectMode(CENTER)  
        

        push ()
        translate (this.x, this.y)
        rotate (this.angle)
        fill (this.color)
        rect(0,0, this.w, this.h)
        pop ()

        this.angle+=0.1
    }
}