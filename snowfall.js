class snowfall {
    constructor(x,y){
      var option={
        isStatic:false
      }
      this.image = loadImage("snow4.webp")
      this.snow=Bodies.circle(x,y,20,option);
      this.radius=20;
      World.add(world,this.snow);
    }
    update(){
        if(this.snow.position.y>height){
            Matter.Body.setPosition(this.snow,{x:random(0,600),y:random(0,100)});
        }
    }
    display() {
      var pos=this.snow.position;
      imageMode(CENTER);
      image(this.image,pos.x,pos.y,this.radius,this.radius);
    }
  }
  