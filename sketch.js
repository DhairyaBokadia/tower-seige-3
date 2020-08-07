const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var score=0;

function setup() {
  createCanvas(900,500);
  engine = Engine.create();
  world = engine.world;

  

  stone1=new Stone();
  sling1=new Sling({x:180,y:200},stone1.body);

  ground1=new Ground(600,190,350,20);

  box1=new Box(600,100)
  box2=new Box(600,50)
  box3=new Box(550,100)
  box4=new Box(550,50)
  box5=new Box(650,100)
  box6=new Box(650,50)
  box7=new Box(600,0)
  box8=new Box(700,100)
  box9=new Box(500,100)

 ground2=new Ground(400,490,1000,20)
  


}

function draw() {
  Engine.update(engine)
  background("yellow"); 
  
  rectMode(CENTER)

  text (score,800,50)

  stone1.display()
  sling1.display()
  ground1.display()

  box1.display();
  box1.score();

  box2.display()
  box2.score();

  box3.display()
  box3.score();

  box4.display()
  box4.score();

  box5.display()
  box5.score();

  box6.display()
  box6.score();

  box7.display()
  box7.score();

  box8.display()
  box8.score();

  box9.display()
  box9.score()

  ground2.display();
}

function mouseDragged(){
  Matter.Body.setPosition(stone1.body, {x: mouseX, y: mouseY});
}

function mouseReleased(){
  sling1.fly();
}