class Boy {
    constructor(){
        var options ={
            isStatic: true
        }
        this.body = Bodies.rectangle(200, 520, 150, 200, options);
        this.width = 150;
        this.height = 200;
        this.image = loadImage("Animation/boy.png");
        
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.width, this.height);
        
    }
}