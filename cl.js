class Tr{
    constructor(pointA,bodyB){
    var options = {
        bodyB: bodyB,
        pointA: pointA,
        stiffness: 0.06,
        length:60
        }
        this.pointA = pointA
        this.sling =Constraint.create(options);
        World.add(world, this.sling);
    }

    

    display(){
       var pointB = this.sling.bodyB.position;
       var pointA = this.pointA;
            push()
            strokeWeight()
            stroke("purple")
            line(pointB.x,pointB.y,pointA.x,pointA.y)
            pop()
        
    }
    
}