var d1,d2,d3;
var paper;
var ground;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(600, 600);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = Bodies.rectangle(width/2, 600, width, 10 , {isStatic:true} );
	ground.shapeColor=("brown");
	 World.add(world, ground);
	 
	d2 = new Dustbin(550,550,20,100,"red");
	d3 = new Dustbin(350,550,20,100,"red");
	d1 = new Dustbin(450,590,200,20,"red");

	paper = new Paper(100,390,10);
  
}

function draw() {
	Engine.update(engine);

  rectMode(CENTER);
  background(0);
  
  d1.display();
  d2.display();
  d3.display();
  paper.display();

  //keyPressed();
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:8,y:-20})
}
}
