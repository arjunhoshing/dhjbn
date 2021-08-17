class Mango {
    constructor(x,y,r) {
        var options = {
            isStatic: true,
            restitution: 0,
            friction: 1
        }

        this.body = Bodies.circle(x,y,r);
        this.radius = r
        World.add(world, this.body);
        this.image = loadImage("sprites/mango.png");
    }

    display() {
        var pos = this.body.position
        circleMode(CENTER);
        circle(pos.x,pos.y,this.radius);
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.radius);
    }
}