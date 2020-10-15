class Mango {
    constructor(x, y, width, height) {

      var options = {
          isStatic: false,
          restitution: 0.8,
          density: 1.2
      }

      this.mango = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("Animation/mango.png");
      World.add(world, this.mango);

    }

    display(){

      var pos = this.mango.position;
      imageMode(CENTER);
      image(this.image, pos.x, pos.y, this.width, this.height);

    }
  }