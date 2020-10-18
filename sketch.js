const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(900, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree = new Tree();
	ground = new Ground();
	sun = new Sun();
	boy = new Boy();
	stone = new Stone();
	rubber = new Rubber(stone.body, {x: 150, y: 470});
	stool = new Stool();
	mango1 = new Mango(620, 100, 30);
	mango2 = new Mango(730, 70, 30);
	mango3 = new Mango(800, 170, 30);
	mango4 = new Mango(700, 160, 30);
	mango5 = new Mango(590, 170, 30);
	mango6 = new Mango(520, 250, 30);
	mango7 = new Mango(640, 250, 30);
	mango8 = new Mango(750, 250, 30);
	mango9 = new Mango(850, 230, 30);
	mango10 = new Mango(580, 320, 30);
	mango11 = new Mango(830, 320, 30);

	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
  	background(199);
  
	tree.display();
	ground.display();
	sun.display();
	boy.display();
	stone.display();
	rubber.display();
	stool.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	mango8.display();
	mango9.display();
	mango10.display();
	mango11.display();

	detectCollision(stone, mango1);
	detectCollision(stone, mango2);
	detectCollision(stone, mango3);
	detectCollision(stone, mango4);
	detectCollision(stone, mango5);
	detectCollision(stone, mango6);
	detectCollision(stone, mango7);
	detectCollision(stone, mango8);
	detectCollision(stone, mango9);
	detectCollision(stone, mango10);
	detectCollision(stone, mango11);

}

function mouseDragged(){

	Matter.Body.setPosition(stone.body, {x: mouseX, y: mouseY});

}

function mouseReleased(){

    rubber.fly();   
    
}

function keyPressed(){

	if(keyCode === 32){

		Matter.Body.setPosition(stone.body, {x: 150, y: 470});
		rubber = new Rubber(stone.body, {x: 150, y: 470});

	}

}

// function detectCollision(a, b){

// 	stoneBodyPosition = a.body.position;
// 	mangoBodyPosition = b.body.position;

// 	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);


// 	if(distance <= b.r + a.r){

// 		Matter.Body.setStatic(lmango.body,false);

// 	}

// }

function detectCollision(lstone,lmango){
	/*var collision = Matter.SAT.collides(lstone,lmango);
	if(collision.collided){
		console.log("collided");
		Matter.Body.setStatic(lmango,false);	
	}*/
  mangoBodyPosition = lmango.body.position
  stoneBodyPosition = lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  console.log(distance);
 console.log(lmango.r + lstone.r);
  	if(distance <= lstone.r + lmango.r){

      //console.log(distance);
  	  Matter.Body.setStatic(lmango.body, false);
    }
}
