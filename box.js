class box extends BaseClass {
    constructor(x, y,width, height, angle) {
      super(x,y,20,height,angle);
      box.shapeColor=color(100,255,200);
      Matter.Body.setAngle(this.body,angle);
    }
  };