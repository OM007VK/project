
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin1, dustbin2, dustbin3;
var ball;
var groung1

function preload()
{
	
}

function setup() {
	createCanvas(1500, 400);
    engine = Engine.create();
	world = engine.world;
	
    groung1 = new ground(width/2,height-20,width,10)


	platform=createSprite(750,375,1500,15);
	platform.shapeColor = "yellow"
	
	dustbin1=createSprite(900,310,17,125);
	dustbin1.shapeColor = "white"
	dustbin2=createSprite(1100,310,17,125);
	dustbin2.shapeColor = "white"
	dustbin3=createSprite(1000,370,200,17);
	dustbin3.shapeColor = "white"

	ball = Bodies.circle(width/2 ,200, 20 , {restitution:0.6, isStatic:false});
	World.add(world, ball);

	Engine.run(engine); 
}


function draw() {
  rectMode(CENTER);
  background(0);

	ground1.display();
	
	ball.x= ball.position.x 
	ball.y= ball.position.y 
	circle(ball.position.x,ball.position.y,20)
	drawSprites();
}

function keyPressed() 
{
	if (keyCode === UP_ARROW) 
	{
	Matter.Body.setStatic(ball,true);
	}
}