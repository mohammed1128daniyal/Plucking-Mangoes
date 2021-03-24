const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;
var world,boy,diametre;

function preload(){
	boy=loadImage("boy.png");
  }

function setup() {
	createCanvas(1300, 600);

	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,50,30);
	mango2=new mango(1000,80,30);
	mango3=new mango(1150,130,30);
	mango4=new mango(1130,200,30);
	mango5=new mango(1070,130,30);
	mango6=new mango(1200,200,30);
	mango7=new mango(1000,150,30);
	mango8=new mango(1050,210,30);
	mango9=new mango(990,220,30);
	mango10=new mango(930,199,30);

	stoneObj=new stone(240,420,25);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	attach=new launcher(stoneObj.body,{x:240,y:420});
	
	Engine.run(engine);

}

function draw() {
  background(230);
  Engine.update(engine);

  fill("black");
  textSize(18);
  text("Press Space To Get A Second Chance To Play!",50,30);

  image(boy ,200,340,200,300);

  detectCollision(stoneObj,mango1);
  detectCollision(stoneObj,mango2);
  detectCollision(stoneObj,mango3);
  detectCollision(stoneObj,mango4);
  detectCollision(stoneObj,mango5);
  detectCollision(stoneObj,mango6);
  detectCollision(stoneObj,mango7);
  detectCollision(stoneObj,mango8);
  detectCollision(stoneObj,mango9);
  detectCollision(stoneObj,mango10);

  treeObj.display();

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

  attach.display();
  stoneObj.display();
  groundObject.display();
}

function mouseDragged() {
	Matter.Body.setPosition(stoneObj.body, {x:mouseX,y:mouseY})
}
function mouseReleased() {
	attach.fly();
}

function detectCollision(lstone,lmango){

    if(lstone.body.position.x- lmango.body.position.x <lmango.r + lstone.r
      && lmango.body.position.x - lstone.body.position.x < lmango.r + lstone.r
      && lstone.body.position.y - lmango.body.position.y < lmango.r + lstone.r
      && lmango.body.position.y - lstone.body.position.y < lmango.r + lstone.r){
      Matter.Body.setStatic(lmango.body,false);
    }
}

function keyPressed() {
	if (keyCode===32) {
		Matter.Body.setPosition(stoneObj.body, {x:235, y:420})
		launcherObject.attach(stoneObj.body);
	}
  }

