class Tree {
    constructor(){

        var options ={
            isStatic: true
        }

        this.body = Bodies.rectangle(680, 360, 450, 700, options);
        this.width = 450;
        this.height = 700;
        this.image = loadImage("Animation/tree.png");
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.width, this.height);
        
    }
}