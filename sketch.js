
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;



function setup() {
  var canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;

	//Create the Bodies Here.
      rubber = new Rubber(900,450,70);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
	  ground = new Ground(600,height,1200,20);
	  hammer = new Hammer(200,200,200,50);
	  stone = new Stone(300,300,150,150);
	  Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
 

  Engine.update(engine);
   rubber.display();
   ground.display();
   stone.display();
   hammer.display();
}



