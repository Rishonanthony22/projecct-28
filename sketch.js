
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
var stone,ground,chain,base;
var bo1,bo2,bo3,bo4,bo5,bo6,bo7,bo8,bo9;

function preload()
{
	
}

function setup() {
	createCanvas(1400, 400);


	engine = Engine.create();
	world = engine.world;

	
	stone=new Stone(300,300)
		chain=new Chain(stone.body,{x:200,y:250})
		ground=new Ground(700,380)
		
		base=new Base(400,253)
	
		bo1=new Box(330,235)
		bo2=new Box(360,235)
		bo3=new Box(390,235)
		bo4=new Box(420,235)
		bo5=new Box(450,235)
		bo6=new Box(360,195)
		bo7=new Box(390,195)
		bo8=new Box(420,195)
		bo9=new Box(390,155)
	
		




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("teal");
  
  stone.display();
  chain.display();
  ground.display();
  bo1.display();
  bo2.display();
  bo3.display();
  bo4.display();
  bo5.display();
  bo6.display();
  bo7.display();
  bo8.display();
  bo9.display(); 

  base.display();
  drawSprites();
 
}

function mouseDragged(){
    
        Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
	}
	
	function mouseReleased(){

		slingshot.fly();
	}
   
	function keyPressed(){
		if(keyCode===32){
			Matter.Body.setPosition(stone.body,{x:250,y:250})
		}
	}

	

