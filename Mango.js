// class Mango {
//     constructor(x, y, width, height) {

//       var options = {
//           isStatic: true,
//           restitution: 0.8,
//           density: 1.2
//       }

//       this.mango = Bodies.rectangle(x, y, width, height, options);
//       this.width = width;
//       this.height = height;
//       this.image = loadImage("Animation/mango.png");
//       World.add(world, this.mango);

//     }

//     display(){

//       var pos = this.mango.position;
//       imageMode(CENTER);
//       image(this.image, pos.x, pos.y, this.width, this.height);

//     }
//   }

class Mango{
	constructor(x,y,r)
	{
		var options={
			isStatic:true,
			restitution :0,
            friction :1,
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.image=loadImage("Animation/mango.png")
		this.body=Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.body);
	}

	display()
	{
		var mangoPos=this.body.position;	
		push()
		translate(mangoPos.x, mangoPos.y);
		// rectMode(CENTER);
		rotate(this.body.angle)
		fill(255,0,255)
		imageMode(CENTER);
		ellipseMode(CENTER);
		image(this.image, 0,0,this.r*2, this.r*2)
		pop()
 }
}