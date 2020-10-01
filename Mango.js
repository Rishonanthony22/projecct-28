class Mango{
    constructor(x,y){

        var options={
            isStatic:true,
            restitution:0.5,
            friction:1,
        }
        this.body = Bodies.rectangle(x,y,50,50,options);
        this.image=loadImage("sprites/mango.png");
        this.width = 50;
        this.height = 50;
        World.add(world, this.body);
    }
       
    display(){
        var pos =this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.height);
      }
}