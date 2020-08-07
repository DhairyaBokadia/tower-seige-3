class Box{
  constructor(x,y){
    var options={
      density:0.4,
      friction:0.9
    }

    this.body=Bodies.rectangle(x,y,50,50,options)
    this.width=50
    this.height=50

    World.add(world,this.body)

  }
display(){
  if (this.body.speed<5.6) {
    var pos=this.body.position
    var angle=this.body.angle
    push()
    translate(pos.x,pos.y)
    rotate (angle)
    rect(0, 0, this.width, this.height);
    fill ("green")
    pop()
    

  } else {
    push ()
    World.remove(world,this.body)
    this.visiblity=this.visiblity-5;
    tint(255,this.visiblity);
    rect(this.body,this.body.position.x,this.body.position.y,50,50);
    pop ()
  }

 
}
score(){
  if (this.Visiblity<=0&&this.Visiblity>=-1000) {
    score++;
  }
}

}

