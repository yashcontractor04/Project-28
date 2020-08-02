
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy, boy_img;
var stone, string;
var mango1, mango1, mango2, mango3, mango4, mango5, tree;

function preload()
{
	boy_img = loadImage("boy.png");
}

function setup() {
	createCanvas(800, 700);

	boy=createSprite(100,550,30,70);
	boy.addImage("Boy",boy_img);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,660,800,40);
	stone = new Stone(90,510,10);
	string = new Sling(stone,{x:90,y:510});
	tree = new Tree(600,410,100,500);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  detectCollsion(stone,mango1);
  detectCollsion(stone,mango2);
  detectCollsion(stone,mango3);
  detectCollsion(stone,mango4);
  detectCollsion(stone,mango5);

  drawSprites();
 
  stone.display();
  string.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();


}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
    }


function mouseReleased(){   
    Sling.fly();
}

function keyPressed(){
    if(keyCode === 32){
		Matter.Body.setPosition(stone.body,{x:90,y:510});
    	string.attach(stone.body);
    }
}

function detectCollsion(stone,mango1){
	mangoBodyPostion=mango1.body.position;
	stoneBodyPosition=stone.body.position;

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPostion.x, mangoBodyPostion.y);
	if(distance<= mango1.radius+stone.radius){
		Matter.Body.setStatic(mango1.body,false);
	}
}
function detectCollsion(stone,mango2){
	mangoBodyPostion=mango2.body.position;
	stoneBodyPosition=stone.body.position;

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPostion.x, mangoBodyPostion.y);
	if(distance<= mango2.radius+stone.radius){
		Matter.Body.setStatic(mango2.body,false);
	}
}
function detectCollsion(stone,mango3){
	mangoBodyPostion=mango3.body.position;
	stoneBodyPosition=stone.body.position;

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPostion.x, mangoBodyPostion.y);
	if(distance<= mango3.radius+stone.radius){
		Matter.Body.setStatic(mango3.body,false);
	}
}
function detectCollsion(stone,mango4){
	mangoBodyPostion=mango4.body.position;
	stoneBodyPosition=stone.body.position;

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPostion.x, mangoBodyPostion.y);
	if(distance<= mango4.radius+stone.radius){
		Matter.Body.setStatic(mango4.body,false);
	}
}
function detectCollsion(stone,mango5){
	mangoBodyPostion=mango5.body.position;
	stoneBodyPosition=stone.body.position;

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPostion.x, mangoBodyPostion.y);
	if(distance<= mango5.radius+stone.radius){
		Matter.Body.setStatic(mango5.body,false);
	}
}


