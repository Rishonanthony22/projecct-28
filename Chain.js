class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
      
        this.pointB = pointB
        this.Chain = Constraint.create(options);
        World.add(world, this.Chain);
    }

    fly(){
        this.sling.bodyA = null;
    }
    
    display(){
     
        var pointA = this.Chain.bodyA.position;
            var pointB = this.pointB;
            push();
            
            stroke(48,22,8);
        
                strokeWeight(7);
                line(pointA.x , pointA.y, pointB.x , pointB.y);
                  pop();
        
    }








}