
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
var tree,boy,boyImg,stone,ground,mango1,chain;


function preload()
{
	boyImg=loadImage("sprites/boy.png");
}

function setup() {
	createCanvas(1400, 400);


	engine = Engine.create();
	world = engine.world;

		stone=new Stone(300,300)
		chain=new Chain(stone.body,{x:250,y:250})
		ground=new Ground(700,380)
		tree=new Tree(580,230)
		mango1=new Mango(580,200)
	
		boy=createSprite(300,300,210,210)
		boy.addImage("boy",boyImg);
		boy.scale=0.1;





	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  
  stone.display();
  chain.display();
  ground.display();
  tree.display();
  mango1 .display();
  drawSprites();
 
}

function mouseDragged(){
    
        Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
    }
   
	function keyPressed(){
		if(keyCode===32){
			Matter.Body.setPosition(stone.body,{x:250,y:250})
		}
	}

	function detectCollision(stone,mango1){
		mangoBodyPosition=mango1.body.position
		stoneBodyPosition=stone.body.position

		var distance=dist(stoneBodyPosition.x,  stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)

		if(distance<=mango1.r+stone.r){
			Matter.Body.setStatic(mango1.body,false);
		}
	}

