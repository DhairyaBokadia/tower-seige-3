class Stone{
    constructor(){
        var options={
            density:0.9,
            restitution:0.4
        }
    
        this.body=Bodies.circle(200,200,20,options);

        this.radius=20

        World.add(world,this.body)
    }
    display(){
      var pos=this.body.position

      circle(pos.x,pos.y,2*this.radius)
    }
}