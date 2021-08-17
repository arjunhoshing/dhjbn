class Stone {
    constructor(x,y,r) {
        var options = {
            isStatic: false,
            restitution: 0,
            friction:1,
            density: 1.2
        }

        this.body = Bodies.circle(x,y,r);
        this.radius = r
        this.image = loadImage("sprites/stone.png");
    }

    display() {
        var pos = this.body.position
        circleMode(CENTER);
        circle(pos.x,pos.y,this.radius);
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.radius);
    }


}