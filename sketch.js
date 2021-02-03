
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var trash, hugetrash, humoungoustrash;
var crumbledpaper;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 ground = new Ground(350,700,900,25);

 trash = new Garbage(593,650,15,75);
 hugetrash = new Garbage(650,675,100,25);
 humoungoustrash = new Garbage(705,615,15,150);

 crumbledpaper = new Paper(150,675,20);
	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background(0);
  ground.display();
  trash.display();
  hugetrash.display();
  humoungoustrash.display();
  crumbledpaper.display();
  keyPressed();
  drawSprites();
 
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(crumbledpaper.body,crumbledpaper.body.position,{x:85,y:-85});
  }
}
