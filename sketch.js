
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	image = loadImage("sprites/boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//boy = new Boy (200,500,200,300);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  image(image,200,500,200,300);

 // boy.display();
  
  drawSprites();
 
}



