class Tree{
constructor(x,y){

    var options={
        isStatic:true,
    }
    this.body = Bodies.rectangle(x,y,200,300,options);
    this.image=loadImage("sprites/tree.png");
    this.width = 200;
    this.height = 300;
    World.add(world, this.body);
}
display(){
    var pos=this.body.position;
    imageMode(CENTER);
    image(this.image,pos.x,pos.y,this.width,this.height);
}
}