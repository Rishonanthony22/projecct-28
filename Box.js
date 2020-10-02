class Box{
    constructor(x,y){

        var options={
            isStatic:false,
            restitution:0.5,
            friction:1,
        }
        this.body = Bodies.rectangle(x,y,30,40,options);
        this.image=loadImage("sprites/Box.png");
        this.width = 30;
        this.height = 40;
        World.add(world, this.body);
    }
       
    display(){
        var pos =this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.height);
      }
}