class Stone{

   constructor(x,y){

    var options={
    isStatic:false,
    restitution:0,
    friction:1,
    density:0.5,
    }

    this.body=Bodies.rectangle(x,y,50,50,options)
    this.image=loadImage("sprites/stone.png");
    this.width=50;
    this.height=50;
    World.add(world,this.body)
        }

   display(){
       var pos=this.body.position;
       imageMode(CENTER);
       image(this.image,pos.x,pos.y,this.width,this.height);
   }

}