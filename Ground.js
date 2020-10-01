class Ground{
constructor(x,y){

    var options={
        isStatic:true,
       
        }
        this.body = Bodies.rectangle(x,y,2000,50,options);
        this.width = 2000;
        this.height = 50;
        World.add(world, this.body);
     
       }
        
       display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("brown");
        rect(pos.x, pos.y, this.width, this.height);
      }
}