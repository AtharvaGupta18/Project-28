class Stone {
    constructor(){
        var options ={
            isStatic: false,
            restitution: 0.3,
            density: 1,
            
        }
        this.body = Bodies.rectangle(50, 300, 30, 30, options);
        this.width = 30;
        this.height = 30;
        this.image = loadImage("Animation/stone.png");
        World.add(world, this.body);
        
    }
    display(){
        var pos = this.body.position;
        imageMode(RADIUS);
        fill(255, 0, 165);
        image(this.image, pos.x, pos.y, this.width, this.height);
    }
}