class Ground {
    constructor(){
        var options ={
            isStatic: true
        }
        this.body = Bodies.rectangle(450, 690, 10000, 20, options);
        this.width = 10000;
        this.height = 20;
        World.add(world, this.body);
        
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill("brown");
        rect(pos.x, pos.y, this.width, this.height);
        
    }
}