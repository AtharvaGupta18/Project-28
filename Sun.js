class Sun {
    constructor(){
        var options ={
            isStatic: true,

        }
        this.body = Bodies.circle(100, 50, 25, options);
        this.radius = 30;
        World.add(world, this.body);
        
    }
    display(){
        var pos = this.body.position;
        ellipseMode(RADIUS);
        fill("yellow");
        ellipse(pos.x, pos.y, this.radius);
    }
}