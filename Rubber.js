class Rubber {
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 10
        }
        this.pointB = pointB;
        this.rubber = Constraint.create(options);
        World.add(world, this.rubber);

    }

    fly(){
        
        this.rubber.bodyA = null;

    }

    display(){

        if(this.rubber.bodyA){

        var pointA = this.rubber.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(3);
        line(pointA.x, pointA.y, pointB.x, pointB.y);

        }
    
    }
}