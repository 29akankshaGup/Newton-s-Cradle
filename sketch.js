
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var bobObject1, bobObject2, bobObject3, bobObject4,bobObject5;
var roof;
var rope1,rope2,rope3,rope4,rope5;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;



	//Create the Bodies Here.
	bobObject1=new Bob(200,500,50);
	bobObject2=new Bob(250,500,50);
	bobObject3=new Bob(300,500,50);
	bobObject4=new Bob(350,500,50);
	bobObject5=new Bob(400,500,50);

	roof=new Roof(300,300,250,20);

	rope1=new Rope(bobObject1.body,roof.body,-50*2,0);
	rope2=new Rope(bobObject2.body,roof.body,-50*1,0);
	rope3=new Rope(bobObject3.body,roof.body,-50*0,0);
	rope4=new Rope(bobObject4.body,roof.body,50*1,0);
	rope5=new Rope(bobObject5.body,roof.body,50*2,0);	
	Engine.run(engine);
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background("blue");

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}



	function keyPressed(){

		if (keyCode === 38) {
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-55,y:-55});
		console.log("hiiii");
		}

	}


