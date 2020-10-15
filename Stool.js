class Stool {
    constructor(){
        var options = {
            isStatic: true
        }

        this.body = Bodies.rectangle(200, 620, 70, 120, options);
        this.width = 70;
        this.height = 120;
        World.add(world, this.body);
        
    }

    display(){

        var pos = this.body.position;
        rectMode(CENTER);
        fill("brown");
        rect( pos.x, pos.y, this.width, this.height);
        
    }
}