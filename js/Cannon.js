class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.cannon_image = loadImage("assets/cannon.png")
    this.cannonBase_image = loadImage("assets/cannonBase.png")
    
  }
  display(){
    push()
    imageMode(CENTER)
    image(this.cannon_base,this.x,this.y,this.width,this.height)
    pop()
    image(this.cannonBase_image,70,20,200,200)
    noFill()
  }
}
